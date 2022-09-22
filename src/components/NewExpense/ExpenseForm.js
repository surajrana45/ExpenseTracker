import React, { useState } from "react";
import "./NewExpenseForm.css";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const titleChange = (event) => {
    setTitle(event.target.value);
  };

  const amountChange = (event) => {
    setAmount(event.target.value);
  };

  const dateChange = (event) => {
    setDate(event.target.value);
  };

  const submitHandle = (event) => {
    event.preventDefault();

    const expenseData = {
      title: title,
      amount: +amount,
      date: new Date(date),
    };
    props.onSaveExpenseData(expenseData);

    setTitle("");
    setDate("");
    setAmount("");
  };

  const [click, setClick] = useState("1");
  function handleClick() {
    setClick("0");
  }
  props.onCancel(click);
  return (
    <form onSubmit={submitHandle}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={title} onChange={titleChange} />
        </div>
        <div className="new-expense__control">
          <label>amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={amountChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={date}
            onChange={dateChange}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={handleClick}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
