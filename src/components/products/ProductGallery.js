import React from "react";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useParams } from "react-router-dom";
import { useViewDetailsProductHook } from "../../hook/products/viewDetailsProductHook";
// import { RightButton } from "./RightButton";
// import { useEffect } from "react";
// import images from "../../images/mobile.png"

export const ProductGallery = () => {
  const { id } = useParams();
  const [item] = useViewDetailsProductHook(id);

  let images = [];
  if (item) {
    if (item.images) {
        images = item.images.map((img) => { return {
        original: img,
        thumbnail: img,
      }})
    }
  }

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
