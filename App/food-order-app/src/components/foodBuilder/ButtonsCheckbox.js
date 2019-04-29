import React from 'react';

// checkbox module for addon food ingredients
function ButtonsCheckbox(props) {
    return (
      <form className="checkbox" id="checkboxId">
        <input className="checkbox__input" type="checkbox" checked={props.kecap} onChange={props.checkBoxChange} value="kecap" />Kecap
        <input className="checkbox__input" type="checkbox" checked={props.majonez} onChange={props.checkBoxChange} value="majonez" />Majonez
        <input className="checkbox__input" type="checkbox" checked={props.senf} onChange={props.checkBoxChange} value="senf" />Senf
        <input className="checkbox__input" type="checkbox" checked={props.ciliSos} onChange={props.checkBoxChange} value="ciliSos" />Chili sos
        <input className="checkbox__input" type="checkbox" checked={props.ljuto} onChange={props.checkBoxChange} value="ljuto" />Ljuto
      </form>
    )
}

export default ButtonsCheckbox;
