import React from 'react';
import GallerySlider from "./GallerySlider";


class Gallery extends React.Component {

  render() {
    return (
      <div className="gallery">
        <div className="gallery__imageContainer">
          <GallerySlider />
        </div>
        <div className="gallery__textContainer">
          <h1>Pogledajte naš restoran</h1>
          <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h4>

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
