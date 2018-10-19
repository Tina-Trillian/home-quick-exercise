import React from 'react';

const Final = ({tenant, startAgain, submit, handleInputChange, previousPage, resetTenant, lang}) => {
    return (
        <div className="form-container">
            <p>Name : {tenant.firstName + " " + tenant.lastName}</p>
            <p>Email : {tenant.email}</p>
            <p>
            {lang === "ENG" ? "Phone : " : "Telefon : "}{tenant.phone}</p>
            <p>
            {lang === "ENG" ? "Salary : " : "Einkommen : "}{tenant.salary}</p>
            <div className="control-container">
            <button className="button" onClick={() => previousPage()}>
            {lang === "ENG" ? "Back" : "Zurück"}</button>
            <button className="button" onClick={() => startAgain()}>Start</button>
            <button
            className="button"
            onClick={() => submit()
            .then(result => {
            resetTenant();
            handleInputChange("loading", false);
            handleInputChange("page", 0)})}>
             {lang === "ENG" ? "Submit" : "Senden"}</button>
            </div>
        </div>
    );
};

export default Final;