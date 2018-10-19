import React from 'react';

const Email = ({nextPage, previousPage, handleInputChange, email, lang}) => {
    return (
        <div className="form-container">
            <input
            value={email}
            type="email"
            placeholder="Email"
            onChange={(evt) => handleInputChange("email", evt.target.value)}/>
          <div className="control-container">
            <button className="button" onClick={() => previousPage()}>
            {lang === "ENG" ? "Back" : "Zurück"}</button>
            <button
            className={email.includes("@") && email.includes(".") ? "button" : "button inactive"}
            onClick={() => nextPage()}
            >{lang === "ENG" ? "Next" : "Weiter"}</button>
            </div>
        </div>
    );
};

export default Email;