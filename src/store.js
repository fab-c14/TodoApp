import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './reducers/index.js';

const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});

export default store;
