import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { itemsApi } from '../services/api';
import type { ItemListEntry, ItemsQueryParams } from '../types/card';

interface AdsListState {
  items: ItemListEntry[];
  total: number;
  loading: boolean;
  error: string | null;
  query: ItemsQueryParams;
  currentPage: number;
}

const PAGE_SIZE = 10;

const initialState: AdsListState = {
  items: [],
  total: 0,
  loading: false,
  error: null,
  query: {
    limit: PAGE_SIZE,
    skip: 0,
    sortColumn: 'createdAt',
    sortDirection: 'desc',
  },
  currentPage: 1,
};

export const fetchAds = createAsyncThunk(
  'ads/fetchAds',
  async (params: ItemsQueryParams, thunkAPI) => {
    const response = await itemsApi.getItems(params, thunkAPI.signal);
    return response;
  }
);

const adsSlice = createSlice({
  name: 'ads',
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<ItemsQueryParams>) => {
      state.query = { ...state.query, ...action.payload };
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
      state.query.skip = (action.payload - 1) * PAGE_SIZE;
    },
    resetFilters: (state) => {
      state.query = {
        limit: PAGE_SIZE,
        skip: 0,
        sortColumn: 'createdAt',
        sortDirection: 'desc',
      };
      state.currentPage = 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAds.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAds.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.items;
        state.total = action.payload.total;
      })
      .addCase(fetchAds.rejected, (state, action) => {
        if (action.meta.aborted) return;
        state.loading = false;
        state.error = action.error.message || 'Не удалось загрузить объявления';
      });
  },
});

export const { setQuery, setPage, resetFilters } = adsSlice.actions;
export const PAGE_SIZE_CONST = PAGE_SIZE;
export default adsSlice.reducer;
