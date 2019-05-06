import React from 'react';

function ShoppingCartTotal(props) {
  return (

      <div className="shoppingCart__total">
      {/* shopping cart total order and price */}
        {/* total price */}
        <div className="shoppingCart__total__priceContainer">
          <h2 className="shoppingCart__total__priceContainer__price">1523 rsd</h2>
        </div>
        {/* total calorie */}
        <div className="shoppingCart__total__calorieContainer">
          <h2 className="shoppingCart__total__calorieContainer__calorie">Kalorija: 530</h2>
        </div>
        {/* total adress */}
        <div className="shoppingCart__total__adressContainer">
          <h2 className="shoppingCart__total__adressContainer__adress">Adresa: Butke Butkovica 45</h2>
        </div>
      </div>
  )
}

export default ShoppingCartTotal;
