import React from "react";
import ReactDOM from "react-dom";
const name = "srija";
const currentDate = new Date();
const currentYear = currentDate.getFullYear();

ReactDOM.render(
  <div>
    <h1>hi {name}</h1>
    <p>
      hey hi how's your day going. Today is {currentDate + "" + currentYear}
    </p>
  </div>,
  document.getElementById("root")
);
