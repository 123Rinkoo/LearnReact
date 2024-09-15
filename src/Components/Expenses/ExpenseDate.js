import React from "react";
import './ExpenseDate.css'; // Import the CSS file

const ExpenseDate = (props) => {
  const month = props.date.toLocaleDateString("en-US", { month: "long" });
  const day = props.date.toLocaleDateString("en-US", { day: "numeric" });
  const year = props.date.getFullYear();

  return React.createElement(
    'div',
    { className: 'expense-date' },
    React.createElement('div', { className: 'expense-date__month' }, month),
    React.createElement('div', { className: 'expense-date__day' }, day),
    React.createElement('div', { className: 'expense-date__year' }, year)
  );
};

export default ExpenseDate;
