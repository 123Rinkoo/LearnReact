import React from "react";
import "./Card.css";

const Card = (props) => {
  return React.createElement(
    "div",
    { className: "expense-list" },
    props.children
  );
};

export default Card;
