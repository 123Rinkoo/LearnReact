import React from "react";
import ExpenseList from "./2ExpenseItem.js"; // Import the CSS file
import Card from "./0Card.js"; // Import the CSS file

import "./Expense.css"; // Import the CSS file

const expenses = [
  {
    name: "Food",
    amount: 1000,
    LocationOfExpenditure: "Delhi",
    date: new Date(2024, 8, 10),
  },
  {
    name: "Petrol",
    amount: 100,
    LocationOfExpenditure: "Noida",
    date: new Date(2024, 8, 11),
  },
  {
    name: "Movies",
    amount: 200,
    LocationOfExpenditure: "Gurugram",
    date: new Date(2024, 8, 12),
  },
];

const Expense = () => {
  return (
    <Card>
      <h1 className="expense-list-items">Expense Items</h1>
      <ExpenseList expenses={expenses} />
    </Card>
  );
};

export default Expense;
