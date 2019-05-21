import React from 'react';
// default banner ad image for desktop
import bannerAd from '../../images/graphics/bannerAd.png';
// mobile banner ad image for responsive design
import mobileBannerAd from '../../images/graphics/mobileBanerAd.png';

// banner ad that has images for desktop and for mobile design
// images are displayed or hidden based on screen resolution
function BannerAdvert() {
  return (
    <div className="bannerAdvert">
      <img className="bannerAdvert__image" src={bannerAd} alt="bannerAd"/>
      <img className="bannerAdvert__imageMobile" src={mobileBannerAd} alt="mobileBannerAd"/>
    </div>
  )
}

export default BannerAdvert;
