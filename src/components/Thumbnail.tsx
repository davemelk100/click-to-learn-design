import React from "react";

interface ThumbnailProps {
  title: string;
  imageUrl: string;
}

const Thumbnail: React.FC<ThumbnailProps> = ({ title, imageUrl }) => {
  return (
    <div className="thumbnail">
      <img src={imageUrl} alt={title} className="w-full h-auto" />
      <h3 className="mt-2 text-lg font-semibold">{title}</h3>
    </div>
  );
};

export default Thumbnail;
