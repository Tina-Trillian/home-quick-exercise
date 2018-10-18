import React from 'react';

const Final = ({tenant, startAgain, submit, handleInputChange}) => {
    return (
        <div className="form-container">
            <p>Name : {tenant.firstName + " " + tenant.lastName}</p>
            <p>Email : {tenant.email}</p>
            <p>Phone : {tenant.phone}</p>
            <p>Salary : {tenant.salary}</p>
            <div className="control-container">
            <button className="button" onClick={() => startAgain()}>Something wrong? Start again!</button>
            <button className="button" onClick={() => submit().then(result => handleInputChange("loading", false))}>Everything alright? Submit your profile!</button>
            </div>
        </div>
    );
};

export default Final;