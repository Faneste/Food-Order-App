import React from 'react';
// car svg icon for the order button
import carSvg from '../../images/icons/carSvg.svg';

// shoping cart final order field that displays final full price, all calories, adress and order button and passes that as props
function ShoppingCartTotal(props) {
  return (
      <div className="shoppingCart__total">{/* shopping cart total order and price */}
        {/* total price */}
        <div className="shoppingCart__total__priceContainer">
          <h2 className="shoppingCart__total__priceContainer__price">1523 rsd</h2>
        </div>
        {/* total calorie */}
        <div className="shoppingCart__total__calorieContainer">
          <h2 className="shoppingCart__total__calorieContainer__calorie">Kalorija: 530</h2>
        </div>
        {/* adress */}
        <div className="shoppingCart__total__adressContainer">
          <h2 className="shoppingCart__total__adressContainer__adress">Adresa: Butke Butkovica 45</h2>
        </div>
        {/* order button */}
        <button className="shoppingCart__total__buttonTotal">
          <span className="shoppingCart__total__buttonTotal__textSpan">PORUČI</span>
          <img src={carSvg} alt="carSvg" />
        </button>
      </div>
  )
}

export default ShoppingCartTotal;
