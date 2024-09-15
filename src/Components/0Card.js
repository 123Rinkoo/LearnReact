// Card.js
import React from 'react';
import "./Card.css"; 

const Card = (props) => {
  return <div className="expense-list">{props.children}</div>;
};

export default Card;
