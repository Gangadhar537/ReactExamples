import React from "react";
import "./componets/ExpensesItem.css";

const ExpenseItem = (props) => {
  return (
    <div className="expense-item">
      <h4 className="expense-item__description">Expenses Tracker</h4>
      <div>{props.date.toISOString()}</div>
      <div className="expense-item h2">{props.title}</div>
      <div className="expense-item__price">{props.amount}</div>
    </div>
  );
};

export default ExpenseItem;
