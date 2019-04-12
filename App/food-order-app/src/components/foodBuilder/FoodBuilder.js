import React from 'react';
import PizzaIngredientsMenu from './PizzaIngredientsMenu';
import TitleTextFoodbuilder from './TitleTextFoodbuilder';
import PizzaDough from './PizzaDough';
import FoodTypeMenu from './FoodTypeMenu';
import PizzaButtons from './PizzaButtons';
import SendviciButtons from './SendviciButtons';
import PiteButtons from './PiteButtons';
import SalateButtons from './SalateButtons';

class FoodBuilder extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // state for toggling tab menu for types of food
      ingredientButtonToggle: "pizze",
      // food info for building the menu buttons
      ingredientButtonPizza: [
        {name: "pelat", description: "Lorem Ipsum is simply", price: 120, imgSrc: {},  calories: 80}
      ],
      ingredientButtonSendvici: [
        {name: "sendvic1", description: "Lorem Ipsum is simply", price: 150, imgSrc: {},  calories: 180}
      ],
      ingredientButtonPite: [
        {name: "pite1", description: "Lorem Ipsum is simply", price: 110, imgSrc: {},  calories: 140}
      ],
      ingredientButtonSalate: [
        {name: "salate1", description: "Lorem Ipsum is simply", price: 200, imgSrc: {},  calories: 100}
      ],
    };
    this.tabMenu = this.tabMenu.bind(this);
  }

  // toggling tab menu for types of food
  tabMenu(e) {
    const tabId = e.target.id;
    // changes state and shows the food tab based on the button id
    if (tabId === "pizze") {this.setState({ ingredientButtonToggle: "pizze" });}
    if (tabId === "sendvici") {this.setState({ ingredientButtonToggle: "sendvici" });}
    if (tabId === "pite") {this.setState({ ingredientButtonToggle: "pite" });}
    if (tabId === "salate") {this.setState({ ingredientButtonToggle: "salate" });}
  }

  render() {
    return (
      <div className="foodBuilder">

          {/* title and text of the food building module */}
          <TitleTextFoodbuilder />

          {/* image of pizza and other food */}
          <PizzaDough />

          {/* main buttons container */}
          <div className="foodBuilder__buttonsContainer">
            {/* menu of the type of food */}
            <FoodTypeMenu
              tabMenu={this.tabMenu}
            />

            {/* type of pizza ingredients buttons */}
            <PizzaIngredientsMenu />

            {/* type of food toggle tabs */}
            { this.state.ingredientButtonToggle === "pizza" && <PizzaButtons/>
              || this.state.ingredientButtonToggle === "sendvici" && <SendviciButtons />
              || this.state.ingredientButtonToggle === "pite" && <PiteButtons />
              || this.state.ingredientButtonToggle === "salate" && <SalateButtons />
              || <PizzaButtons />
            }


          </div>

        </div>
    )
  }

}

export default FoodBuilder;
