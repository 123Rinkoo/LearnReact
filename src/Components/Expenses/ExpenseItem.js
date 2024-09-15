import React from "react";
import "./ExpenseItem.css"; // Import the CSS file
import ExpenseDate from "./ExpenseDate";

const ExpenseList = (props) => {
  // props.expenses is now being passed in as a prop

  const expenseItems = props.expenses.map((expense, index) =>
    React.createElement(
      "li",
      {
        key: index,
        className: "expense-list-items",
      },
      React.createElement(ExpenseDate, { date: expense.date }),
      ` ${expense.name} Rs ${expense.amount} ${expense.LocationOfExpenditure}`
    )
  );

  return React.createElement("ul", null, ...expenseItems);
};

export default ExpenseList;
