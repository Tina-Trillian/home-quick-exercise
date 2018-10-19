import React from "react";

const Start = ({nextPage, lang}) => {
  return (
    <div className="form-container border-all">
      {lang === "ENG" ? <p>
        To find a better home for you and your family, we would like to know
        more about you.
      </p> : <p>
        Um ein schöneres Zuhause für dich und deine Familie zu finden, würden wir
        gerne etwas mehr über dich wissen.
      </p>}
      <div className="control-container">
      <button className="button" onClick={() => nextPage()}>Start</button>
      </div>
    </div>
  );
};
export default Start;
