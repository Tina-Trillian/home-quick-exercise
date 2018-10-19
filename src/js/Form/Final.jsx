import React from 'react';

const Final = ({tenant, startAgain, submit, handleInputChange, previousPage, resetTenant}) => {
    return (
        <div className="form-container">
            <p>Name : {tenant.firstName + " " + tenant.lastName}</p>
            <p>Email : {tenant.email}</p>
            <p>Phone : {tenant.phone}</p>
            <p>Salary : {tenant.salary}</p>
            <div className="control-container">
            <button className="button" onClick={() => previousPage()}>Back</button>
            <button className="button" onClick={() => startAgain()}>Start</button>
            <button
            className="button"
            onClick={() => submit()
            .then(result => {
            resetTenant();
            handleInputChange("loading", false);
            handleInputChange("page", 0)})}>Submit</button>
            </div>
        </div>
    );
};

export default Final;