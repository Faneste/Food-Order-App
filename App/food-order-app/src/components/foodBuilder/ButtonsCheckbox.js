import React from 'react';

// checkbox module food size/type selection
function ButtonsCheckbox(props) {
    return (
      <form className="checkbox" id="checkboxId">
        <h4 className="checkbox__description">Kliknite na dugme ispod da izaberete veličinu</h4>
        <input className="checkbox__input" type="checkbox" checked={props.kecap} onChange={props.checkBoxChange} value="kecap" />80cm
        <input className="checkbox__input" type="checkbox" checked={props.senf} onChange={props.checkBoxChange} value="senf" />60cm
        <input className="checkbox__input" type="checkbox" checked={props.ciliSos} onChange={props.checkBoxChange} value="ciliSos" />40cm
        <input className="checkbox__input" type="checkbox" checked={props.ljuto} onChange={props.checkBoxChange} value="ljuto" />20cm
      </form>
    )
}

export default ButtonsCheckbox;
