// store.ts
import { configureStore } from '@reduxjs/toolkit';

import { persistStore } from 'redux-persist';
import persistedLanguageSlice from './Reducers/LanguageReducer';

const store = configureStore({
  reducer: {
    language: persistedLanguageSlice,
  },
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export default store;
