import React from 'react';
// footer logo image
import footerLogo from '../../images/graphics/footerLogo.png';
// footer basil/leaves image
import footerBasil from '../../images/graphics/footerBasil.png';

// footer module that containes logo, social icons and basil image
function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        {/* logo */}
        <img className="footer__container__logo" src={footerLogo} alt="footerLogo"/>
        {/* social icons */}
        <a href="www.facebook.com"><div className="footer__container__socialContainer" ><i className="fab fa-facebook-f"></i></div></a>
        <a href="www.twitter.com"><div className="footer__container__socialContainer"><i className="fab fa-twitter"></i></div></a>
        <a href="www.instagram.com"><div className="footer__container__socialContainer"><i className="fab fa-instagram"></i></div></a>
        {/* basil/leaves image */}
        <img className="footer__container__basil" src={footerBasil} alt="footerBasil"/>
      </div>
    </div>
  )
}

export default Footer;
