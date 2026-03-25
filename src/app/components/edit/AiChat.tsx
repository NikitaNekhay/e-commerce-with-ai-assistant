import { useState, useRef, useEffect } from 'react';
import { Input, Button, Spin } from 'antd';
import { SendOutlined, RobotOutlined, UserOutlined, DeleteOutlined } from '@ant-design/icons';
import { aiApi } from '../../services/aiApi';
import type { ItemUpdatePayload, ChatMessage } from '../../types/card';

interface AiChatProps {
  getItemPayload: () => ItemUpdatePayload | null;
}

export default function AiChat({ getItemPayload }: AiChatProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    return () => { abortRef.current?.abort(); };
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    const text = inputValue.trim();
    if (!text || isLoading) return;

    const item = getItemPayload();
    if (!item) return;

    const userMessage: ChatMessage = { role: 'user', content: text };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInputValue('');
    setIsLoading(true);

    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    try {
      const result = await aiApi.chat(item, updatedMessages, controller.signal);
      const assistantMessage: ChatMessage = { role: 'assistant', content: result.message };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err: any) {
      if (err.name !== 'CanceledError' && err.code !== 'ERR_CANCELED') {
        const errorMessage: ChatMessage = { role: 'assistant', content: 'Произошла ошибка. Попробуйте ещё раз.' };
        setMessages((prev) => [...prev, errorMessage]);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleClear = () => {
    abortRef.current?.abort();
    setMessages([]);
    setIsLoading(false);
  };

  return (
    <div className="border rounded-lg flex flex-col h-[500px] bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="px-4 py-3 border-b flex items-center justify-between bg-white dark:bg-gray-800 rounded-t-lg">
        <div className="flex items-center gap-2">
          <RobotOutlined className="text-blue-500" />
          <span className="font-semibold text-sm">AI-ассистент</span>
        </div>
        {messages.length > 0 && (
          <Button
            type="text"
            size="small"
            icon={<DeleteOutlined />}
            onClick={handleClear}
            className="text-gray-400 hover:text-red-500"
          >
            Очистить
          </Button>
        )}
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.length === 0 && (
          <div className="text-center text-gray-400 text-sm mt-8">
            <RobotOutlined className="text-3xl mb-2 block" />
            <p>Задайте вопрос об объявлении.</p>
            <p className="text-xs mt-1">Например: «Как улучшить описание?» или «Какую цену выставить?»</p>
          </div>
        )}

        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {msg.role === 'assistant' && (
              <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-1">
                <RobotOutlined className="text-blue-500 text-xs" />
              </div>
            )}
            <div
              className={`max-w-[80%] rounded-lg px-3 py-2 text-sm whitespace-pre-wrap ${
                msg.role === 'user'
                  ? 'bg-blue-500 text-white'
                  : 'bg-white dark:bg-gray-700 border'
              }`}
            >
              {msg.content}
            </div>
            {msg.role === 'user' && (
              <div className="w-7 h-7 rounded-full bg-gray-200 flex items-center justify-center shrink-0 mt-1">
                <UserOutlined className="text-gray-500 text-xs" />
              </div>
            )}
          </div>
        ))}

        {isLoading && (
          <div className="flex gap-2 justify-start">
            <div className="w-7 h-7 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
              <RobotOutlined className="text-blue-500 text-xs" />
            </div>
            <div className="bg-white dark:bg-gray-700 border rounded-lg px-3 py-2">
              <Spin size="small" />
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-3 border-t bg-white dark:bg-gray-800 rounded-b-lg">
        <div className="flex gap-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Напишите сообщение..."
            disabled={isLoading}
          />
          <Button
            type="primary"
            icon={<SendOutlined />}
            onClick={handleSend}
            disabled={!inputValue.trim() || isLoading}
          />
        </div>
      </div>
    </div>
  );
}
