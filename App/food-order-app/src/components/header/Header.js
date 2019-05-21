import React from 'react';
// logo image
import headerLogo from '../../images/graphics/headerLogo.png';
// basil/leaves image
import headerBasil from '../../images/graphics/headerBasil.png';
// theme dropdown change module
import HeaderTheme from './HeaderTheme';

// simple container module for header and header theme change dropdown
function Header() {
  return (
    <div className="header">
      {/* header logo image*/}
      <img className="header__logo" src={headerLogo} alt="headerLogo"/>
      {/* theme change dropdown menu module */}
      <HeaderTheme />
      {/* basil/leaves image */}
      <img className="header__basil" src={headerBasil} alt="headerLogo"/>
    </div>
  )
}

export default Header;
