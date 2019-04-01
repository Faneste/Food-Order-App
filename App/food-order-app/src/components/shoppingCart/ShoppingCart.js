import React from 'react';

function ShoppingCart() {
  return (
    <div className="shoppingCart">

      {/* shopping cart single item */}
      <div className="shoppingCart__item">
        {/* item name */}
        <div className="shoppingCart__item__nameContainer">
          <h2 className="shoppingCart__item__nameContainer__name">Pizza mix</h2>
        </div>
        {/* item ingredients */}
        <div className="shoppingCart__item__ingredientsContainer">
          <h2 className="shoppingCart__item__ingredientsContainer__ingredients">sastojci 1, sastojci 2, sastojci 3</h2>
        </div>
        {/* item price */}
        <div className="shoppingCart__item__priceContainer">
          <h2 className="shoppingCart__item__priceContainer__price">1523 rsd</h2>
        </div>
      </div>
      {/* shopping cart total order and price */}
      <div className="shoppingCart__total">
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

    </div>
  )
}

export default ShoppingCart;
