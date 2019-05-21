import React from 'react';

// theme change dropdown module, it changes the root css variables colors
class HeaderTheme extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
  }

  // handles dropdown click and checks if its dark or light and applies the changes
  handleChange(e) {
    // dark theme selected
    if (e.target.value === 'dark') {
      document.documentElement.style.setProperty('--black', '#ffffff');
      document.documentElement.style.setProperty('--gray', '#303030');
      document.documentElement.style.setProperty('--darkGray', '#fff');
      // document.documentElement.style.setProperty('--red', '#fff');
      document.documentElement.style.setProperty('--white', '#212121');
    }
    // light theme selected, applies back the default root colors
    if (e.target.value === 'light') {
      document.documentElement.style.setProperty('--black', '#000000');
      document.documentElement.style.setProperty('--gray', '#e3e3e3');
      document.documentElement.style.setProperty('--darkGray', '#282828');
      // document.documentElement.style.setProperty('--red', '#fff');
      document.documentElement.style.setProperty('--white', '#fff');
    }
  }

  render () {
    return (
      <div className="header__theme"><span className="header__theme__title">izaberite temu</span>
        <form className="header__theme__form" onSubmit={this.handleSubmit}>
            <select className="header__theme__form__select" onChange={this.handleChange}>
              <option disabled hidden>Izaberite temu</option>
              <option value="light">svetla &#x025FC;</option>
              <option value="dark">tamna &#x025FB;</option>
            </select>
        </form>
      </div>
    )
  }
}

export default HeaderTheme;
