import React, { useState } from "react";
import ExpenseList from "./ExpenseItem.js"; // Import the CSS file
import Card from "../UI/Card.js"; // Import the CSS file
import "./Expense.css"; // Import the CSS file
import ExpenseForm from "./ExpenseForm.js";

const expenseList = [
  {
    name: "Travel",
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
  const [expenses, setExpenses] = useState(expenseList);

  const addExpense = (expense) => {
    let expensenewObj = { ...expense };
    const newExpenseList = [...expenses, expensenewObj];
    setExpenses(newExpenseList);
  };
  const deleteExpense = (index) => {
    const updatedExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(updatedExpenses);
  };

  return React.createElement(
    Card,
    {},
    React.createElement(
      "h1",
      { className: "expense-list-items" },
      "Expense Items"
    ),
    React.createElement(ExpenseList, {
      expenses: expenses,
      onDeleteExpense: deleteExpense,
    }),
    React.createElement(ExpenseForm, { onSaveExpenseData: addExpense }, null)
  );
};

export default Expense;
