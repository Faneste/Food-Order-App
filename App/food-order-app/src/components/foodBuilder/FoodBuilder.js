import React from 'react';
// modules
import TitleTextFoodbuilder from './TitleTextFoodbuilder';
import ShoppingCart from './ShoppingCart';
import ShoppingCartTotal from './ShoppingCartTotal';
import PizzaDough from './PizzaDough';
import FoodTypeMenu from './FoodTypeMenu';
import PizzaButtons from './PizzaButtons';
import SendviciButtons from './SendviciButtons';
import PiteButtons from './PiteButtons';
import SalateButtons from './SalateButtons';
import ButtonsCheckbox from './ButtonsCheckbox';
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
      // extra ingredients for checkboxes
      kecap: false,
      majonez: false,
      senf: false,
      ciliSos: false,
      ljuto: false,
      // temporary states for orders
      addedFoodTemporary: [],
      addedFoodFinal: []
    };
    this.tabMenu = this.tabMenu.bind(this);
    this.ingredientButtonClick = this.ingredientButtonClick.bind(this);
    this.addIngredientFinalOrder = this.addIngredientFinalOrder.bind(this);
    this.shopcartDelete = this.shopcartDelete.bind(this);
    this.checkBoxChange = this.checkBoxChange.bind(this);
  }

  // toggling tab menu for types of food
  tabMenu(e) {
    // resets the entire state booleans to false so that it starts new when you change tab
    const { statePizza } = this.state; const { stateSendvici } = this.state; const { statePite } = this.state; const { stateSalate } = this.state;
    for (let i=0; i<statePizza.length; i++) {
      statePizza[i].boolean = false;
      stateSendvici[i].boolean = false;
      statePite[i].boolean = false;
      stateSalate[i].boolean = false;
    }

    // getting id of the clicked menu button
    const tabId = e.target.id;
    // menu buttons groups to be shown or hidden
    const pizzeToggle = document.getElementsByClassName("pizza-toggle");
    const sendviciToggle = document.getElementsByClassName("sendvici-toggle");
    const piteToggle = document.getElementsByClassName("pite-toggle");
    const salateToggle = document.getElementsByClassName("salate-toggle");
    // additional ingredients checkbox to be hidden for pizza
    const checkboxToggle =  document.getElementById("checkboxId");
    // shows the food tab based on the button id and hides others
    if (tabId === "pizze") {
      // loops all the buttons and shows/hides them
      for (let i=0; i<pizzeToggle.length; i++) {
        pizzeToggle[i].style.display = "block";
        sendviciToggle[i].style.display = "none";
        piteToggle[i].style.display = "none";
        salateToggle[i].style.display = "none";
      }
      // checkbox ingredients
      checkboxToggle.style.display = "none";
    }
    if (tabId === "sendvici") {
      // loops all the buttons and shows/hides them
      for (let i=0; i<pizzeToggle.length; i++) {
        pizzeToggle[i].style.display = "none";
        sendviciToggle[i].style.display = "block";
        piteToggle[i].style.display = "none";
        salateToggle[i].style.display = "none";
      }
      // checkbox ingredients
      checkboxToggle.style.display = "block";
    }
    if (tabId === "pite") {
      // loops all the buttons and shows/hides them
      for (let i=0; i<pizzeToggle.length; i++) {
        pizzeToggle[i].style.display = "none";
        sendviciToggle[i].style.display = "none";
        piteToggle[i].style.display = "block";
        salateToggle[i].style.display = "none";
      }
      // checkbox ingredients
      checkboxToggle.style.display = "block";
    }
    if (tabId === "salate") {
      // loops all the buttons and shows/hides them
      for (let i=0; i<pizzeToggle.length; i++) {
        pizzeToggle[i].style.display = "none";
        sendviciToggle[i].style.display = "none";
        piteToggle[i].style.display = "none";
        salateToggle[i].style.display = "block";
      }
      // checkbox ingredients
      checkboxToggle.style.display = "block";
    }
  }




  // toggles/selects individual ingredient boolean true or false
  ingredientButtonClick(e) {
    // shows hide checkbox ingredients benath the main ing. buttons
    const checkBoxElement = e.target.parentNode.querySelector(".checkbox");
    if (checkBoxElement) { // if node exist / it doesnt for pizza ing.
      if (checkBoxElement.style.display === "none") {
        checkBoxElement.style.display = "block";
      } else {
        checkBoxElement.style.display = "none";
      }
    }
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
    /////////////////////// SENDVICI INGREDIENTS FUNC                             MORA DA SE KLIKNE NA SLIKU DUGMETA DA BI RADILO-POPRAVI
    // puts state in const
    const { stateSendvici } = this.state;
    // map of the ingredient array that toggles selected ingredient boolean false to true
    stateSendvici.map((object, i) => {
      if (stateSendvici[i].name === e.target.getAttribute('data-name')) {
        stateSendvici[i].boolean = true
        this.setState({}); // this updates state
      }
      if (stateSendvici[i].name !== e.target.getAttribute('data-name')) {
        stateSendvici[i].boolean = false
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

  // checkbox ingredient func
  checkBoxChange = event => {
    // puts the checkbox value into let so that it references the state with the same name
    let checkboxValue = event.target.value;
    // changes the state coresponding with the value, .ie if value is kecap then state.kecap changes
    this.setState({ [checkboxValue]: event.target.checked})
  }

  addIngredientFinalOrder() {
    // creates seperate array of the ingredient properties
    let name = [], description = [], price = [], imgSrc = [], calories = [], extraIngredients = [];
    // main array that will hold all the ingred. data
    let allData = [];
    // puts state in const
    const { statePizza } = this.state;
    const { stateSendvici } = this.state;
    const { statePite } = this.state;
    const { stateSalate } = this.state;

    // pushing selected checkbox ingredients into extraIngredients let
    if (this.state.kecap === true) { extraIngredients.push("kecap /") };
    if (this.state.majonez === true) { extraIngredients.push("majonez /") };
    if (this.state.senf === true) { extraIngredients.push("senf /") };
    if (this.state.ciliSos === true) { extraIngredients.push("cili sos /") };
    if (this.state.ljuto === true) { extraIngredients.push("ljuto /") };
    // console.log(extraIngredients);

    // map of the selected ingredient true boolean and pushes it to the above array
    // of the seperate ingredient arrays
    ////// PIZZA
    statePizza.map((object, i) => {
      if (statePizza[i].boolean === true ) {
        name.push(statePizza[i].name);
        description.push(statePizza[i].description);
        price.push(statePizza[i].price);
        imgSrc.push(statePizza[i].imgSrc);
        calories.push(statePizza[i].calories);
      }
      return statePizza;
    });
    ////// SENDVICI
    stateSendvici.map((object, i) => {
      if (stateSendvici[i].boolean === true ) {
        name.push(stateSendvici[i].name);
        description.push(stateSendvici[i].description);
        price.push(stateSendvici[i].price);
        imgSrc.push(stateSendvici[i].imgSrc);
        calories.push(stateSendvici[i].calories);
      }
      return stateSendvici;
    });
    ////// PITE
    statePite.map((object, i) => {
      if (statePite[i].boolean === true ) {
        name.push(statePite[i].name);
        description.push(statePite[i].description);
        price.push(statePite[i].price);
        imgSrc.push(statePite[i].imgSrc);
        calories.push(statePite[i].calories);
      }
      return statePite;
    });
    ////// SALATE
    stateSalate.map((object, i) => {
      if (stateSalate[i].boolean === true ) {
        name.push(stateSalate[i].name);
        description.push(stateSalate[i].description);
        price.push(stateSalate[i].price);
        imgSrc.push(stateSalate[i].imgSrc);
        calories.push(stateSalate[i].calories);
      }
      return stateSalate;
    });

    // removes empty elements from array // needs to be fixed
    // let filtered =  allData.filter(e => e.length);

    // pushes all the seperate ingred. array into the main one
    allData.push(name, description, price, imgSrc, calories, extraIngredients);
    this.setState(prevState => ({
         addedFoodTemporary: [...prevState.addedFoodTemporary, allData],
    }))

    // resets the all booleans to be false so it would remove all the images and data from view and set the blank empty list
    statePizza.map((object, i) => { return statePizza[i].boolean = false; })
    stateSendvici.map((object, i) => { return stateSendvici[i].boolean = false; })
    statePite.map((object, i) => { return statePite[i].boolean = false; })
    stateSalate.map((object, i) => { return stateSalate[i].boolean = false; })

    // if (this.state.addedFoodTemporary[1] !== undefined ) {
    //   console.log("aasasas");
    // }

    console.log(this.state.addedFoodTemporary);
  }

  shopcartDelete(e) {
    e.currentTarget.parentNode.remove();
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

            {/* separate ingredients buttons container so that it scrolls */}
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
              key={this.state.statePizza[i].name}

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
              key={this.state.stateSendvici[i].name}

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
              key={this.state.statePite[i].name}

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
              key={this.state.stateSalate[i].name}

              dataname={this.state.stateSalate[i].name}
              datadescription={this.state.stateSalate[i].description}
              dataprice={this.state.stateSalate[i].price}
              dataimagesrc={this.state.stateSalate[i].imgSrc}
              datacalories={this.state.stateSalate[i].calories}
              />
            )}
            </div>

            {/* checkboxes for additional ingredients */}
            <ButtonsCheckbox
              checkBoxChange={this.checkBoxChange}

              kecap={this.state.kecap}
              majonez={this.state.majonez}
              senf={this.state.senf}
              ciliSos={this.state.ciliSos}
              ljuto={this.state.ljuto}
            />
            {/* add the ingredient or food button */}
            <button className="addButton" onClick={this.addIngredientFinalOrder}>Dodaj</button>

          </div>

          <div className="shoppingCart">
          {/* final order map builder // with price reducer */}
          {this.state.addedFoodTemporary.map((object, i) =>
            <ShoppingCart
            shopcartIngredients={this.state.addedFoodTemporary[i][0]}
            shopcartPrice={this.state.addedFoodTemporary[i][2]
              .reduce(function (accumulator, currentValue) {
              return accumulator + currentValue;}, 0)}

            shopcartDelete={this.shopcartDelete}
            key={this.state.addedFoodTemporary[i][0]}
            />
          )}

          <ShoppingCartTotal />
          </div>

        </div>
    )
  }

}

export default FoodBuilder;
