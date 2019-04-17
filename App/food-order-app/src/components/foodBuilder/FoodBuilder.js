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
      // food info for building the menu buttons
      statePizza: [
        {name: "pelat1", description: "Lorem Ipsum is simply", price: 120, imgSrc: pelat,  calories: 80, boolean: false},
        {name: "pelat2", description: "Lorem Ipsum is simply", price: 120, imgSrc: pelat,  calories: 80, boolean: false},
        {name: "pelat3", description: "Lorem Ipsum is simply", price: 120, imgSrc: pelat,  calories: 80, boolean: false}
      ],
      stateSendvici: [
        {name: "sendvic1", description: "Lorem Ipsum is simply", price: 150, imgSrc: pelat,  calories: 180, boolean: false},
        {name: "sendvic2", description: "Lorem Ipsum is simply", price: 150, imgSrc: pelat,  calories: 180, boolean: false},
        {name: "sendvic3", description: "Lorem Ipsum is simply", price: 150, imgSrc: pelat,  calories: 180, boolean: false}
      ],
      statePite: [
        {name: "pite1", description: "Lorem Ipsum is simply", price: 110, imgSrc: pelat,  calories: 140, boolean: false},
        {name: "pite2", description: "Lorem Ipsum is simply", price: 110, imgSrc: pelat,  calories: 140, boolean: false},
        {name: "pite3", description: "Lorem Ipsum is simply", price: 110, imgSrc: pelat,  calories: 140, boolean: false}
      ],
      stateSalate: [
        {name: "salate1", description: "Lorem Ipsum is simply", price: 200, imgSrc: pelat,  calories: 100, boolean: false},
        {name: "salate2", description: "Lorem Ipsum is simply", price: 200, imgSrc: pelat,  calories: 100, boolean: false},
        {name: "salate3", description: "Lorem Ipsum is simply", price: 200, imgSrc: pelat,  calories: 100, boolean: false}
      ],
      addedFoodTemporary: [],
      addedFoodFinal: []
    };
    this.tabMenu = this.tabMenu.bind(this);
    this.ingredientButtonClick = this.ingredientButtonClick.bind(this);
  }

  // toggling tab menu for types of food
  tabMenu(e) {
    // getting id of the clicked menu button
    const tabId = e.target.id;
    // menu buttons groups to be shown or hidden
    const pizzeToggle = document.getElementsByClassName("pizza-toggle");
    const sendviciToggle = document.getElementsByClassName("sendvici-toggle");
    const piteToggle = document.getElementsByClassName("pite-toggle");
    const salateToggle = document.getElementsByClassName("salate-toggle");
    // shows the food tab based on the button id and hides others
    if (tabId === "pizze") {
      // loops all the buttons and shows/hides them
      for (let i=0; i<pizzeToggle.length; i++) {
        pizzeToggle[i].style.display = "block";
        sendviciToggle[i].style.display = "none";
        piteToggle[i].style.display = "none";
        salateToggle[i].style.display = "none";
      }
    }
    if (tabId === "sendvici") {
      // loops all the buttons and shows/hides them
      for (let i=0; i<pizzeToggle.length; i++) {
        pizzeToggle[i].style.display = "none";
        sendviciToggle[i].style.display = "block";
        piteToggle[i].style.display = "none";
        salateToggle[i].style.display = "none";
      }
    }
    if (tabId === "pite") {
      // loops all the buttons and shows/hides them
      for (let i=0; i<pizzeToggle.length; i++) {
        pizzeToggle[i].style.display = "none";
        sendviciToggle[i].style.display = "none";
        piteToggle[i].style.display = "block";
        salateToggle[i].style.display = "none";
      }
    }
    if (tabId === "salate") {
      // loops all the buttons and shows/hides them
      for (let i=0; i<pizzeToggle.length; i++) {
        pizzeToggle[i].style.display = "none";
        sendviciToggle[i].style.display = "none";
        piteToggle[i].style.display = "none";
        salateToggle[i].style.display = "block";
      }
    }
  }

  // toggles individual ingredient boolean true or false
  ingredientButtonClick(e) {
    /////////////////////// PIZZA INGREDIENTS FUNC
    // puts state in const
    const { statePizza } = this.state;
    // map of the ingredient array that toggles selected ingredient boolean false to true
    statePizza.map((object, i) => {
      if (statePizza[i].name === e.target.getAttribute('data-name')) {
        statePizza[i].boolean = !statePizza[i].boolean
        this.setState({}); // this updates state
      }
      return statePizza;
    })

    /////////////////////// SENDVICI INGREDIENTS FUNC
    // puts state in const
    const { stateSendvici } = this.state;
    // map of the ingredient array that toggles selected ingredient boolean false to true
    stateSendvici.map((object, i) => {
      if (stateSendvici[i].name === e.target.getAttribute('data-name')) {
        stateSendvici[i].boolean = !stateSendvici[i].boolean
        this.setState({}); // this updates state
      }
      return stateSendvici;
    })

    /////////////////////// PITE INGREDIENTS FUNC
    // puts state in const
    const { statePite } = this.state;
    // map of the ingredient array that toggles selected ingredient boolean false to true
    statePite.map((object, i) => {
      if (statePite[i].name === e.target.getAttribute('data-name')) {
        statePite[i].boolean = !statePite[i].boolean
        this.setState({}); // this updates state
      }
      return statePite;
    })

    /////////////////////// SALATE INGREDIENTS FUNC
    // puts state in const
    const { stateSalate } = this.state;
    // map of the ingredient array that toggles selected ingredient boolean false to true
    stateSalate.map((object, i) => {
      if (stateSalate[i].name === e.target.getAttribute('data-name')) {
        stateSalate[i].boolean = !stateSalate[i].boolean
        this.setState({}); // this updates state
      }
      return stateSalate;
    })
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

            {/* separate ingredients buttons conatiner so that it scrolls */}
            <div  className="buttonsContainer">
            {/* pizza buttons map builder */}
            {this.state.statePizza.map((object, i) =>
              <PizzaButtons
              buttonImage={this.state.statePizza[i].imgSrc}
              buttonName={this.state.statePizza[i].name}
              buttonDescription={this.state.statePizza[i].description}
              buttonPrice={this.state.statePizza[i].price}
              imageAlt={this.state.statePizza[i].name}
              ingredientButtonClick={this.ingredientButtonClick}

              dataname={this.state.statePizza[i].name}
              datadescription={this.state.statePizza[i].description}
              dataprice={this.state.statePizza[i].price}
              dataimagesrc={this.state.statePizza[i].imgSrc}
              datacalories={this.state.statePizza[i].calories}
              />
            )}

            {/* sendvici buttons map builder */}
            {this.state.stateSendvici.map((object, i) =>
              <SendviciButtons
              buttonImage={this.state.stateSendvici[i].imgSrc}
              buttonName={this.state.stateSendvici[i].name}
              buttonDescription={this.state.stateSendvici[i].description}
              buttonPrice={this.state.stateSendvici[i].price}
              imageAlt={this.state.stateSendvici[i].name}
              ingredientButtonClick={this.ingredientButtonClick}

              dataname={this.state.stateSendvici[i].name}
              datadescription={this.state.stateSendvici[i].description}
              dataprice={this.state.stateSendvici[i].price}
              dataimagesrc={this.state.stateSendvici[i].imgSrc}
              datacalories={this.state.stateSendvici[i].calories}
              />
            )}

            {/* pite buttons map builder */}
            {this.state.statePite.map((object, i) =>
              <PiteButtons
              buttonImage={this.state.statePite[i].imgSrc}
              buttonName={this.state.statePite[i].name}
              buttonDescription={this.state.statePite[i].description}
              buttonPrice={this.state.statePite[i].price}
              imageAlt={this.state.statePite[i].name}
              ingredientButtonClick={this.ingredientButtonClick}

              dataname={this.state.statePite[i].name}
              datadescription={this.state.statePite[i].description}
              dataprice={this.state.statePite[i].price}
              dataimagesrc={this.state.statePite[i].imgSrc}
              datacalories={this.state.statePite[i].calories}
              />
            )}

            {/* salate buttons map builder */}
            {this.state.stateSalate.map((object, i) =>
              <SalateButtons
              buttonImage={this.state.stateSalate[i].imgSrc}
              buttonName={this.state.stateSalate[i].name}
              buttonDescription={this.state.stateSalate[i].description}
              buttonPrice={this.state.stateSalate[i].price}
              imageAlt={this.state.stateSalate[i].name}
              ingredientButtonClick={this.ingredientButtonClick}

              dataname={this.state.stateSalate[i].name}
              datadescription={this.state.stateSalate[i].description}
              dataprice={this.state.stateSalate[i].price}
              dataimagesrc={this.state.stateSalate[i].imgSrc}
              datacalories={this.state.stateSalate[i].calories}
              />
            )}
            </div>

            {/* add the ingredient or food button */}
            <button className="addButton">Dodaj</button>

          </div>

        </div>
    )
  }

}

export default FoodBuilder;
