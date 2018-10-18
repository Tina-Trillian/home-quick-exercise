import React from 'react';

const Phone = ({nextPage, previousPage, handleInputChange, phone}) => {
    return (
        <div className="form-container">
            <input
            value={phone}
            type="tel"
            placeholder="Phone Number"
            onChange={(evt) => handleInputChange("phone", evt.target.value)}/>
            <div className="control-container">
            <button className="button" onClick={() => previousPage()}>Back</button>
            <button
            className={phone.length > 10 ? "button" : "button inactive"}
            onClick={() => nextPage()}>Next</button>
            </div>
        </div>
    );
};

export default Phone;