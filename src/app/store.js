import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import clickerReducer from '../features/clicker/clickerSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    clicker: clickerReducer,
  },
});
