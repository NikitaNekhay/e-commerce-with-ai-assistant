import { describe, it, expect } from 'vitest';
import itemDetailReducer, { clearItem } from '../cardDetailSlice';

describe('itemDetailSlice', () => {
  const initialState = {
    item: null,
    loading: false,
    error: null,
    saving: false,
  };

  it('returns initial state', () => {
    const state = itemDetailReducer(undefined, { type: 'unknown' });
    expect(state).toEqual(initialState);
  });

  describe('clearItem', () => {
    it('clears item and error', () => {
      const stateWithItem = {
        ...initialState,
        item: { id: 1, category: 'electronics' as const, title: 'Test', price: 100, params: {}, createdAt: '2025-01-01', needsRevision: false },
        error: 'Some error',
      };
      const state = itemDetailReducer(stateWithItem, clearItem());
      expect(state.item).toBeNull();
      expect(state.error).toBeNull();
    });
  });
});
