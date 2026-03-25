import { useEffect, useState, useCallback, useRef } from 'react';
import { useParams, useNavigate, Link } from 'react-router';
import { Form, Input, InputNumber, Select, Button, Alert, Spin, message, Popover, Modal } from 'antd';
import { BulbOutlined, ArrowLeftOutlined, LoadingOutlined, RedoOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { fetchItemById, updateItem, clearItem } from '../store/cardDetailSlice';
import { CATEGORY_OPTIONS } from '../utils/categories';
import { aiApi } from '../services/aiApi';
import ElectronicsFields from '../components/edit/ElectronicsFields';
import AutoFields from '../components/edit/AutoFields';
import RealEstateFields from '../components/edit/RealEstateFields';
import AiChat from '../components/edit/AiChat';
import DiffView from '../components/edit/DiffView';
import type { Category, ItemUpdatePayload, MarketPriceInfo } from '../types/card';

const { TextArea } = Input;

const DRAFT_PREFIX = 'ad-draft-';

function getDraftKey(id: string) {
  return `${DRAFT_PREFIX}${id}`;
}

function buildPayloadFromForm(values: any): ItemUpdatePayload {
  return {
    category: values.category,
    title: values.title,
    price: values.price,
    description: values.description || undefined,
    params: values.params || {},
  };
}

export default function CardEditPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { item, loading, error, saving } = useAppSelector((state) => state.itemDetail);
  const [form] = Form.useForm();
  const [selectedCategory, setSelectedCategory] = useState<Category | undefined>();
  const [descriptionLength, setDescriptionLength] = useState(0);
  const [currentDescription, setCurrentDescription] = useState('');
  const initializedRef = useRef(false);

  // AI states
  const [aiDescLoading, setAiDescLoading] = useState(false);
  const [aiDescResult, setAiDescResult] = useState<string | null>(null);
  const [aiPriceLoading, setAiPriceLoading] = useState(false);
  const [aiPriceData, setAiPriceData] = useState<MarketPriceInfo | null>(null);
  const [showPricePopover, setShowPricePopover] = useState(false);
  const [aiDescDone, setAiDescDone] = useState(false);
  const [aiPriceDone, setAiPriceDone] = useState(false);
  const aiDescAbortRef = useRef<AbortController | null>(null);
  const aiPriceAbortRef = useRef<AbortController | null>(null);

  // All hooks MUST be above any early returns

  // Provide current form data for AI chat context
  const getItemPayload = useCallback((): ItemUpdatePayload | null => {
    const values = form.getFieldsValue(true);
    if (!values.category || !values.title) return null;
    return buildPayloadFromForm(values);
  }, [form]);

  const populateFromItem = useCallback(() => {
    if (!item) return;
    const values = {
      category: item.category,
      title: item.title,
      price: item.price,
      description: item.description || '',
      params: item.params,
    };
    form.setFieldsValue(values);
    setSelectedCategory(item.category);
    setDescriptionLength(item.description?.length || 0);
    setCurrentDescription(item.description || '');
  }, [item, form]);

  // Auto-save draft on form changes
  const handleValuesChange = useCallback(() => {
    if (!id) return;
    const values = form.getFieldsValue(true);
    localStorage.setItem(getDraftKey(id), JSON.stringify(values));
  }, [id, form]);

  // Cleanup abort on unmount
  useEffect(() => {
    return () => { aiDescAbortRef.current?.abort(); aiPriceAbortRef.current?.abort(); };
  }, []);

  // Fetch item
  useEffect(() => {
    if (id) {
      const promise = dispatch(fetchItemById(Number(id)));
      return () => { promise.abort(); };
    }
  }, [dispatch, id]);

  // Cleanup on unmount
  useEffect(() => {
    return () => { dispatch(clearItem()); };
  }, [dispatch]);

  // Check for draft and populate form when item loads
  useEffect(() => {
    if (!item || !id || initializedRef.current) return;
    initializedRef.current = true;

    const draftKey = getDraftKey(id);
    const savedDraft = localStorage.getItem(draftKey);

    if (savedDraft) {
      try {
        const draft = JSON.parse(savedDraft);
        Modal.confirm({
          title: 'Несохраненный черновик',
          content: 'У вас есть несохраненный черновик этого объявления. Восстановить?',
          okText: 'Восстановить',
          cancelText: 'Отклонить',
          onOk() {
            form.setFieldsValue(draft);
            setSelectedCategory(draft.category);
            setDescriptionLength(draft.description?.length || 0);
            setCurrentDescription(draft.description || '');
          },
          onCancel() {
            localStorage.removeItem(draftKey);
            populateFromItem();
          },
        });
      } catch {
        localStorage.removeItem(draftKey);
        populateFromItem();
      }
    } else {
      populateFromItem();
    }
  }, [item, id, form, populateFromItem]);

  // Category change handler
  const handleCategoryChange = (value: Category) => {
    setSelectedCategory(value);
    form.setFieldsValue({ params: {} });
    handleValuesChange();
  };

  // AI: Generate/improve description
  const handleAiDescription = async () => {
    const values = form.getFieldsValue(true);
    if (!values.category || !values.title) {
      message.warning('Заполните категорию и название для генерации описания');
      return;
    }

    aiDescAbortRef.current?.abort();
    const controller = new AbortController();
    aiDescAbortRef.current = controller;

    setAiDescLoading(true);
    setAiDescResult(null);
    setAiDescDone(false);
    // Capture current description before AI call for diff
    setCurrentDescription(values.description || '');

    try {
      const payload = buildPayloadFromForm(values);
      const currentDesc = values.description?.trim() || undefined;
      const result = await aiApi.generateDescription(payload, currentDesc, controller.signal);
      setAiDescResult(result.description);
      setAiDescDone(true);
    } catch (err: any) {
      if (err.name !== 'CanceledError' && err.code !== 'ERR_CANCELED') {
        message.error('Не удалось сгенерировать описание');
        setAiDescDone(true);
      }
    } finally {
      setAiDescLoading(false);
    }
  };

  const handleApplyDescription = () => {
    if (aiDescResult) {
      form.setFieldsValue({ description: aiDescResult });
      setDescriptionLength(aiDescResult.length);
      setCurrentDescription(aiDescResult);
      setAiDescResult(null);
      handleValuesChange();
      message.success('Описание применено');
    }
  };

  const handleRejectDescription = () => {
    setAiDescResult(null);
  };

  // AI: Market price
  const handleAiMarketPrice = async () => {
    const values = form.getFieldsValue(true);
    if (!values.category || !values.title) {
      message.warning('Заполните категорию и название для оценки цены');
      return;
    }

    aiPriceAbortRef.current?.abort();
    const controller = new AbortController();
    aiPriceAbortRef.current = controller;

    setAiPriceLoading(true);
    setAiPriceData(null);
    setAiPriceDone(false);

    try {
      const payload = buildPayloadFromForm(values);
      const result = await aiApi.getMarketPrice(payload, controller.signal);
      setAiPriceData(result);
      setShowPricePopover(true);
      setAiPriceDone(true);
    } catch (err: any) {
      if (err.name !== 'CanceledError' && err.code !== 'ERR_CANCELED') {
        message.error('Не удалось оценить рыночную цену');
        setAiPriceDone(true);
      }
    } finally {
      setAiPriceLoading(false);
    }
  };

  const handleApplyMarketPrice = () => {
    if (aiPriceData) {
      form.setFieldsValue({ price: aiPriceData.avgPrice });
      setShowPricePopover(false);
      handleValuesChange();
      message.success('Цена применена');
    }
  };

  // Submit form
  const handleSubmit = async (values: any) => {
    if (!id) return;
    const payload = buildPayloadFromForm(values);

    try {
      await dispatch(updateItem({ id: Number(id), data: payload })).unwrap();
      localStorage.removeItem(getDraftKey(id));
      message.success('Объявление успешно обновлено');
      navigate(`/ads/${id}`);
    } catch {
      message.error('Не удалось сохранить изменения');
    }
  };

  // Validation failed on submit
  const handleFinishFailed = () => {
    message.error('При попытке сохранить изменения произошла ошибка. Попробуйте ещё раз или зайдите позже.');
  };

  const handleCancel = () => {
    if (id) localStorage.removeItem(getDraftKey(id));
    navigate(`/ads/${id}`);
  };

  // Render category-specific fields
  const renderCategoryFields = () => {
    switch (selectedCategory) {
      case 'electronics': return <ElectronicsFields />;
      case 'auto': return <AutoFields />;
      case 'real_estate': return <RealEstateFields />;
      default: return <p className="text-gray-400">Выберите категорию для отображения характеристик</p>;
    }
  };

  // --- Early returns AFTER all hooks ---

  if (loading && !item) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Spin size="large" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8">
        <div className="max-w-[1400px] mx-auto">
          <Alert message="Ошибка загрузки" description={error} type="error" showIcon />
          <Link to="/ads" className="inline-block mt-4">
            <Button icon={<ArrowLeftOutlined />}>Вернуться к списку</Button>
          </Link>
        </div>
      </div>
    );
  }

  if (!item) return null;

  // Market price popover content
  const pricePopoverContent = (
    <div className="w-[360px] p-2">
      {aiPriceLoading ? (
        <div className="flex items-center justify-center py-4">
          <Spin indicator={<LoadingOutlined />} /> <span className="ml-2">Анализируем рынок...</span>
        </div>
      ) : aiPriceData ? (
        <>
          <h4 className="font-semibold mb-2">Ответ AI:</h4>
          <div className="text-sm space-y-1 mb-3">
            <p>Минимальная: <strong>{aiPriceData.minPrice.toLocaleString('ru-RU')} ₽</strong></p>
            <p>Средняя: <strong>{aiPriceData.avgPrice.toLocaleString('ru-RU')} ₽</strong></p>
            <p>Максимальная: <strong>{aiPriceData.maxPrice.toLocaleString('ru-RU')} ₽</strong></p>
            {aiPriceData.reasoning && (
              <p className="text-gray-500 mt-2">{aiPriceData.reasoning}</p>
            )}
          </div>
          <div className="flex gap-2">
            <Button type="primary" size="small" onClick={handleApplyMarketPrice}>
              Применить среднюю
            </Button>
            <Button size="small" onClick={() => setShowPricePopover(false)}>
              Закрыть
            </Button>
          </div>
        </>
      ) : null}
    </div>
  );

  return (
    <div className="p-8">
      <div className="max-w-[1400px] mx-auto">
        <Link to={`/ads/${id}`} className="inline-flex items-center gap-2 text-gray-500 hover:text-blue-600 mb-4">
          <ArrowLeftOutlined /> К объявлению
        </Link>

        <div className="flex gap-6">
          {/* Main form */}
          <div className="flex-1 min-w-0">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 transition-colors">
              <h1 className="text-3xl font-medium mb-6">Редактирование объявления</h1>

              <Form
                form={form}
                layout="vertical"
                onFinish={handleSubmit}
                onFinishFailed={handleFinishFailed}
                onValuesChange={handleValuesChange}
                className="space-y-4"
              >
                {/* Category */}
                <Form.Item
                  name="category"
                  label={<span className="font-semibold">Категория</span>}
                  rules={[{ required: true, message: 'Выберите категорию' }]}
                >
                  <Select
                    size="large"
                    style={{ maxWidth: 256 }}
                    placeholder="Выберите категорию"
                    onChange={handleCategoryChange}
                  >
                    {CATEGORY_OPTIONS.map((opt) => (
                      <Select.Option key={opt.value} value={opt.value}>{opt.label}</Select.Option>
                    ))}
                  </Select>
                </Form.Item>

                <div className="h-px bg-gray-200 dark:bg-gray-600" />

                {/* Title */}
                <Form.Item
                  name="title"
                  label={
                    <span>
                      <span className="text-red-500 mr-1">*</span>
                      <span className="font-semibold">Название</span>
                    </span>
                  }
                  rules={[{ required: true, message: 'Пожалуйста, введите название' }]}
                >
                  <Input size="large" placeholder="Введите название объявления" style={{ maxWidth: 456 }} allowClear />
                </Form.Item>

                <div className="h-px bg-gray-200 dark:bg-gray-600" />

                {/* Price - use Form.Item without name for layout, inner Form.Item with name for control */}
                <Form.Item label={
                  <span>
                    <span className="text-red-500 mr-1">*</span>
                    <span className="font-semibold">Цена</span>
                  </span>
                }>
                  <div className="flex gap-6 items-center flex-wrap">
                    <Form.Item
                      name="price"
                      noStyle
                      rules={[{ required: true, message: 'Пожалуйста, введите цену' }]}
                    >
                      <InputNumber
                        size="large"
                        style={{ maxWidth: 456, width: '100%' }}
                        min={0}
                        formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
                        parser={(value) => Number(value!.replace(/\s/g, '')) as unknown as 0}
                        addonAfter="₽"
                      />
                    </Form.Item>
                    <Popover
                      content={pricePopoverContent}
                      trigger="click"
                      open={showPricePopover}
                      onOpenChange={setShowPricePopover}
                    >
                      <Button
                        icon={aiPriceDone && !aiPriceLoading ? <RedoOutlined /> : <BulbOutlined />}
                        className={aiPriceDone && !aiPriceLoading
                          ? 'bg-[#f6ffed] dark:bg-green-900/30 border-0 text-[#52c41a] dark:text-green-400'
                          : 'bg-[#f9f1e6] dark:bg-yellow-900/30 border-0 text-[#ffa940] dark:text-orange-400 hover:bg-[#f9f1e6] hover:text-[#ffa940]'}
                        onClick={handleAiMarketPrice}
                        loading={aiPriceLoading}
                      >
                        {aiPriceLoading ? 'Выполняется запрос' : aiPriceDone ? 'Повторить запрос' : 'Узнать рыночную цену'}
                      </Button>
                    </Popover>
                  </div>
                </Form.Item>

                <div className="h-px bg-gray-200 dark:bg-gray-600" />

                {/* Characteristics */}
                <div>
                  <h3 className="font-semibold mb-4">Характеристики</h3>
                  <div className="grid grid-cols-1 gap-1" style={{ maxWidth: 456 }}>
                    {renderCategoryFields()}
                  </div>
                </div>

                <div className="h-px bg-gray-200 dark:bg-gray-600" />

                {/* Description - use Form.Item without name for layout, inner Form.Item with name for control */}
                <Form.Item label={<span className="font-semibold">Описание</span>}>
                  <div className="space-y-3">
                    <Form.Item name="description" noStyle>
                      <TextArea
                        rows={6}
                        maxLength={1000}
                        showCount
                        style={{ maxWidth: 942 }}
                        onChange={(e) => setDescriptionLength(e.target.value.length)}
                      />
                    </Form.Item>

                    <Button
                      icon={aiDescDone && !aiDescLoading ? <RedoOutlined /> : <BulbOutlined />}
                      className={aiDescDone && !aiDescLoading
                        ? 'bg-[#f6ffed] border-0 text-[#52c41a]'
                        : 'bg-[#f9f1e6] border-0 text-[#ffa940] hover:bg-[#f9f1e6] hover:text-[#ffa940]'}
                      onClick={handleAiDescription}
                      loading={aiDescLoading}
                    >
                      {aiDescLoading ? 'Выполняется запрос' : aiDescDone ? 'Повторить запрос' : (descriptionLength > 0 ? 'Улучшить описание' : 'Придумать описание')}
                    </Button>

                    {/* Diff View: Было → Стало */}
                    {aiDescResult && (
                      <DiffView
                        original={currentDescription}
                        improved={aiDescResult}
                        onApply={handleApplyDescription}
                        onReject={handleRejectDescription}
                      />
                    )}
                  </div>
                </Form.Item>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button type="primary" htmlType="submit" size="large" loading={saving}>
                    Сохранить
                  </Button>
                  <Button size="large" onClick={handleCancel}>
                    Отменить
                  </Button>
                </div>
              </Form>
            </div>
          </div>

          {/* AI Chat sidebar */}
          <div className="w-[380px] shrink-0">
            <div className="sticky top-20">
              <AiChat getItemPayload={getItemPayload} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
