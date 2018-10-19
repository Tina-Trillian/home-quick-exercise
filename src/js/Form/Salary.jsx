import React from "react";

const Salary = ({ nextPage, previousPage, handleInputChange, salary, lang }) => {
  return (
      <div className="form-container">
        <div>
        <input
          type="radio"
          value="0 - 1.000"
          name="salary"
          checked={salary === "0 - 1.000"}
          onChange={evt => handleInputChange("salary", evt.target.value)}
        />
        <label>0 - 1.000</label>
        </div>
        <div>
        <input
          type="radio"
          value="1.000 - 2.000"
          name="salary"
          checked={salary === "1.000 - 2.000"}
          onChange={evt => handleInputChange("salary", evt.target.value)}
        />
        <label> 1.000 - 2.000</label>
        </div>
        <div>
        <input
          type="radio"
          value="2.000 - 3.000"
          name="salary"
          checked={salary === "2.000 - 3.000"}
          onChange={evt => handleInputChange("salary", evt.target.value)}
        />
        <label> 2.000 - 3.000</label>
        </div>
        <div>
        <input
          type="radio"
          value="3.000 - 4.000"
          name="salary"
          checked={salary === "3.000 - 4.000"}
          onChange={evt => handleInputChange("salary", evt.target.value)}
        />
        <label> 3.000 - 4.000</label>
        </div>
        <div>
        <input
          type="radio"
          value="Mehr als 4.000"
          name="salary"
          checked={salary === "Mehr als 4.000"}
          onChange={evt => handleInputChange("salary", evt.target.value)}
        />
        <label>{lang === "ENG" ? "More than 4.000" : " Mehr als 4.000"}</label>
        </div>
        <div className="control-container">
          <button className="button" onClick={() => previousPage()}>
          {lang === "ENG" ? "Back" : "Zurück"}
          </button>
          <button
          className={salary.length ? "button" : "button inactive"}
          onClick={() => nextPage()}>
            {lang === "ENG" ? "Next" : "Weiter"}
          </button>
        </div>
      </div>
  );
};

export default Salary;
