import React from 'react';
// modules
import TitleTextFoodbuilder from './TitleTextFoodbuilder';
import ShoppingCart from './ShoppingCart';
import ShoppingCartTotal from './ShoppingCartTotal';
import PizzaDough from './PizzaDough';
import PizzaButtons from './PizzaButtons';
import ButtonsCheckbox from './ButtonsCheckbox';
import CalorieCounter from './CalorieCounter';
// ingredient images
import pelat from '../../images/buttons/pizza/pelat.png';

class FoodBuilder extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // food info for building the menu buttons
      statePizza: [
        {name: "pelat1", description: "Lorem Ipsum is simply", price: 120, imgSrc: pelat, boolean: false,
        calorie: 1, totalFat: 2, saturatedFat: 3, polyFat: 4, cholesterol: 5, sodium: 6, carbs: 7, fiber: 8, sugar: 9, protein: 10, calium: 11 },
        {name: "pelat2", description: "Lorem Ipsum is simply", price: 120, imgSrc: pelat, boolean: false,
        calorie: 1, totalFat: 2, saturatedFat: 3, polyFat: 4, cholesterol: 5, sodium: 6, carbs: 7, fiber: 8, sugar: 9, protein: 10, calium: 11 },
        {name: "pelat3", description: "Lorem Ipsum is simply", price: 120, imgSrc: pelat, boolean: false,
        calorie: 1, totalFat: 2, saturatedFat: 3, polyFat: 4, cholesterol: 5, sodium: 6, carbs: 7, fiber: 8, sugar: 9, protein: 10, calium: 11 }
      ],
      // extra ingredients for checkboxes
      kecap: false,
      senf: false,
      ciliSos: false,
      ljuto: false,
      // temporary states for orders
      addedFoodTemporary: [],
      addedFoodFinal: []
    };
    this.ingredientButtonClick = this.ingredientButtonClick.bind(this);
    this.addIngredientFinalOrder = this.addIngredientFinalOrder.bind(this);
    this.shopcartDelete = this.shopcartDelete.bind(this);
    this.checkBoxChange = this.checkBoxChange.bind(this);
  }

  // toggles/selects individual ingredient boolean true or false
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
  }

  // checkbox ingredient func // it's how checkboxes are handled in react
  checkBoxChange = event => {
    // puts the checkbox value into let so that it references the state with the same name
    let checkboxValue = event.target.value;
    // changes the state coresponding with the value, .ie if value is kecap then state.kecap changes
    this.setState({ [checkboxValue]: event.target.checked})
  }

  addIngredientFinalOrder() {
    // creates seperate array of the ingredient properties and nutrition info
    let name = [], description = [], price = [], imgSrc = [], extraIngredients = [],
    // nutrition info
    calorie = [], totalFat = [], saturatedFat = [], polyFat = [], cholesterol = [], sodium = [], carbs = [], fiber = [], sugar = [], protein = [], calium = [];

    // main array that will hold all the ingred. data
    let allData = [];
    // puts state in const
    const { statePizza } = this.state;

    // pushing selected checkbox ingredients into extraIngredients let
    if (this.state.kecap === true) { extraIngredients.push("/ kecap /") };
    if (this.state.senf === true) { extraIngredients.push("/ senf /") };
    if (this.state.ciliSos === true) { extraIngredients.push("/ cili sos /") };
    if (this.state.ljuto === true) { extraIngredients.push("/ ljuto /") };
    // console.log(extraIngredients);

    // map of the selected ingredient true boolean and pushes it to the above array of the seperate ingredient arrays
    statePizza.map((object, i) => {
      if (statePizza[i].boolean === true ) {
        // ingred. data
        name.push(statePizza[i].name);
        description.push(statePizza[i].description);
        price.push(statePizza[i].price);
        imgSrc.push(statePizza[i].imgSrc);
        // nutrition info
        calorie.push(statePizza[i].calorie);
        totalFat.push(statePizza[i].totalFat);
        saturatedFat.push(statePizza[i].saturatedFat);
        polyFat.push(statePizza[i].polyFat);
        cholesterol.push(statePizza[i].cholesterol);
        sodium.push(statePizza[i].sodium);
        carbs.push(statePizza[i].carbs);
        fiber.push(statePizza[i].fiber);
        sugar.push(statePizza[i].sugar);
        protein.push(statePizza[i].sugar);
        calium.push(statePizza[i].calium);
      }
      return statePizza;
    });
    // removes empty elements from array // needs to be fixed
    // let filtered =  allData.filter(e => e.length);

    // pushes all the seperate ingred. array into the main one
    allData.push(
      // ingredients info
      name, description, price, imgSrc, extraIngredients,
      // nutrition info
      calorie, totalFat, saturatedFat, polyFat, cholesterol, sodium, carbs, fiber, sugar, protein, calium );
    this.setState(prevState => ({
         addedFoodTemporary: [...prevState.addedFoodTemporary, allData],
    }))
    console.log(this.state.addedFoodTemporary);

    // resets the all booleans/checkmarks to be false so it would remove all the images and data from view and set the blank empty list
    statePizza.map((object, i) => { return statePizza[i].boolean = false; })
    this.setState( {kecap: false, senf: false, ciliSos: false, ljuto: false});
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
              shopcartIngredients={this.state.addedFoodTemporary[i][0] + this.state.addedFoodTemporary[i][5]}
              shopcartPrice={this.state.addedFoodTemporary[i][2]
                .reduce(function (accumulator, currentValue) {
                return accumulator + currentValue;}, 0)}

              shopcartDelete={this.shopcartDelete}
              key={this.state.addedFoodTemporary[i][0]}
              />
            )}

            {/* shopping cart total price and info */}
            <ShoppingCartTotal />
          </div>

          {/* calorie counter and nutrition info */}
          {this.state.addedFoodTemporary.map((object, i) =>
            <CalorieCounter
              calorieCalorie={this.state.addedFoodTemporary[i][5]}
              calorieFat={this.state.addedFoodTemporary[i][6]}
              calorieSaturated={this.state.addedFoodTemporary[i][7]}
              caloriePoly={this.state.addedFoodTemporary[i][8]}
              calorieCholesterol={this.state.addedFoodTemporary[i][9]}
              calorieSodium={this.state.addedFoodTemporary[i][10]}
              calorieCharb={this.state.addedFoodTemporary[i][11]}
              calorieFiber={this.state.addedFoodTemporary[i][12]}
              calorieSugar={this.state.addedFoodTemporary[i][13]}
              calorieProtein={this.state.addedFoodTemporary[i][14]}
              calorieKalium={this.state.addedFoodTemporary[i][15]}
            />
          )}
        </div>
    )
  }

}

export default FoodBuilder;
