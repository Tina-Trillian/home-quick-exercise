import React from 'react';

const Final = ({tenant, startAgain, submit, handleInputChange, previousPage}) => {
    return (
        <div className="form-container">
            <p>Name : {tenant.firstName + " " + tenant.lastName}</p>
            <p>Email : {tenant.email}</p>
            <p>Phone : {tenant.phone}</p>
            <p>Salary : {tenant.salary}</p>
            <div className="control-container">
            <button className="button" onClick={() => previousPage()}>Back</button>
            <button className="button" onClick={() => startAgain()}>Start again!</button>
            <button className="button" onClick={() => submit().then(result => {handleInputChange("loading", false); handleInputChange("page", 0)})}>Submit your profile!</button>
            </div>
        </div>
    );
};

export default Final;