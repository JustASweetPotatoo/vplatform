import userHookImage from "../../assets/hooks/userImage.png";
import postImage from "../../assets/hooks/postImage.png";
import postImage2 from "../../assets/hooks/postImage2.jpg";
import type { UserProfile } from "../../interface/User";
import type { Post } from "../../interface/Post";

export interface UserData {
  name: string;
  username: string;
  image: string;
}

const userHookData: UserProfile = {
  name: "Quang Huy",
  username: "@quanghuy",
  avatar: userHookImage,
  id: "82183048882",
};

const mockPosts: Post[] = [
  {
    id: "1",
    description: "This is descrption !",
    upvote: 0,
    userProfile: userHookData,
    images: [{ id: "1128731", src: postImage, userId: "82183048882", postId: "1" }],
    downvote: 0,
    emojiList: [],
    comments: [],
  },
  {
    id: "2",
    description: "This is descrption !",
    upvote: 0,
    userProfile: userHookData,
    images: [
      {
        id: "1128731",
        src: postImage,
        userId: "82183048882",
        postId: "2",
      },
      {
        id: "1128732",
        src: postImage2,
        userId: "82183048882",
        postId: "2",
      },
    ],
    downvote: 0,
    emojiList: [],
    comments: [],
  },
  {
    id: "3",
    description: "This is descrption !",
    upvote: 0,
    userProfile: userHookData,
    images: [
      {
        id: "1128731",
        src: postImage,
        userId: "82183048882",
        postId: "3",
      },
      {
        id: "1128731",
        src: postImage,
        userId: "82183048882",
        postId: "3",
      },
      {
        id: "1128731",
        src: postImage,
        userId: "82183048882",
        postId: "3",
      },
    ],
    downvote: 0,
    emojiList: [],
    comments: [],
  },
  {
    id: "4",
    description: "This is descrption !",
    upvote: 0,
    userProfile: userHookData,
    images: [
      {
        id: "1128731",
        src: postImage,
        userId: "82183048882",
        postId: "4",
      },
      {
        id: "1128731",
        src: postImage,
        userId: "82183048882",
        postId: "4",
      },
      {
        id: "1128731",
        src: postImage,
        userId: "82183048882",
        postId: "4",
      },
      {
        id: "1128731",
        src: postImage,
        userId: "82183048882",
        postId: "4",
      },
    ],
    downvote: 0,
    emojiList: [],
    comments: [],
  },
  {
    id: "5",
    description: "This is descrption !",
    upvote: 0,
    userProfile: userHookData,
    images: [
      {
        id: "1128731",
        src: postImage,
        userId: "82183048882",
        postId: "5",
      },
      {
        id: "1128731",
        src: postImage,
        userId: "82183048882",
        postId: "5",
      },
      {
        id: "1128731",
        src: postImage,
        userId: "82183048882",
        postId: "5",
      },
      {
        id: "1128731",
        src: postImage,
        userId: "82183048882",
        postId: "5",
      },
      {
        id: "1128731",
        src: postImage,
        userId: "82183048882",
        postId: "5",
      },
    ],
    downvote: 0,
    emojiList: [],
    comments: [],
  },
  {
    id: "6",
    description: "This is descrption !",
    upvote: 0,
    userProfile: userHookData,
    images: [
      {
        id: "1128731",
        src: postImage,
        userId: "82183048882",
        postId: "6",
      },
      {
        id: "1128731",
        src: postImage,
        userId: "82183048882",
        postId: "6",
      },
      {
        id: "1128731",
        src: postImage,
        userId: "82183048882",
        postId: "6",
      },
      {
        id: "1128731",
        src: postImage,
        userId: "82183048882",
        postId: "6",
      },
      {
        id: "1128731",
        src: postImage,
        userId: "82183048882",
        postId: "6",
      },
      {
        id: "1128731",
        src: postImage,
        userId: "82183048882",
        postId: "6",
      },
    ],
    downvote: 0,
    emojiList: [],
    comments: [
      {
        id: "",
        postId: "",
        userProfile: userHookData,
        images: [],
        upvote: undefined,
        downvote: undefined,
        content: "This is Comment",
      },
      {
        id: "",
        postId: "",
        userProfile: userHookData,
        images: [],
        upvote: undefined,
        downvote: undefined,
        content: "This is Comment",
      },
      {
        id: "",
        postId: "",
        userProfile: userHookData,
        images: [],
        upvote: undefined,
        downvote: undefined,
        content: "This is Comment",
      },
      {
        id: "",
        postId: "",
        userProfile: userHookData,
        images: [],
        upvote: undefined,
        downvote: undefined,
        content: "This is Comment",
      },
      {
        id: "",
        postId: "",
        userProfile: userHookData,
        images: [],
        upvote: undefined,
        downvote: undefined,
        content: "This is Comment",
      },
      {
        id: "",
        postId: "",
        userProfile: userHookData,
        images: [],
        upvote: undefined,
        downvote: undefined,
        content: "This is Comment",
      },
      {
        id: "",
        postId: "",
        userProfile: userHookData,
        images: [],
        upvote: undefined,
        downvote: undefined,
        content: "This is Comment",
      },
      {
        id: "",
        postId: "",
        userProfile: userHookData,
        images: [],
        upvote: undefined,
        downvote: undefined,
        content: "This is Comment",
      },
    ],
  },
  {
    id: "7",
    description: "This is descrption !",
    upvote: 0,
    userProfile: userHookData,
    downvote: 0,
    emojiList: [],
    comments: [],
  },
  {
    id: "8",
    description: "This is descrption !",
    upvote: 0,
    userProfile: userHookData,
    downvote: 0,
    emojiList: [],
    comments: [],
  },
  {
    id: "9",
    description: "This is descrption !",
    upvote: 0,
    userProfile: userHookData,
    downvote: 0,
    emojiList: [],
    comments: [],
  },
  {
    id: "10",
    description: "This is descrption !",
    upvote: 0,
    userProfile: userHookData,
    downvote: 0,
    emojiList: [],
    comments: [],
  },
];

export { userHookData, mockPosts };
