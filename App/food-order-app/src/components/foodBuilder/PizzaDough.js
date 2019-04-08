import React from 'react';
import pizzaDough from '../../images/ingredients/pizzaDough.png';

function PizzaDough() {
  return (
    <div className="foodBuilder__ingredientsContainer">
      {/* image of pizza and other food */}
      <img className="foodBuilder__ingredientsContainer__pizzaDough" src={pizzaDough} alt="pizzaDough"/>
    </div>
  )
}

export default PizzaDough;
