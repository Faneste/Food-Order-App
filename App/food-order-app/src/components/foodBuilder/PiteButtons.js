import React from 'react';
import Buttons from './Buttons';

function PiteButtons(props) {
  return (
    <div className="foodBuilder__ingredientButton" id="pite-toggle">
      {/* buttons for ingredients */}
      <Buttons
        buttonImage={props.buttonImage}
        buttonName={props.buttonName}
        buttonDescription={props.buttonDescription}
        buttonPrice={props.buttonPrice}
        imageAlt={props.imageAlt}
      />
    </div>
  )
}

export default PiteButtons;
