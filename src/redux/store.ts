import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./reducer/slices/ThemeSlices";
import { saveThemeToLocalStorage } from "./middleware/saveThemeLocalStorage";
import postDetailModalSlice from "./reducer/slices/PostModalSlices";
import displayingMediaSlice from "./reducer/slices/DisplayMedialSlice";

export const store = configureStore({
  reducer: {
    themeSlice: themeSlice.reducer,
    postDetailModalSlice: postDetailModalSlice.reducer,
    displayingMedialSlice: displayingMediaSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(saveThemeToLocalStorage);
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
