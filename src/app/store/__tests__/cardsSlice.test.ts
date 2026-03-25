import { describe, it, expect } from 'vitest';
import adsReducer, { setQuery, setPage, resetFilters, PAGE_SIZE_CONST } from '../cardsSlice';

describe('adsSlice', () => {
  const initialState = {
    items: [],
    total: 0,
    loading: false,
    error: null,
    query: {
      limit: PAGE_SIZE_CONST,
      skip: 0,
      sortColumn: 'createdAt' as const,
      sortDirection: 'desc' as const,
    },
    currentPage: 1,
  };

  it('returns initial state', () => {
    const state = adsReducer(undefined, { type: 'unknown' });
    expect(state).toEqual(initialState);
  });

  describe('setQuery', () => {
    it('merges query params', () => {
      const state = adsReducer(initialState, setQuery({ q: 'test' }));
      expect(state.query.q).toBe('test');
      expect(state.query.limit).toBe(PAGE_SIZE_CONST);
    });

    it('sets categories filter', () => {
      const state = adsReducer(initialState, setQuery({ categories: ['auto', 'electronics'] }));
      expect(state.query.categories).toEqual(['auto', 'electronics']);
    });

    it('sets sort params', () => {
      const state = adsReducer(initialState, setQuery({ sortColumn: 'price', sortDirection: 'asc' }));
      expect(state.query.sortColumn).toBe('price');
      expect(state.query.sortDirection).toBe('asc');
    });
  });

  describe('setPage', () => {
    it('sets current page and computes skip', () => {
      const state = adsReducer(initialState, setPage(3));
      expect(state.currentPage).toBe(3);
      expect(state.query.skip).toBe(20);
    });

    it('page 1 has skip 0', () => {
      const state = adsReducer(initialState, setPage(1));
      expect(state.currentPage).toBe(1);
      expect(state.query.skip).toBe(0);
    });
  });

  describe('resetFilters', () => {
    it('resets to initial query and page 1', () => {
      let state = adsReducer(initialState, setQuery({ q: 'test', categories: ['auto'] }));
      state = adsReducer(state, setPage(5));
      state = adsReducer(state, resetFilters());

      expect(state.currentPage).toBe(1);
      expect(state.query.q).toBeUndefined();
      expect(state.query.categories).toBeUndefined();
      expect(state.query.skip).toBe(0);
      expect(state.query.sortColumn).toBe('createdAt');
      expect(state.query.sortDirection).toBe('desc');
    });
  });
});
