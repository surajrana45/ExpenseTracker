import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
//import ExpenseButton from "./ExpenseButton";

const NewExpense = (props) => {
  const [click, setclick] = useState("0");
  const saveExpenseHandler = (previousExpenseData) => {
    const expenseData = {
      ...previousExpenseData,
      id: Math.trunc(Math.random() * 100),
    };
    props.onAddExpense(expenseData);
    setclick("0");
  };

  function clickHandler() {
    setclick("1");
  }

  function handleCancel(e) {
    setclick(e);
  }
  return (
    <div className="new-expense">
      {click === "0" ? (
        <button onClick={clickHandler}>Add New Expense</button>
      ) : (
        <ExpenseForm
          onSaveExpenseData={saveExpenseHandler}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
};

export default NewExpense;
