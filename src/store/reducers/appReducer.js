import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  lang: localStorage.getItem('i18nextLng')?.toLowerCase() || 'ko',
  rerender: false,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setLang: (state, { payload }) => {
      state.lang = payload;
    },
    setRerender: (state, { payload }) => {
      state.rerender = payload;
    },
  }
});

export const {
  setLang,
  setRerender
} = appSlice.actions;

export default appSlice.reducer;
