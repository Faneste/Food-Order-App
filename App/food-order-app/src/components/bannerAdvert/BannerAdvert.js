import React from 'react';
import bannerAd from '../../images/graphics/bannerAd.png';

function BannerAdvert() {
  return (
    <div className="bannerAdvert">
      <img className="bannerAdvert__image" src={bannerAd} alt="bannerAd"/>
    </div>
  )
}

export default BannerAdvert;
