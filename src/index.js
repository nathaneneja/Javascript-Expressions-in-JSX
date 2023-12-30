import React from "react";
import ReactDOM from "react-dom";

const fname = "Nathan";
const lname = "Eneja";
const luckyNumber = 7;

ReactDOM.render(
  <div>
    <h1>Hello {`${fname} ${lname}`}!</h1>
    <p>Your lucky number is {luckyNumber}</p>
  </div>,
  document.getElementById("root")
);
