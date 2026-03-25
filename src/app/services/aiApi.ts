import axios from 'axios';
import type { ItemUpdatePayload, MarketPriceInfo, ChatMessage } from '../types/card';

const api = axios.create({
  baseURL: '/api/ai',
  timeout: 30000,
});

export const aiApi = {
  generateDescription: async (
    item: ItemUpdatePayload,
    currentDescription?: string,
    signal?: AbortSignal
  ): Promise<{ description: string }> => {
    const response = await api.post('/description', { item, currentDescription }, { signal });
    return response.data;
  },

  getMarketPrice: async (
    item: ItemUpdatePayload,
    signal?: AbortSignal
  ): Promise<MarketPriceInfo> => {
    const response = await api.post('/market-price', { item }, { signal });
    return response.data;
  },

  chat: async (
    item: ItemUpdatePayload,
    messages: ChatMessage[],
    signal?: AbortSignal
  ): Promise<{ message: string }> => {
    const response = await api.post('/chat', { item, messages }, { signal });
    return response.data;
  },
};
