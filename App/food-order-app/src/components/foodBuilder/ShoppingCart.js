import React from 'react';
import CalorieCounter from './CalorieCounter';

// individual order card-element that has main name-title, price, delete button, ingredients list and nutrition list
function ShoppingCart(props) {
  return (
      <div className="shoppingCart__item">{/* shopping cart single item */}
        {/* item name */}
        <h2 className="shoppingCart__item__nameContainer__name">Order 1</h2>
        {/* item price */}
        <h2 className="shoppingCart__item__priceContainer__price">{props.shopcartPrice}</h2>
        {/* delete order button*/}
        <button className="shoppingCart__item__deleteButton" onClick={props.shopcartDelete}>x</button>
        {/* item ingredients */}
        <h2 className="shoppingCart__item__ingredientsContainer__ingredients">{props.shopcartIngredients}</h2>
        {/* nutrition list or calorie counter */}
        <CalorieCounter
          calorieCalorie={props.calorieCalorie}
          calorieFat={props.calorieFat}
          calorieSaturated={props.calorieSaturated}
          caloriePoly={props.caloriePoly}
          calorieCholesterol={props.calorieCholesterol}
          calorieSodium={props.calorieSodium}
          calorieCharb={props.calorieCharb}
          calorieFiber={props.calorieFiber}
          calorieSugar={props.calorieSugar}
          calorieProtein={props.calorieProtein}
          calorieKalium={props.calorieKalium}
        />
      </div>

  )
}

export default ShoppingCart;
