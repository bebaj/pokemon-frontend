import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    // Itt adjuk hozzá a slice-okat
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
