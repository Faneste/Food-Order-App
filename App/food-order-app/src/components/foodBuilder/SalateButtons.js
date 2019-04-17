import React from 'react';
import Buttons from './Buttons';

function SalateButtons(props) {
  return (
    <div className="foodBuilder__ingredientButton salate-toggle">
      {/* buttons for ingredients */}
      {/* passing data as "data-name etc." through div and assigning it in main module in map */}
      <Buttons
        dataname={props.dataname}
        datadescription={props.datadescription}
        dataprice={props.dataprice}
        dataimagesrc={props.dataimagesrc}
        datacalories={props.datacalories}

        buttonImage={props.buttonImage}
        buttonName={props.buttonName}
        buttonDescription={props.buttonDescription}
        buttonPrice={props.buttonPrice}
        imageAlt={props.imageAlt}
        ingredientButtonClick={props.ingredientButtonClick}
      />
    </div>
  )
}

export default SalateButtons;
