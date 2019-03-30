import React from 'react';
import footerLogo from '../../images/graphics/footerLogo.png';
import footerBasil from '../../images/graphics/footerBasil.png';

function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <img className="footer__container__logo" src={footerLogo} alt="footerLogo"/>
        <a href="#"><div className="footer__container__socialContainer" ><i className="fab fa-facebook-f"></i></div></a>
        <a href="#"><div className="footer__container__socialContainer"><i className="fab fa-twitter"></i></div></a>
        <a href="#"><div className="footer__container__socialContainer"><i className="fab fa-instagram"></i></div></a>
        <img className="footer__container__basil" src={footerBasil} alt="footerBasil"/>
      </div>
    </div>
  )
}

export default Footer;
