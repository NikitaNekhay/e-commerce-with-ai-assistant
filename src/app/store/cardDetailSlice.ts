import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { itemsApi } from '../services/api';
import type { ItemDetail, ItemUpdatePayload } from '../types/card';

interface ItemDetailState {
  item: ItemDetail | null;
  loading: boolean;
  error: string | null;
  saving: boolean;
}

const initialState: ItemDetailState = {
  item: null,
  loading: false,
  error: null,
  saving: false,
};

export const fetchItemById = createAsyncThunk(
  'itemDetail/fetchById',
  async (id: number, thunkAPI) => {
    const response = await itemsApi.getItemById(id, thunkAPI.signal);
    if (!response.items.length) {
      throw new Error('Объявление не найдено');
    }
    return response.items[0];
  }
);

export const updateItem = createAsyncThunk(
  'itemDetail/update',
  async ({ id, data }: { id: number; data: ItemUpdatePayload }, thunkAPI) => {
    const response = await itemsApi.updateItem(id, data, thunkAPI.signal);
    return response.items[0];
  }
);

const itemDetailSlice = createSlice({
  name: 'itemDetail',
  initialState,
  reducers: {
    clearItem: (state) => {
      state.item = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchItemById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchItemById.fulfilled, (state, action) => {
        state.loading = false;
        state.item = action.payload;
      })
      .addCase(fetchItemById.rejected, (state, action) => {
        if (action.meta.aborted) return;
        state.loading = false;
        state.error = action.error.message || 'Не удалось загрузить объявление';
      })
      .addCase(updateItem.pending, (state) => {
        state.saving = true;
        state.error = null;
      })
      .addCase(updateItem.fulfilled, (state, action) => {
        state.saving = false;
        state.item = action.payload;
      })
      .addCase(updateItem.rejected, (state, action) => {
        if (action.meta.aborted) return;
        state.saving = false;
        state.error = action.error.message || 'Не удалось сохранить объявление';
      });
  },
});

export const { clearItem } = itemDetailSlice.actions;
export default itemDetailSlice.reducer;
