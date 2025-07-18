import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faChevronUp, faChevronDown, faComment, faPlus, faFaceSmile } from "@fortawesome/free-solid-svg-icons";
import { type Post } from "../../interface/Post";
import { removeDisplayPost } from "../../redux/reducer/slices/PostDetailModalSlices";
import { useDispatch } from "react-redux";
import PostItem from "./MainContentConfessionTable/PostItem";
import { Link } from "react-router-dom";
import PostCommentRender from "./MainContentConfessionTable/PostCommentRender";

interface Props {
  isOpen: boolean;
  post: Post | null;
}

const PostDisplayModal: React.FC<Props> = ({ isOpen, post }) => {
  const dispatch = useDispatch();
  const handlePostCloseAction = () => {
    dispatch(removeDisplayPost());
  };
  if (!isOpen || !post) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#000000a2]">
      <div className="bg-white dark:bg-[#1a1a1a] text-black dark:text-white w-full max-w-[70rem] max-h-[90vh] overflow-auto rounded-xl shadow-lg relative">
        {/* Close Button */}
        <button onClick={handlePostCloseAction} className="absolute top-3 right-3 text-2xl text-gray-600 dark:text-gray-300 hover:text-red-500 z-50">
          <FontAwesomeIcon icon={faXmark} />
        </button>

        {/* Content */}
        <PostItem data={post} />

        {/* Comment section */}
        <PostCommentRender post={post} />
      </div>
    </div>
  );
};

export default PostDisplayModal;
