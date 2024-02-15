import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  language: 'en',
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;

export const selectLanguage = (state: { language: { language: string }; }) => state.language.language;

const persistConfig = {
  key: 'language',
  storage: AsyncStorage,
};

const persistedLanguageSlice = persistReducer(persistConfig, languageSlice.reducer);

export default persistedLanguageSlice;
