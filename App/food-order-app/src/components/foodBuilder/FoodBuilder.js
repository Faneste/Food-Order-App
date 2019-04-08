import React from 'react';
import PizzaIngredientsMenu from './PizzaIngredientsMenu';
import TitleTextFoodbuilder from './TitleTextFoodbuilder';
import PizzaDough from './PizzaDough';
import FoodTypeMenu from './FoodTypeMenu';
import PizzaButtons from './PizzaButtons';
import SendviciButtons from './SendviciButtons';
import PiteButtons from './PiteButtons';
import SalateButtons from './SalateButtons';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function FoodBuilder() {
  return (
    <div className="foodBuilder">

        {/* title and text of the food building module */}
        <TitleTextFoodbuilder />

        {/* image of pizza and other food */}
        <PizzaDough />

        {/* main buttons container */}
        <div className="foodBuilder__buttonsContainer">
          {/* menu of the type of food */}
          <FoodTypeMenu />

          {/* type of pizza ingredients buttons */}
          <PizzaIngredientsMenu />

          <Router>{/* router for the food types */}
            <Switch>
            {/* buttons for ingredients pizza*/}
            <Route path="/pizzaButtons" component={PizzaButtons} />
            {/* buttons for ingredients sendvici*/}
            <Route path="/sendviciButtons" component={SendviciButtons} />
            {/* buttons for ingredients pite*/}
            <Route path="/piteButtons" component={PiteButtons} />
            {/* buttons for ingredients salate*/}
            <Route path="/salateButtons" component={SalateButtons} />
            </Switch>
          </Router>

        </div>

      </div>
  )
}

export default FoodBuilder;
