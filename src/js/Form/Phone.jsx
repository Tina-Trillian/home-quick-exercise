import React from 'react';

const Phone = ({nextPage, previousPage, handleInputChange, phone, lang}) => {
    return (
        <div className="form-container">
            <input
            value={phone}
            type="tel"
            placeholder={lang === "ENG" ? "Phone Number" : "Telefon Nummer"}
            onChange={(evt) => handleInputChange("phone", evt.target.value)}/>
            <div className="control-container">
            <button className="button" onClick={() => previousPage()}>
            {lang === "ENG" ? "Back" : "Zurück"}</button>
            <button
            className={phone.length > 10 ? "button" : "button inactive"}
            onClick={() => nextPage()}>
            {lang === "ENG" ? "Next" : "Weiter"}</button>
            </div>
        </div>
    );
};

export default Phone;