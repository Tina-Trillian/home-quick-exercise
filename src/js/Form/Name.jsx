import React from 'react';

const Name = ({nextPage, previousPage, handleInputChange, firstName, lastName, lang}) => {
    return (
        <div className="form-container">
            <input
            value={firstName}
            type="text"
            placeholder={lang === "ENG" ? "Type your first Name here" : "Vorname"}
            onChange={(evt) => handleInputChange("firstName", evt.target.value)}/>
            <input
            value={lastName}
            type="text"
            placeholder={lang === "ENG" ? "Type your last Name here" : "Nachname"}
            onChange={(evt) => handleInputChange("lastName", evt.target.value)}/>
            
            <div className="control-container">
            <button className="button" onClick={() => previousPage()}>
            {lang === "ENG" ? "Back" : "Zurück"}</button>
            <button
            className={firstName.length && lastName.length ? "button" : "button inactive"}
            onClick={() => nextPage()}>
            {lang === "ENG" ? "Next" : "Weiter"}</button>
            </div>
        </div>
    );
};

export default Name;