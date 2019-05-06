import React from 'react';

function ShoppingCart(props) {
  return (

      <div className="shoppingCart__item">
      {/* shopping cart single item */}
        {/* item name */}
        <div className="shoppingCart__item__nameContainer">
          <h2 className="shoppingCart__item__nameContainer__name">Order 1</h2>
        </div>
        {/* item ingredients */}
        <div className="shoppingCart__item__ingredientsContainer">
          <h2 className="shoppingCart__item__ingredientsContainer__ingredients">{props.shopcartIngredients}</h2>
        </div>
        {/* item price */}
        <div className="shoppingCart__item__priceContainer">
          <h2 className="shoppingCart__item__priceContainer__price">{props.shopcartPrice}</h2>
        </div>
        <button className="shoppingCart__item__deleteButton" onClick={props.shopcartDelete}>x</button>
      </div>

  )
}

export default ShoppingCart;
