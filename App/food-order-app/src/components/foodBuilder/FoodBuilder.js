import React from 'react';
// modules
import TitleTextFoodbuilder from './TitleTextFoodbuilder';
import PizzaDough from './PizzaDough';
import FoodTypeMenu from './FoodTypeMenu';
import PizzaButtons from './PizzaButtons';
import SendviciButtons from './SendviciButtons';
import PiteButtons from './PiteButtons';
import SalateButtons from './SalateButtons';
// ingredient images
import pelat from '../../images/buttons/pizza/pelat.png';

class FoodBuilder extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // state for toggling tab menu for types of food
      ingredientButtonToggle: "pizze",
      // food info for building the menu buttons
      ingredientButtonPizza: [
        {name: "pelat", description: "Lorem Ipsum is simply", price: 120, imgSrc: pelat,  calories: 80},
      ],
      ingredientButtonSendvici: [
        {name: "sendvic1", description: "Lorem Ipsum is simply", price: 150, imgSrc: pelat,  calories: 180}
      ],
      ingredientButtonPite: [
        {name: "pite1", description: "Lorem Ipsum is simply", price: 110, imgSrc: pelat,  calories: 140}
      ],
      ingredientButtonSalate: [
        {name: "salate1", description: "Lorem Ipsum is simply", price: 200, imgSrc: pelat,  calories: 100}
      ],
    };
    this.tabMenu = this.tabMenu.bind(this);
  }

  // toggling tab menu for types of food
  tabMenu(e) {
    // getting id of the clicked menu button
    const tabId = e.target.id;
    // menu buttons groups to be shown or hidden
    const pizzeToggle = document.getElementById("pizza-toggle");
    const sendviciToggle = document.getElementById("sendvici-toggle");
    const piteToggle = document.getElementById("pite-toggle");
    const salateToggle = document.getElementById("salate-toggle");
    // shows the food tab based on the button id and hides others
    if (tabId === "pizze") {
      pizzeToggle.style.display = "block";
      sendviciToggle.style.display = "none";
      piteToggle.style.display = "none";
      salateToggle.style.display = "none";
    }
    if (tabId === "sendvici") {
      pizzeToggle.style.display = "none";
      sendviciToggle.style.display = "block";
      piteToggle.style.display = "none";
      salateToggle.style.display = "none";
    }
    if (tabId === "pite") {
      pizzeToggle.style.display = "none";
      sendviciToggle.style.display = "none";
      piteToggle.style.display = "block";
      salateToggle.style.display = "none";
    }
    if (tabId === "salate") {
      pizzeToggle.style.display = "none";
      sendviciToggle.style.display = "none";
      piteToggle.style.display = "none";
      salateToggle.style.display = "block";
    }
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

            {/* pizza buttons map builder */}
            {this.state.ingredientButtonPizza.map((object, i) =>
              <PizzaButtons
              buttonImage={this.state.ingredientButtonPizza[i].imgSrc}
              buttonName={this.state.ingredientButtonPizza[i].name}
              buttonDescription={this.state.ingredientButtonPizza[i].description}
              buttonPrice={this.state.ingredientButtonPizza[i].price}
              imageAlt={this.state.ingredientButtonPizza[i].name}
              />
            )}

            {/* sendvici buttons map builder */}
            {this.state.ingredientButtonSendvici.map((object, i) =>
              <SendviciButtons
              buttonImage={this.state.ingredientButtonSendvici[i].imgSrc}
              buttonName={this.state.ingredientButtonSendvici[i].name}
              buttonDescription={this.state.ingredientButtonSendvici[i].description}
              buttonPrice={this.state.ingredientButtonSendvici[i].price}
              imageAlt={this.state.ingredientButtonSendvici[i].name}
              />
            )}

            {/* pite buttons map builder */}
            {this.state.ingredientButtonPite.map((object, i) =>
              <PiteButtons
              buttonImage={this.state.ingredientButtonPite[i].imgSrc}
              buttonName={this.state.ingredientButtonPite[i].name}
              buttonDescription={this.state.ingredientButtonPite[i].description}
              buttonPrice={this.state.ingredientButtonPite[i].price}
              imageAlt={this.state.ingredientButtonPite[i].name}
              />
            )}

            {/* salate buttons map builder */}
            {this.state.ingredientButtonSalate.map((object, i) =>
              <SalateButtons
              buttonImage={this.state.ingredientButtonSalate[i].imgSrc}
              buttonName={this.state.ingredientButtonSalate[i].name}
              buttonDescription={this.state.ingredientButtonSalate[i].description}
              buttonPrice={this.state.ingredientButtonSalate[i].price}
              imageAlt={this.state.ingredientButtonSalate[i].name}
              />
            )}

            {/* add the ingredient or food button */}
            <button className="addButton">Dodaj</button>

          </div>

        </div>
    )
  }

}

export default FoodBuilder;
