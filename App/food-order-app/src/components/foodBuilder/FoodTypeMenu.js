import React from 'react';

function FoodTypeMenu() {
  return (
      <div className="foodBuilder__buttonsContainer__foodtypeMenu">
        {/* menu of the type of food */}
        <a className="foodBuilder__buttonsContainer__foodtypeMenu__button" href="/pizzaButtons">PIZZE</a>
        <span className="foodBuilder__buttonsContainer__foodtypeMenu__span" style={{fontWeight: "400"}}></span>
        <a className="foodBuilder__buttonsContainer__foodtypeMenu__button" href="/sendviciButtons">SENDVIČI</a>
        <span className="foodBuilder__buttonsContainer__foodtypeMenu__span" style={{fontWeight: "400"}}></span>
        <a className="foodBuilder__buttonsContainer__foodtypeMenu__button" href="/piteButtons">PITE</a>
        <span className="foodBuilder__buttonsContainer__foodtypeMenu__span" style={{fontWeight: "400"}}></span>
        <a className="foodBuilder__buttonsContainer__foodtypeMenu__button" href="/salateButtons">SALATE</a>
      </div>
  )
}

export default FoodTypeMenu;
