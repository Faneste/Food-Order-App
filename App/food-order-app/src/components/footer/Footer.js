import React from 'react';
import footerLogo from '../../images/graphics/footerLogo.png';
import footerBasil from '../../images/graphics/footerBasil.png';

function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <img className="footer__container__logo" src={footerLogo}/>
        <img className="footer__container__basil" src={footerBasil}/>
        <div className="footer__container__socialContainer"><i class="fab fa-facebook-f"></i></div>
      </div>
    </div>
  )
}

export default Footer;
