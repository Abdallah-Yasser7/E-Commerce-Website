import React from "react";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import mobile from "../../images/mobile.png";
// import { RightButton } from "./RightButton";

export const ProductGallery = () => {
  const images = [
    {
      original: `${mobile}`,
      thumbnail: `${mobile}`,
    },
    {
      original: `${mobile}`,
      thumbnail: `${mobile}`,
    },
    {
      original: `${mobile}`,
      thumbnail: `${mobile}`,
    },
  ];
  return (
    <div className="parent-gallery">
      <ReactImageGallery
        items={images}
        showFullscreenButton={false}
        showPlayButton={false}
        isRTL={true}
        // showThumbnails={false}
        // renderRightNav={RightButton}
        // renderLeftNav={LeftButton}
      />
    </div>
  );
};
