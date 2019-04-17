import React from 'react';

// passing data as "data-name etc." through div and assigning it in main module in map
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
    >
      {/* button image */}
      <img className="foodBuilder__ingredientButton__buttonContainer__image" src={props.buttonImage} alt={props.imageAlt} />
      <div> {/* wrapping div so that the text doesn't opverlapp without the wrapper */}
        {/* button name */}
        <h4 className="foodBuilder__ingredientButton__buttonContainer__name">{props.buttonName}</h4>
        {/* button description */}
        <h4 className="foodBuilder__ingredientButton__buttonContainer__description">{props.buttonDescription}</h4>
        {/* button price */}
        <h4 className="foodBuilder__ingredientButton__buttonContainer__price">{props.buttonPrice}<span style={{fontSize:"0.5em"}}>din</span></h4>
      </div>
    </div>
  )
}

export default Buttons;
