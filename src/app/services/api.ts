import axios from 'axios';
import type {
  ItemsListResponse,
  ItemDetailResponse,
  ItemUpdatePayload,
  ItemsQueryParams,
} from '../types/card';

const api = axios.create({
  baseURL: '',
  timeout: 10000,
});

export const itemsApi = {
  getItems: async (params: ItemsQueryParams = {}, signal?: AbortSignal): Promise<ItemsListResponse> => {
    const queryParams: Record<string, string> = {};

    if (params.q) queryParams.q = params.q;
    if (params.limit !== undefined) queryParams.limit = String(params.limit);
    if (params.skip !== undefined) queryParams.skip = String(params.skip);
    if (params.needsRevision) queryParams.needsRevision = 'true';
    if (params.categories && params.categories.length > 0) {
      queryParams.categories = params.categories.join(',');
    }
    if (params.sortColumn) queryParams.sortColumn = params.sortColumn;
    if (params.sortDirection) queryParams.sortDirection = params.sortDirection;

    const response = await api.get<ItemsListResponse>('/items', {
      params: queryParams,
      signal,
    });
    return response.data;
  },

  getItemById: async (id: number, signal?: AbortSignal): Promise<ItemDetailResponse> => {
    const response = await api.get<ItemDetailResponse>(`/items/${id}`, { signal });
    return response.data;
  },

  updateItem: async (id: number, data: ItemUpdatePayload, signal?: AbortSignal): Promise<ItemDetailResponse> => {
    const response = await api.put<ItemDetailResponse>(`/items/${id}`, data, { signal });
    return response.data;
  },
};

export default api;
