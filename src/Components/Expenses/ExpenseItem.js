import React from "react";
import "./ExpenseItem.css"; // Import the CSS file
import ExpenseDate from "./ExpenseDate";

const ExpenseList = (props) => {
  
  const handleDelete = (index) => {
    props.onDeleteExpense(index);
  };
  const expenses = props.expenses;
  const expenseItems = expenses.map((expense, index) =>
    React.createElement(
      "li",
      {
        key: index,
        className: "expense-list-items",
      },
      React.createElement(ExpenseDate, { date: expense.date }),
      ` ${expense.name} Rs ${expense.amount} ${expense.LocationOfExpenditure}`,
      React.createElement(
        "button",
        { onClick: () => handleDelete(index) }, // Call handleDelete with the current index
        "Delete Expense"
      )
    )
  );

  return React.createElement("ul", null, ...expenseItems);
};

export default ExpenseList;
