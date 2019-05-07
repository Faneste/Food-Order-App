import React from 'react';

// checkbox module for addon food ingredients
function ButtonsCheckbox(props) {
    return (
      <form className="checkbox" id="checkboxId">
        <input className="checkbox__input" type="checkbox" checked={props.kecap} onChange={props.checkBoxChange} value="kecap" />80cm
        <input className="checkbox__input" type="checkbox" checked={props.senf} onChange={props.checkBoxChange} value="senf" />60cm
        <input className="checkbox__input" type="checkbox" checked={props.ciliSos} onChange={props.checkBoxChange} value="ciliSos" />40cm
        <input className="checkbox__input" type="checkbox" checked={props.ljuto} onChange={props.checkBoxChange} value="ljuto" />20cm
      </form>
    )
}

export default ButtonsCheckbox;
