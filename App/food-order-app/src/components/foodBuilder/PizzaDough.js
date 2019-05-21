import React from 'react';
// pizza dough image
import pizzaDough from '../../images/ingredients/pizzaDough.png';

// simple module that holds the pizza dough image
function PizzaDough(props) {
  return (
    <div className="foodBuilder__ingredientsContainer">
      {/* image of pizza dough */}
      <img className="foodBuilder__ingredientsContainer__pizzaDough" src={pizzaDough} alt="pizzaDough"/>
    </div>
  )
}

export default PizzaDough;
