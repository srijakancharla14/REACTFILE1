import React from "react";
import ReactDOM from "react-dom";
const name = "srija";
ReactDOM.render(
  <div>
    <h1>hi {name}</h1>
    <h1>lucky number yeah {Math.floor(Math.random() * 10)}</h1>
  </div>,
  document.getElementById("root")
);
