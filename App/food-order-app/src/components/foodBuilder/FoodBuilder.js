import React from 'react';
import pizzaDough from '../../images/ingredients/pizzaDough.png';
import peperoniButton from '../../images/buttons/pizza/peperoniButton.png';

function FoodBuilder() {
  return (
    <div className="foodBuilder">

      {/* title and text of the food building module */}
      <div className="foodBuilder__textContainer">
        <h2 className="foodBuilder__textContainer__title">Order your food online as you like it</h2>
        <h3 className="foodBuilder__textContainer__text">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </h3>
      </div>

      {/* image of pizza and other food */}
      <div className="foodBuilder__ingredientsContainer">
        <img className="foodBuilder__ingredientsContainer__pizzaDough" src={pizzaDough} alt="pizzaDough"/>
      </div>

      {/* buttons container */}
      {/* menu of the type of food */}
      <div className="foodBuilder__buttonsContainer">
        <div className="foodBuilder__buttonsContainer__foodtypeMenu">
          <button className="foodBuilder__buttonsContainer__foodtypeMenu__button">PIZZE</button>
          <span className="foodBuilder__buttonsContainer__foodtypeMenu__span" style={{fontWeight: "400"}}></span>
          <button className="foodBuilder__buttonsContainer__foodtypeMenu__button">SENDVIČI</button>
          <span className="foodBuilder__buttonsContainer__foodtypeMenu__span" style={{fontWeight: "400"}}></span>
          <button className="foodBuilder__buttonsContainer__foodtypeMenu__button">PITE</button>
          <span className="foodBuilder__buttonsContainer__foodtypeMenu__span" style={{fontWeight: "400"}}></span>
          <button className="foodBuilder__buttonsContainer__foodtypeMenu__button">SALATE</button>
        </div>

        {/* type of pizza ingredients buttons */}
        <div className="foodBuilder__ingredientsContainerbutton">
          <div className="foodBuilder__ingredientsContainer__pizzaIngredientsMenuContainer">
            <button className="foodBuilder__ingredientsContainer__pizzaIngredientsMenuContainer__button">Sosevi</button>
            <span className="foodBuilder__ingredientsContainer__pizzaIngredientsMenuContainer__span">~</span>
            <button className="foodBuilder__ingredientsContainer__pizzaIngredientsMenuContainer__button">Sirevi</button>
            <span className="foodBuilder__ingredientsContainer__pizzaIngredientsMenuContainer__span">~</span>
            <button className="foodBuilder__ingredientsContainer__pizzaIngredientsMenuContainer__button">Meso</button>
            <span className="foodBuilder__ingredientsContainer__pizzaIngredientsMenuContainer__span">~</span>
            <button className="foodBuilder__ingredientsContainer__pizzaIngredientsMenuContainer__button">Povrće</button>
            <span className="foodBuilder__ingredientsContainer__pizzaIngredientsMenuContainer__span">~</span>
            <button className="foodBuilder__ingredientsContainer__pizzaIngredientsMenuContainer__button">Začini</button>
          </div>
        </div>

        {/* ingredients for pizza buttons */}
        <div className="foodBuilder__ingredientPizza">
          <div className="foodBuilder__ingredientPizza__buttonContainer">
            {/* pizza button image */}
            <img className="foodBuilder__ingredientPizza__buttonContainer__image" src={peperoniButton} alt="pizzaIngredient"/>
            {/* pizza button name */}
            <h4 className="foodBuilder__ingredientPizza__buttonContainer__name">Pepperoni kobasica</h4>
            {/* pizza button description */}
            <h4 className="foodBuilder__ingredientPizza__buttonContainer__description">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h4>
            {/* pizza button price */}
            <div className="foodBuilder__ingredientPizza__buttonContainer__price">120 <span style={{fontSize:"0.5em"}}>din</span></div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default FoodBuilder;
