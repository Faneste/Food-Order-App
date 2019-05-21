import React from 'react';
// gallery slider plugin / link: https://reactjsexample.com/lightweight-and-fully-customizable-carousel-component-for-react/
import { Carousel } from 'react-responsive-carousel';
// styling the gallery slider
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// gallery slider images
import slider1 from '../../images/slider/slider1.jpg';
import slider2 from '../../images/slider/slider2.jpg';
import slider3 from '../../images/slider/slider3.jpg';

// gallery slider plugin module with images, image description and options
class GallerySlider extends React.Component {
  render() {
      return (
          <Carousel
          infiniteLoop={true}
          emulateTouch={true}
          autoPlay={true}
          showStatus={false}
          showThumbs={false}
          >
              <div>
                  <img src={slider1} alt="slider1" />
                  <p className="legend">Slika 1 dodaj text</p>
              </div>
              <div>
                  <img src={slider2} alt="slider2" />
                  <p className="legend">Slika 2 dodaj text</p>
              </div>
              <div>
                  <img src={slider3} alt="slider2" />
                  <p className="legend">Slika 3 dodaj text</p>
              </div>
          </Carousel>
      );
  }
}

export default GallerySlider;
