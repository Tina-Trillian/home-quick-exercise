import React from "react";

const Salary = ({ nextPage, previousPage, handleInputChange, salary }) => {
  return (
    <div>
      <div className="form-container">
        <input
          type="radio"
          value="0 - 1.000"
          name="salary"
          checked={salary === "0 - 1.000"}
          onChange={evt => handleInputChange("salary", evt.target.value)}
        />
        <label> 0 - 1.000</label>
        <input
          type="radio"
          value="1.000 - 2.000"
          name="salary"
          checked={salary === "1.000 - 2.000"}
          onChange={evt => handleInputChange("salary", evt.target.value)}
        />
        <label> 1.000 - 2.000</label>
        <input
          type="radio"
          value="2.000 - 3.000"
          name="salary"
          checked={salary === "2.000 - 3.000"}
          onChange={evt => handleInputChange("salary", evt.target.value)}
        />
        <label> 2.000 - 3.000</label>
        <input
          type="radio"
          value="3.000 - 4.000"
          name="salary"
          checked={salary === "3.000 - 4.000"}
          onChange={evt => handleInputChange("salary", evt.target.value)}
        />
        <label> 3.000 - 4.000</label>
        <input
          type="radio"
          value="Mehr als 4.000"
          name="salary"
          checked={salary === "Mehr als 4.000"}
          onChange={evt => handleInputChange("salary", evt.target.value)}
        />
        <label> Mehr als 4.000</label>
        <div className="control-container">
          <button className="button" onClick={() => previousPage()}>
            Back
          </button>
          <button className="button" onClick={() => nextPage()}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Salary;
