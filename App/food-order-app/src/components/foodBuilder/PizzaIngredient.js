import React from 'react';

// simple module that has single ingredient image and passes that to the food module to be mapped and displayed
function PizzaIngredient(props) {
  return (
    <div className="foodBuilder__ingredientsContainer--ingredient">
      {/* image of ingredient */}
      <img className="foodBuilder__ingredientsContainer__ingredient" src={props.imageIngredient} alt="pizzaIngredient"/>
    </div>
  )
}

export default PizzaIngredient;
