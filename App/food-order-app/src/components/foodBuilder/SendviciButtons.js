import React from 'react';
import peperoniButton from '../../images/buttons/pizza/peperoniButton.png';

function SendviciButtons() {
  return (
    <div className="foodBuilder__ingredientButton">
      {/* buttons for ingredients */}
      <div className="foodBuilder__ingredientButton__buttonContainer">
        {/* button image */}
        <img className="foodBuilder__ingredientButton__buttonContainer__image" src={peperoniButton} alt="pizzaIngredient"/>
        <div> {/* wrapping div so that the text doesn't opverlapp without the wrapper */}
        {/* button name */}
        <h4 className="foodBuilder__ingredientButton__buttonContainer__name">Sendvici</h4>
        {/* button description */}
        <h4 className="foodBuilder__ingredientButton__buttonContainer__description">Lorem Ipsum is simply dummy text of the printing.</h4>
        {/* button price */}
        <h4 className="foodBuilder__ingredientButton__buttonContainer__price">150 <span style={{fontSize:"0.5em"}}>din</span></h4>
        </div>
      </div>
    </div>
  )
}

export default SendviciButtons;
