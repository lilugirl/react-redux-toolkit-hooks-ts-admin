import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import productReducer from './productSlice';

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});

export type ProductState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  ProductState,
  unknown,
  Action<string>
>;
