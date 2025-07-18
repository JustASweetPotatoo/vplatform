import type React from "react";
import type { PostImage } from "../../../interface/Post";

interface PostImageRenderProps {
  images: PostImage[];
}

const PostImageRender: React.FC<PostImageRenderProps> = ({ images }) => {
  if (images.length == 1) {
    return (
      <div className="w-full mt-5 rounded-2xl flex gap-1 overflow-hidden">
        {images.map((image, i) => (
          <img src={image.src} key={i} alt="" className="w-full rounded-lg object-cover h-[40rem]" />
        ))}
      </div>
    );
  }

  if (images.length === 2) {
    return (
      <div className="w-full mt-5 rounded-2xl flex gap-1 overflow-hidden">
        {images.map((image, i) => (
          <img src={image.src} key={i} alt="" className="w-1/2 rounded-lg object-cover h-[40rem]" />
        ))}
      </div>
    );
  }

  if (images.length === 3) {
    return (
      <div className="w-full mt-5 rounded-2xl space-y-1 overflow-hidden">
        <div className="flex gap-1">
          {images.slice(0, 2).map((image, i) => (
            <img src={image.src} key={i} alt="" className="w-1/2 rounded-lg object-cover h-[20rem]" />
          ))}
        </div>
        <img src={images[2].src} alt="" className="w-full rounded-lg object-cover h-[20rem]" />
      </div>
    );
  }

  if (images.length === 4) {
    return (
      <div className="w-full mt-5 rounded-2xl space-y-1 overflow-hidden">
        <div className="flex gap-1">
          {images.slice(0, 2).map((image, i) => (
            <img src={image.src} key={i} alt="" className="w-1/2 rounded-lg object-cover h-[20rem]" />
          ))}
        </div>
        <div className="flex gap-1">
          {images.slice(2).map((image, i) => (
            <img src={image.src} key={i + 2} alt="" className="w-1/2 rounded-lg object-cover h-[20rem]" />
          ))}
        </div>
      </div>
    );
  }

  if (images.length === 5) {
    return (
      <div className="w-full mt-5 rounded-2xl space-y-1 overflow-hidden">
        <div className="flex gap-1">
          {images.slice(0, 2).map((image, i) => (
            <img src={image.src} key={i} alt="" className="w-1/2 rounded-lg object-cover h-[20rem]" />
          ))}
        </div>
        <div className="flex gap-1">
          {images.slice(2).map((image, i) => (
            <img src={image.src} key={i + 2} alt="" className="w-1/3 rounded-lg object-cover h-[20rem]" />
          ))}
        </div>
      </div>
    );
  }

  if (images.length > 5) {
    return (
      <div className="w-full mt-5 rounded-2xl space-y-1 overflow-hidden">
        <div className="flex gap-1">
          {images.slice(0, 2).map((image, i) => (
            <img src={image.src} key={i} alt="" className="w-1/2 rounded-lg object-cover h-[20rem]" />
          ))}
        </div>
        <div className="flex gap-1 relative">
          {images.slice(2, 4).map((image, i) => (
            <img src={image.src} key={i + 2} alt="" className="w-1/3 rounded-lg object-cover h-[20rem]" />
          ))}
          <div className="relative w-1/3 h-[20rem]">
            <img src={images[5].src} alt="" className="w-full h-full object-cover rounded-lg" />
            <div className="absolute inset-0 bg-[#00000052] flex items-center justify-center text-white text-2xl font-bold rounded-lg">+{images.length - 5}</div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default PostImageRender;
