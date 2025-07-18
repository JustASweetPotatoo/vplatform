import type React from "react";
import { faChevronUp, faChevronDown, faShare, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserProfileShortCut from "../UserProfileShortCut";
import PostImageRender from "./PostImageRender";
import type { Post } from "../../../interface/Post";
import { useDispatch } from "react-redux";
import { setDisplayPost } from "../../../redux/reducer/slices/PostDetailModalSlices";

interface PostItemProps {
  underContent?: React.FC;
  data: Post;
}

const PostItem: React.FC<PostItemProps> = (props) => {
  const dispatch = useDispatch();

  const handlePostClickAction = (_e: React.MouseEvent) => {
    dispatch(setDisplayPost(props.data));
  };

  return (
    <div key={props.data.id} className="p-4 border border-gray-300 dark:border-none rounded-lg bg-white dark:bg-[#252525]">
      <UserProfileShortCut userProfile={props.data.userProfile} data={"Create timestamp"} className="flex items-center gap-4 w-full mb-5" />

      <div className="mt-5" onClick={handlePostClickAction}>
        {props.data.description}
      </div>

      {props.data.images && <PostImageRender images={props.data.images}></PostImageRender>}

      <div className="flex flex-row h-10 mt-5 w-full justify-between bg-[#383838] rounded-2xl">
        <div className="h-full flex flex-row space-x-4">
          <button className="transition-colors cursor-pointer duration-200 hover:bg-gray-300 dark:hover:bg-[#838383] px-4 rounded-2xl">
            <FontAwesomeIcon icon={faChevronUp} className="text-xl" /> {props.data.upvote ?? 0}
          </button>
          <button className="transition-colors cursor-pointer duration-200 hover:bg-gray-300 dark:hover:bg-[#838383] px-4 rounded-2xl">
            <FontAwesomeIcon icon={faChevronDown} className="text-xl" /> {props.data.downvote ?? 0}
          </button>
          <button className="transition-colors cursor-pointer duration-200 hover:bg-gray-300 dark:hover:bg-[#838383] px-4 rounded-2xl">
            <FontAwesomeIcon icon={faChevronUp} className="text-xl" /> EMOJI 1
          </button>
          <button className="transition-colors cursor-pointer duration-200 hover:bg-gray-300 dark:hover:bg-[#838383] px-4 rounded-2xl">
            <FontAwesomeIcon icon={faChevronDown} className="text-xl" /> EMOJI 2
          </button>
        </div>

        <div className="h-full flex flex-row space-x-4">
          <button className="px-4 rounded-2xl hover:underline cursor-pointer" onClick={handlePostClickAction}>
            {props.data.comments.length} bình luận
          </button>
          <button className="px-4 rounded-2xl hover:underline cursor-pointer">{5} Chia sẻ</button>
        </div>
      </div>

      <div className="flex flex-row h-10 mt-4 w-full justify-between bg-[#383838] rounded-2xl">
        <div className="w-full h-full flex justify-center">
          <button className="w-full transition-colors cursor-pointer duration-200 hover:bg-gray-300 dark:hover:bg-[#838383] px-4 rounded-2xl" onClick={handlePostClickAction}>
            <FontAwesomeIcon icon={faComment} className="text-xl" /> Bình luận
          </button>
        </div>
        <div className="w-full h-full flex justify-center">
          <button className="w-full transition-colors cursor-pointer duration-200 hover:bg-gray-300 dark:hover:bg-[#838383] px-4 rounded-2xl">
            <FontAwesomeIcon icon={faShare} className="text-xl" /> Chia sẻ
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
