import React from 'react';
import pizzaDough from '../../images/ingredients/pizzaDough.png';

function FoodBuilder() {
  return (
    <div className="foodBuilder">

      <div className="foodBuilder__textContainer">
        <h2 className="foodBuilder__textContainer__title">Website main title</h2>
        <h3 className="foodBuilder__textContainer__text">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </h3>
      </div>

        <div className="foodBuilder__ingredientsContainer">
          <img className="foodBuilder__ingredientsContainer__pizzaDough" src={pizzaDough} alt="pizzaDough"/>
        </div>

        <div className="foodBuilder__buttonsContainer">
          
        </div>

    </div>
  )
}

export default FoodBuilder;
