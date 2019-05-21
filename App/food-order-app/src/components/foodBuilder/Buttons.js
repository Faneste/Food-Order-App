import React from 'react';

// main button module that passes data/props as data-"value" through html and has onCLick
function Buttons(props) {
  return (
    <div
      className="foodBuilder__ingredientButton__buttonContainer"
      onClick={props.ingredientButtonClick}

      data-name={props.dataname}
      data-description={props.datadescription}
      data-price={props.dataprice}
      data-imagesrc={props.dataimagesrc}
      data-calories={props.datacalories}

      id={props.ingredientTitleStyling}
    >
        {/* button elements(title, checkbox, description, price and ingredient type title) */}
        <div
          onMouseOver={(e) => {
            e.stopPropagation();
            e.nativeEvent.stopImmediatePropagation();
            console.log("dsdsd");
          }}
          id={props.ingredientTitleHide} className="foodBuilder__ingredientButton__buttonContainer__container"> {/* wrapping div so that the text doesn't overlap without the wrapper */}
          {/* checkbox toggle that shows selected ingredients */}
          <form id={props.ingredientTitleHide} className="foodBuilder__ingredientButton__buttonContainer__checkboxForm">
            <input type="checkbox" checked={props.pizzaButtonCheckbox} readOnly value="pizzaButtonCheckbox" />
          </form>
          {/* button main ingedient title */}
          <h4 className="foodBuilder__ingredientButton__buttonContainer__name">{props.buttonName}</h4>
          {/* button price */}
          <h4 className="foodBuilder__ingredientButton__buttonContainer__price"><span style={{fontSize:"0.8em"}}>cena:</span>{props.buttonPrice}<span style={{fontSize:"0.8em"}}>din</span></h4>
          {/* button description */}
          <h4 className="foodBuilder__ingredientButton__buttonContainer__description">{props.buttonDescription}</h4>
        </div>

        {/* this is ingedient type title, if state has title object rest of the elements are hidden and only this title text is show and stylized */}
        <h2 className="foodBuilder__ingredientButton__buttonContainer__ingredientTitle">{props.ingredientType}</h2>
      </div>
  )
}

export default Buttons;
