import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import type { PostImage } from "../../interface/Media";
import { clearDisplayingMedia } from "../../redux/reducer/slices/DisplayMedialSlice";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

const Media = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const displayingMedia = useSelector((state: RootState) => state.displayingMedialSlice);

  useEffect(() => {
    if (!displayingMedia.mediaId || displayingMedia.mediaId.length == 0) {
      navigate("/confession");
      return;
    }

    getImage();
  }, []);

  const getImage = () => {
    console.log(displayingMedia);
    if (displayingMedia.post && displayingMedia.post.images) {
      const data = displayingMedia.post.images.find((imgae) => imgae.id === displayingMedia.mediaId);
      setImage(data);
    }
  };

  const [image, setImage] = useState<PostImage | undefined>(undefined);

  const handleCloseButton = () => {
    navigate("/confession");
    dispatch(clearDisplayingMedia());
  };

  return (
    <div className="fixed inset-0 z-1 pt-[4rem] bg-[#000000a2]">
      <PanelGroup autoSaveId="media-panel-layout" direction="horizontal" className="h-full">
        {/* Left Panel: Hình ảnh */}
        <Panel defaultSize={60} minSize={60} maxSize={80} className="relative bg-black">
          <button onClick={handleCloseButton} className="absolute top-5 left-5 text-2xl p-4 transition duration-200 text-white hover:text-red-500 cursor-pointer z-10">
            <FontAwesomeIcon icon={faXmark} className="text-4xl" />
          </button>

          <div className="h-full flex items-center justify-center">
            <img src={image?.src ?? ""} alt="" className="w-[70rem] max-w-full max-h-full object-contain" />
          </div>
        </Panel>

        {/* Resize Handle */}
        <PanelResizeHandle className="bg-gray-600 w-1 hover:bg-gray-400 cursor-col-resize" />

        {/* Right Panel: Sidebar info */}
        <Panel defaultSize={40} minSize={20} maxSize={70} className="bg-white dark:bg-[#1a1a1a] p-4 overflow-y-auto">
          <h2 className="text-xl font-bold text-black dark:text-white">Thông tin hình ảnh</h2>
          <p className="text-sm mt-2 text-gray-700 dark:text-gray-300">ID: {displayingMedia.mediaId}</p>
          <p className="text-sm mt-1 text-gray-600 dark:text-gray-400">Post ID: {displayingMedia.post?.id}</p>
          <div className="mt-4 text-gray-500 dark:text-gray-300">Thông tin thêm ở đây...</div>
        </Panel>
      </PanelGroup>
    </div>
  );
};

export default Media;
