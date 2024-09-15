// ExpenseItem.js
import React from "react";
import "./ExpenseItem.css"; // Import the CSS file
import ExpenseDate from "./3ExpenseDate";

const ExpenseList = (props) => {
  // props.expenses is now being passed in as a prop

  return (
    <ul>
      {(() => {
        const expenseItems = [];
        for (let i = 0; i < props.expenses.length; i++) {
          expenseItems.push(
            <li key={i} className="expense-list-items">
              <ExpenseDate date={props.expenses[i].date} />{" "}
              {props.expenses[i].name} Rs {props.expenses[i].amount}{" "}
              {props.expenses[i].LocationOfExpenditure}
            </li>
          );
        }
        return expenseItems;
      })()}
    </ul>
  );
};

export default ExpenseList;
