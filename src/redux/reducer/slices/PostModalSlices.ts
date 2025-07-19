import type { Post } from "../../../interface/Post";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: { post: Post | undefined } = {
  post: undefined,
};

const postDetailModalSlice = createSlice({
  name: "postDetailModalSlice",
  initialState,
  reducers: {
    setDisplayPost: (state, action: PayloadAction<Post>) => {
      state.post = action.payload;
    },
    removeDisplayPost: (state) => {
      if (state.post) {
        state.post = undefined;
      }
    },
  },
});

export const { setDisplayPost, removeDisplayPost } = postDetailModalSlice.actions;
export default postDetailModalSlice;
