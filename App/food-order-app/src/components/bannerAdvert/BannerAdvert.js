import React from 'react';
import bannerAd from '../../images/graphics/bannerAd.png';
import mobileBannerAd from '../../images/graphics/mobileBanerAd.png';

function BannerAdvert() {
  return (
    <div className="bannerAdvert">
      <img className="bannerAdvert__image" src={bannerAd} alt="bannerAd"/>
      <img className="bannerAdvert__imageMobile" src={mobileBannerAd} alt="mobileBannerAd"/>
    </div>
  )
}

export default BannerAdvert;
