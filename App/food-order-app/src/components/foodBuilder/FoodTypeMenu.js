import React from 'react';

function FoodTypeMenu(props) {
  return (
      <div className="foodBuilder__buttonsContainer__foodtypeMenu">
        {/* menu of the type of food */}
        <button className="foodBuilder__buttonsContainer__foodtypeMenu__button" id="pizze" onClick={props.tabMenu}>PIZZE</button>
        <span className="foodBuilder__buttonsContainer__foodtypeMenu__span" style={{fontWeight: "400"}}></span>
        <button className="foodBuilder__buttonsContainer__foodtypeMenu__button sendvici" id="sendvici" onClick={props.tabMenu}>SENDVIČI</button>
        <span className="foodBuilder__buttonsContainer__foodtypeMenu__span" style={{fontWeight: "400"}}></span>
        <button className="foodBuilder__buttonsContainer__foodtypeMenu__button pite" id="pite" onClick={props.tabMenu}>PITE</button>
        <span className="foodBuilder__buttonsContainer__foodtypeMenu__span" style={{fontWeight: "400"}}></span>
        <button className="foodBuilder__buttonsContainer__foodtypeMenu__button salate" id="salate" onClick={props.tabMenu}>SALATE</button>
      </div>
  )
}

export default FoodTypeMenu;
