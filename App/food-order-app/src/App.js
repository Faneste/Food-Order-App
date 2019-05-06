import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import IntroductoryText from './components/introductoryText/IntroductoryText';
import FoodBuilder from './components/foodBuilder/FoodBuilder';
import Gallery from './components/gallery/Gallery';
import BannerAdvert from './components/bannerAdvert/BannerAdvert';
import Review from './components/review/Review';
import Footer from './components/footer/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="app">
          <IntroductoryText />
          <FoodBuilder />
          <Gallery />
          <BannerAdvert />
          <Review />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
