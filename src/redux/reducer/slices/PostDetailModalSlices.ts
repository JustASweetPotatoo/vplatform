import type { Post } from "../../../interface/Post";
// import type { UserProfile } from "../../../interface/User";
// import userImage from "../../../assets/hooks/userImage.png";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

// const defaultUserProfile: UserProfile = {
//   name: "Quang Huy",
//   username: "@quanghuy",
//   avatar: userImage,
//   id: "82183048882",
// };

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
