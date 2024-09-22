import React, { useState } from "react";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredLocation, setEnteredLocation] = useState("");


  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const LocationChangeHandler = (event) => {
    setEnteredLocation(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      name: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
      LocationOfExpenditure: enteredLocation
    };
   
    props.onSaveExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredLocation("");
  };

  return React.createElement(
    "form",
    { onSubmit: submitHandler },
    React.createElement(
      "div",
      null,
      React.createElement("label", null, "Title"),
      React.createElement("input", {
        type: "text",
        value: enteredTitle,
        onChange: titleChangeHandler,
      })
    ),
    React.createElement(
      "div",
      null,
      React.createElement("label", null, "Amount"),
      React.createElement("input", {
        type: "number",
        value: enteredAmount,
        onChange: amountChangeHandler,
      })
    ),
    React.createElement(
      "div",
      null,
      React.createElement("label", null, "Location"),
      React.createElement("input", {
        type: "text",
        value: enteredLocation,
        onChange: LocationChangeHandler,
      })
    ),
    React.createElement(
      "div",
      null,
      React.createElement("label", null, "Date"),
      React.createElement("input", {
        type: "date",
        value: enteredDate,
        onChange: dateChangeHandler,
      })
    ),
    React.createElement(
      "div",
      null,
      React.createElement("button", { type: "submit" }, "Add Expense")
    )
  );
};

export default ExpenseForm;
