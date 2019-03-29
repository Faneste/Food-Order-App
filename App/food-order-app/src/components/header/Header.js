import React from 'react';
import headerLogo from '../../images/graphics/headerLogo.png';
import headerBasil from '../../images/graphics/headerBasil.png';

// console.log(logo);

function Header() {
  return (
    <div className="header">
      <img className="header__logo" src={headerLogo}/>
      <img className="header__basil" src={headerBasil}/>
    </div>
  )
}

export default Header;
