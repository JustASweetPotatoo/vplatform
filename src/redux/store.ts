import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./reducer/ThemeSlices";
import { saveThemeToLocalStorage } from "./middleware/saveThemeLocalStorage";

export const store = configureStore({
  reducer: { themeSlice: themeSlice.reducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(saveThemeToLocalStorage),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
