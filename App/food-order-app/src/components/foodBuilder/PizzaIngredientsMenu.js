import React from 'react';

// unused module for pizza ingredients tab toggle menu
function PizzaIngredientsMenu() {
  return (
        <div className="foodBuilder__ingredientsContainerbutton">
          {/* type of pizza ingredients buttons */}
          <div className="foodBuilder__ingredientsContainer__pizzaIngredientsMenuContainer">
            <button className="foodBuilder__ingredientsContainer__pizzaIngredientsMenuContainer__button">Sosevi</button>
            <span className="foodBuilder__ingredientsContainer__pizzaIngredientsMenuContainer__span">&#8759;</span>
            <button className="foodBuilder__ingredientsContainer__pizzaIngredientsMenuContainer__button">Sirevi</button>
            <span className="foodBuilder__ingredientsContainer__pizzaIngredientsMenuContainer__span">&#8759;</span>
            <button className="foodBuilder__ingredientsContainer__pizzaIngredientsMenuContainer__button">Meso</button>
            <span className="foodBuilder__ingredientsContainer__pizzaIngredientsMenuContainer__span">&#8759;</span>
            <button className="foodBuilder__ingredientsContainer__pizzaIngredientsMenuContainer__button">Povrće</button>
            <span className="foodBuilder__ingredientsContainer__pizzaIngredientsMenuContainer__span">&#8759;</span>
            <button className="foodBuilder__ingredientsContainer__pizzaIngredientsMenuContainer__button">Začini</button>
          </div>
        </div>
  )
}

export default PizzaIngredientsMenu;
