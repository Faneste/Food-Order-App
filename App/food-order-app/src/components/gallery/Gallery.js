import React from 'react';
import GallerySlider from "./GallerySlider";

// gallery module that container gallery slider and text section with title and description
class Gallery extends React.Component {
  render() {
    return (
      <div className="gallery">
        {/* image container for gallery slider */}
        <div className="gallery__imageContainer">
          <GallerySlider />
        </div>
        {/* text section with title and descriptions */}
        <div className="gallery__textContainer">
          {/* title */}
          <h1>Pogledajte naš restoran</h1>
          {/* description 1 */}
          <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h4>
          {/* description 2 */}
          <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h4>
        </div>
      </div>
    )
  }

}

export default Gallery;
