import React from 'react';

const Name = ({nextPage, previousPage, handleInputChange, firstName, lastName}) => {
    return (
        <div className="form-container">
            <input
            value={firstName}
            type="text"
            placeholder="Type your first Name here"
            onChange={(evt) => handleInputChange("firstName", evt.target.value)}/>
            <input
            value={lastName}
            type="text"
            placeholder="Type your last Name here"
            onChange={(evt) => handleInputChange("lastName", evt.target.value)}/>
            
            <div className="control-container">
            <button className="button" onClick={() => previousPage()}>Back</button>
            <button
            className={firstName.length && lastName.length ? "button" : "button inactive"}
            onClick={() => nextPage()}>Next</button>
            </div>
        </div>
    );
};

export default Name;