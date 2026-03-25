import { configureStore } from '@reduxjs/toolkit';
import adsReducer from './cardsSlice';
import itemDetailReducer from './cardDetailSlice';

export const store = configureStore({
  reducer: {
    ads: adsReducer,
    itemDetail: itemDetailReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
