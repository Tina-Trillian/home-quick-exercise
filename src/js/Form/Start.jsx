import React from "react";

const Start = ({nextPage}) => {
  return (
    <div className="form-container">
      <p>
        To find a better home for you and your family, we would like to know
        more about you
      </p>
      <div className="control-container">
      <button className="button" onClick={() => nextPage()}>Start</button>
      </div>
    </div>
  );
};
export default Start;
