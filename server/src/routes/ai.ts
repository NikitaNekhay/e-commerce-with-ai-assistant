import { Router, Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

const router = Router();

const safetyRules = fs.readFileSync(
  path.join(__dirname, '..', 'prompts', 'safety.md'),
  'utf-8'
);

const CATEGORY_LABELS: Record<string, string> = {
  auto: 'Транспорт',
  real_estate: 'Недвижимость',
  electronics: 'Электроника',
};

function formatItemContext(item: any): string {
  const lines: string[] = [
    `Категория: ${CATEGORY_LABELS[item.category] || item.category}`,
    `Название: ${item.title}`,
    `Цена: ${item.price} ₽`,
  ];

  if (item.description) {
    lines.push(`Текущее описание: ${item.description}`);
  }

  if (item.params && typeof item.params === 'object') {
    const paramLabels: Record<string, string> = {
      type: 'Тип', brand: 'Бренд', model: 'Модель', color: 'Цвет',
      condition: 'Состояние', yearOfManufacture: 'Год выпуска',
      transmission: 'Коробка передач', mileage: 'Пробег',
      enginePower: 'Мощность двигателя', address: 'Адрес',
      area: 'Площадь', floor: 'Этаж',
    };

    for (const [key, value] of Object.entries(item.params)) {
      if (value !== undefined && value !== null && value !== '') {
        const label = paramLabels[key] || key;
        lines.push(`${label}: ${value}`);
      }
    }
  }

  return lines.join('\n');
}

async function callOpenRouter(messages: { role: string; content: string }[]): Promise<string> {
  const apiKey = process.env.OPENROUTER_API_KEY;
  const model = process.env.OPENROUTER_MODEL || 'google/gemini-2.0-flash-001';

  if (!apiKey) {
    throw new Error('OPENROUTER_API_KEY is not configured');
  }

  const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
      'HTTP-Referer': 'http://localhost:5173',
    },
    body: JSON.stringify({
      model,
      messages,
      temperature: 0.7,
      max_tokens: 1024,
    }),
  });

  if (!response.ok) {
    const errorBody = await response.text();
    throw new Error(`OpenRouter API error: ${response.status} - ${errorBody}`);
  }

  const data: any = await response.json();
  return data.choices?.[0]?.message?.content || '';
}

// POST /api/ai/description - generate or improve description
router.post('/description', async (req: Request, res: Response) => {
  try {
    const { item, currentDescription } = req.body;

    if (!item) {
      res.status(400).json({ error: 'Item data is required' });
      return;
    }

    const itemContext = formatItemContext(item);
    const isImprove = currentDescription && currentDescription.trim().length > 0;

    const systemPrompt = `${safetyRules}

Ты — AI-ассистент для маркетплейса, помогающий продавцам писать описания товаров.
Отвечай ТОЛЬКО на русском языке.
Используй ТОЛЬКО данные товара, предоставленные ниже. Не придумывай характеристики, которых нет в данных.
Пиши привлекательно, подробно и по делу. Описание должно быть 2-4 абзаца.`;

    const userPrompt = isImprove
      ? `Улучши описание этого объявления. Сделай его более привлекательным и подробным, сохранив основной смысл.

Данные товара:
${itemContext}

Текущее описание для улучшения:
${currentDescription}

Верни ТОЛЬКО улучшенное описание, без пояснений.`
      : `Придумай привлекательное описание для этого объявления на маркетплейсе.

Данные товара:
${itemContext}

Верни ТОЛЬКО описание, без пояснений.`;

    const description = await callOpenRouter([
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userPrompt },
    ]);

    res.json({ description: description.trim() });
  } catch (err: any) {
    console.error('AI description error:', err.message);
    res.status(500).json({ error: err.message || 'Failed to generate description' });
  }
});

// POST /api/ai/market-price - suggest market price
router.post('/market-price', async (req: Request, res: Response) => {
  try {
    const { item } = req.body;

    if (!item) {
      res.status(400).json({ error: 'Item data is required' });
      return;
    }

    const itemContext = formatItemContext(item);

    const systemPrompt = `${safetyRules}

Ты — AI-ассистент для маркетплейса, помогающий продавцам оценить рыночную стоимость товара.
Отвечай ТОЛЬКО на русском языке.
Анализируй ТОЛЬКО данные товара, предоставленные ниже.
Ответ ОБЯЗАТЕЛЬНО должен быть в формате JSON без markdown-разметки.`;

    const userPrompt = `Оцени рыночную стоимость этого товара на основании его характеристик.

Данные товара:
${itemContext}

Верни ответ СТРОГО в формате JSON (без \`\`\`json обёртки):
{
  "minPrice": число_минимальная_цена,
  "maxPrice": число_максимальная_цена,
  "avgPrice": число_средняя_цена,
  "reasoning": "краткое обоснование оценки"
}`;

    const response = await callOpenRouter([
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userPrompt },
    ]);

    // Parse JSON from response, handling possible markdown wrapping
    let cleaned = response.trim();
    if (cleaned.startsWith('```')) {
      cleaned = cleaned.replace(/^```(?:json)?\n?/, '').replace(/\n?```$/, '');
    }

    const parsed = JSON.parse(cleaned);

    res.json({
      minPrice: Number(parsed.minPrice) || 0,
      maxPrice: Number(parsed.maxPrice) || 0,
      avgPrice: Number(parsed.avgPrice) || 0,
      reasoning: String(parsed.reasoning || ''),
    });
  } catch (err: any) {
    console.error('AI market-price error:', err.message);
    res.status(500).json({ error: err.message || 'Failed to estimate market price' });
  }
});

// POST /api/ai/chat - chat about the item
router.post('/chat', async (req: Request, res: Response) => {
  try {
    const { item, messages } = req.body;

    if (!item || !messages) {
      res.status(400).json({ error: 'Item data and messages are required' });
      return;
    }

    const itemContext = formatItemContext(item);

    const systemPrompt = `${safetyRules}

Ты — AI-ассистент для маркетплейса. Ты помогаешь продавцу улучшить его объявление.
Отвечай ТОЛЬКО на русском языке.
Ты можешь обсуждать ТОЛЬКО данное конкретное объявление и советы по его улучшению.
Если тебя спрашивают о чём-то, не связанном с этим объявлением, вежливо откажись.

Данные текущего объявления:
${itemContext}`;

    const chatMessages = [
      { role: 'system', content: systemPrompt },
      ...messages.slice(-20).map((m: any) => ({
        role: m.role === 'user' ? 'user' : 'assistant',
        content: String(m.content),
      })),
    ];

    const reply = await callOpenRouter(chatMessages);

    res.json({ message: reply.trim() });
  } catch (err: any) {
    console.error('AI chat error:', err.message);
    res.status(500).json({ error: err.message || 'Failed to get AI response' });
  }
});

export default router;
