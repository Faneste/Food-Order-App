import React from 'react';

// nutrition table displayed in the final order
function CalorieCounter(props) {
  return (
    <div className="calorieCounter">
      <p className="calorieCounter__title">Ukup.nutr.vred.</p>
      <hr className="calorieCounter__firstHr" />
      <p className="calorieCounter__subTitle">nutritivne vrednosti variraju</p>

      <hr className="calorieCounter__secondHr" />
      <p className="calorieCounter__subTitle">Kalorije
        <span className="calorieCounter__number">{props.calorieCalorie || 0}</span>
      </p>

      <hr className="calorieCounter__thirdHr" />
      <p className="calorieCounter__subTitle">
        <span style={{fontWeight: 700}}>Totalne Masti </span>
        <span style={{color: "#eb0707"}}>(g)</span>
        <span className="calorieCounter__number">{props.calorieFat || 0}</span>
      </p>

      <hr className="calorieCounter__hrThin" />

      <p className="calorieCounter__subTitle">
        <span style={{marginLeft: "20px"}}>Zasićene Masti </span>
        <span style={{color: "#eb0707"}}>(g)</span>
        <span className="calorieCounter__number">{props.calorieSaturated || 0}</span>
      </p>

      <hr className="calorieCounter__hrThin" />

      <p className="calorieCounter__subTitle">
        <span style={{marginLeft: "20px"}}>Polinez. Mast </span>
        <span style={{color: "#eb0707"}}>(g)</span>
        <span className="calorieCounter__number">{props.caloriePoly || 0}</span>
      </p>

      <hr className="calorieCounter__hrThin" />

      <p className="calorieCounter__subTitle">
        <span style={{fontWeight: 700}}>Holesterol </span>
        <span style={{color: "#eb0707"}}>(mg)</span>
        <span className="calorieCounter__number">{props.calorieCholesterol || 0}</span>
      </p>

      <hr className="calorieCounter__hrThin" />

      <p className="calorieCounter__subTitle">
        <span style={{fontWeight: 700}}>Sodijum </span>
        <span style={{color: "#eb0707"}}>(mg)</span>
        <span className="calorieCounter__number">{props.calorieSodium || 0}</span>
      </p>

      <hr className="calorieCounter__hrThin" />

      <p className="calorieCounter__subTitle">
        <span style={{fontWeight: 700}}>Komp. Uglje. Hid. </span>
        <span style={{color: "#eb0707"}}>(g)</span>
        <span className="calorieCounter__number">{props.calorieCharb || 0}</span>
      </p>

      <hr className="calorieCounter__hrThin" />

      <p className="calorieCounter__subTitle">
        <span style={{marginLeft: "20px"}}>Preh. Vlakna </span>
        <span style={{color: "#eb0707"}}>(g)</span>
        <span className="calorieCounter__number">{props.calorieFiber || 0}</span>
      </p>

      <hr className="calorieCounter__hrThin" />

      <p className="calorieCounter__subTitle">
        <span style={{marginLeft: "20px"}}>Sećeri </span>
        <span style={{color: "#eb0707"}}>(g)</span>
        <span className="calorieCounter__number">{props.calorieSugar || 0}</span>
      </p>

      <hr className="calorieCounter__hrThin" />

      <p className="calorieCounter__subTitle">
        <span style={{fontWeight: 700}}>Proteini </span>
        <span style={{color: "#eb0707"}}>(g)</span>
        <span className="calorieCounter__number">{props.calorieProtein || 0}</span>
      </p>

      <hr className="calorieCounter__hrThin" />

      <p className="calorieCounter__subTitle">
        <span style={{fontWeight: 700}}>Kalijum </span>
        <span style={{color: "#eb0707"}}>(mg)</span>
        <span className="calorieCounter__number">{props.calorieKalium || 0}</span>
      </p>
    </div>
  )
}

export default CalorieCounter;
