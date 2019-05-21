import React from 'react';
// modules
import TitleTextFoodbuilder from './TitleTextFoodbuilder';
import ShoppingCart from './ShoppingCart';
import ShoppingCartTotal from './ShoppingCartTotal';
import PizzaIngredient from './PizzaIngredient';
import PizzaDough from './PizzaDough';
import Buttons from './Buttons';
import ButtonsCheckbox from './ButtonsCheckbox';

// shoping cart icon
import shopCartSvg from '../../images/icons/shoppingSvg.svg';

// ingredient images that display on pizza
import pelatIng from '../../images/ingredients/pelatIng.png';
import basilIng from '../../images/ingredients/basilIng.png';
import paprikaIng from '../../images/ingredients/paprikaIng.png';

// main module for food builder
// it has state with all the data passed to the buttons, state that stores orders and map function that displays data
class FoodBuilder extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // main food info for building the menu buttons
      statePizza: [
        // ingedient type title
        {ingredientType: "meso", ingredientTypeClassHide: "ingredientTypeClassHide", ingredientTypeClassStyling: "ingredientTypeClassStyling"},

        // ingredients data
        {name: "Pelat", description: "Lorem Ipsum is simply", price: 120, ingredientSrc: pelatIng, boolean: false,
        calorie: 1, totalFat: 2, saturatedFat: 3, polyFat: 4, cholesterol: 5, sodium: 6, carbs: 7, fiber: 8, sugar: 9, protein: 10, calium: 11 },
        {name: "Basil", description: "Lorem Ipsum is simply", price: 120, ingredientSrc: basilIng, boolean: false,
        calorie: 12, totalFat: 13, saturatedFat: 14, polyFat: 15, cholesterol: 16, sodium: 17, carbs: 18, fiber: 19, sugar: 20, protein: 21, calium: 22 },
        {name: "Paprika", description: "Lorem Ipsum is simply", price: 120, ingredientSrc: paprikaIng, boolean: false,
        calorie: 23, totalFat: 24, saturatedFat: 25, polyFat: 26, cholesterol: 27, sodium: 28, carbs: 29, fiber: 30, sugar: 31, protein: 32, calium: 33 },
      ],
      // food size checkboxes
      kecap: false,
      senf: false,
      ciliSos: false,
      ljuto: false,
      // temporary states to store true boolean data for orders building
      addedFoodTemporary: []
    };
    this.ingredientButtonClick = this.ingredientButtonClick.bind(this);
    this.addIngredientFinalOrder = this.addIngredientFinalOrder.bind(this);
    this.shopcartDelete = this.shopcartDelete.bind(this);
    this.checkBoxChange = this.checkBoxChange.bind(this);
  }

  // toggles/selects individual ingredient boolean true or false
  ingredientButtonClick(e) {
    // puts state in const
    const { statePizza } = this.state;
    // map of the ingredient const/array that toggles selected ingredient boolean false to true
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
    // let allNutrition = [];
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

    // pushes all the seperate ingred. array into the main one
    allData.push(name, description, price, imgSrc, extraIngredients,
      calorie, totalFat, saturatedFat, polyFat, cholesterol, sodium, carbs, fiber, sugar, protein, calium );


    // let allData1 = allData.filter(e => e.length);
    // allData1.filter(e => e.length);

    // let filtered = allData.filter(function (el) {
    //   if (el.length !== 0) {
    //     return el;
    //   }
    // });
    // let filtered2 = filtered.filter(function (el) {
    //   if (el.length !== 0) {
    //     return el;
    //   }
    // });
    // console.log(filtered);

    // adding additional state data into old state
    this.setState(prevState => ({
         addedFoodTemporary: [...prevState.addedFoodTemporary, allData],
    }))

    // removes empty elements from array // needs to be fixed
    // let filtered =  allData.filter(e => e.length);
    // console.log(allData);

    // console.log(this.state.addedFoodTemporary[0]);
    // console.log(this.state.nutritionalInfo);
    // console.log(this.state.nutritionalInfo.map((object, i) =>
      // {this.state.nutritionalInfo[i][1].reduce(function (accumulator, currentValue) { return accumulator + currentValue;}, 0)}));
      // console.log((this.state.nutritionalInfo.map((object, i) =>
      //   this.state.nutritionalInfo[i][1].reduce(function (accumulator, currentValue) {
      //   return accumulator + currentValue;}, 0)).reduce(function (accumulator, currentValue) {
      //   return accumulator + currentValue;}, 0)
      // ));



    // resets the all booleans/checkmarks to be false so it would remove all the images and data from view and set the blank empty list
    statePizza.map((object, i) => { return statePizza[i].boolean = false; })
      this.setState( {kecap: false, senf: false, ciliSos: false, ljuto: false});
    }

  shopcartDelete(e) {
    e.currentTarget.parentNode.remove();
  }


  // bzvze
  componentDidMount(){
    // let ingTitle = document.getElementsByClassName("foodBuilder__ingredientButton__buttonContainer__ingredientTitle");

    // for (let i = 0; i < ingTitle.length; i++) {
    //   ingTitle[i].nextElementSibling.style.display = 'none';
    // }

    // Array.from(document.getElementsByClassName("foodBuilder__ingredientButton__buttonContainer__ingredientTitle")).forEach(function(item) {
    //   console.log(item);
    //   item.nextElementSibling.style.display = 'none';
    // });





    // for loop to hide elemnts from the ing title div
    let hideEl = document.querySelectorAll("#ingredientTypeClassHide");
    for (let i=0; i < hideEl.length; i++) {
      document.querySelectorAll("#ingredientTypeClassHide")[i].style.display = "none";
    }
    // document.querySelectorAll("#ingredientTypeClassHide")[0].style.display = "none";
    // document.querySelectorAll("#ingredientTypeClassHide")[1].style.display = "none";






    // document.querySelector(".foodBuilder__ingredientButton__buttonContainer__ingredientTitle");
    // console.log(document.querySelector(".foodBuilder__ingredientButton__buttonContainer__ingredientTitle"));

    // console.log(ingTitle);
  }


  render() {

    return (
      <div className="foodBuilder">
          {/* title and text of the food building module */}
          <TitleTextFoodbuilder />

          {/* image of pizza and other food */}
          {/* ingredients */}
        {this.state.statePizza.map(content => content.boolean === true ? (
          <PizzaIngredient imageIngredient={content.ingredientSrc} />
            ) : (
          null
            )
        )}




          {/* image of pizza dough */}
          <PizzaDough />

          {/* main buttons container */}
          <div className="foodBuilder__buttonsContainer">
            <div className="buttonsContainer__description">
            <h4>Kliknite na dugme ispod da izaberete sastojak</h4>
            </div>
            {/* separate ingredients buttons container so that it scrolls */}
            <div  className="buttonsContainer">
                {/* pizza buttons map builder */}
                {this.state.statePizza.map((object, i) =>
                  <Buttons
                  buttonName={this.state.statePizza[i].name}
                  buttonDescription={this.state.statePizza[i].description}
                  buttonPrice={this.state.statePizza[i].price}
                  ingredientButtonClick={this.ingredientButtonClick}
                  key={[i]}

                  dataname={this.state.statePizza[i].name}
                  datadescription={this.state.statePizza[i].description}
                  dataprice={this.state.statePizza[i].price}
                  dataimagesrc={this.state.statePizza[i].imgSrc}
                  datacalories={this.state.statePizza[i].calories}

                  pizzaButtonCheckbox={this.state.statePizza[i].boolean}

                  ingredientType={this.state.statePizza[i].ingredientType}
                  ingredientTitleHide={this.state.statePizza[i].ingredientTypeClassHide}
                  ingredientTitleStyling={this.state.statePizza[i].ingredientTypeClassStyling}
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
            <button className="addButton" onClick={this.addIngredientFinalOrder}>
              <span className="addButton__textSpan">Dodaj</span>
              <img src={shopCartSvg} alt="shopCartSvg" />
            </button>
          </div>

          <div className="shoppingCart">
            <div className="shoppingCart__itemContainer">
              {/* final order map builder // with price and calorie reducer */}
              {this.state.addedFoodTemporary.map((object, i) =>
                <ShoppingCart
                shopcartIngredients={this.state.addedFoodTemporary[i][0] + this.state.addedFoodTemporary[i][5]}
                shopcartPrice={this.state.addedFoodTemporary[i][2]
                  .reduce(function (accumulator, currentValue) {
                  return accumulator + currentValue;}, 0)}

                shopcartDelete={this.shopcartDelete}
                key={this.state.addedFoodTemporary[i][0]}

                calorieCalorie={this.state.addedFoodTemporary[i][6].reduce(function (accumulator, currentValue) {return accumulator + currentValue;}, 0)}
                calorieFat={this.state.addedFoodTemporary[i][6].reduce(function (accumulator, currentValue) {return accumulator + currentValue;}, 0)}
                calorieSaturated={this.state.addedFoodTemporary[i][7].reduce(function (accumulator, currentValue) {return accumulator + currentValue;}, 0)}
                caloriePoly={this.state.addedFoodTemporary[i][8].reduce(function (accumulator, currentValue) {return accumulator + currentValue;}, 0)}
                calorieCholesterol={this.state.addedFoodTemporary[i][9].reduce(function (accumulator, currentValue) {return accumulator + currentValue;}, 0)}
                calorieSodium={this.state.addedFoodTemporary[i][10].reduce(function (accumulator, currentValue) {return accumulator + currentValue;}, 0)}
                calorieCharb={this.state.addedFoodTemporary[i][11].reduce(function (accumulator, currentValue) {return accumulator + currentValue;}, 0)}
                calorieFiber={this.state.addedFoodTemporary[i][12].reduce(function (accumulator, currentValue) {return accumulator + currentValue;}, 0)}
                calorieSugar={this.state.addedFoodTemporary[i][13].reduce(function (accumulator, currentValue) {return accumulator + currentValue;}, 0)}
                calorieProtein={this.state.addedFoodTemporary[i][14].reduce(function (accumulator, currentValue) {return accumulator + currentValue;}, 0)}
                calorieKalium={this.state.addedFoodTemporary[i][15].reduce(function (accumulator, currentValue) {return accumulator + currentValue;}, 0)}
                />
              )}
            </div>
            {/* shopping cart total price and info */}
            <ShoppingCartTotal />
          </div>

          {/* calorie counter and nutrition info // MORA REDUCE DA SE SREDI */}


        </div>

    )
  }
}

export default FoodBuilder;
