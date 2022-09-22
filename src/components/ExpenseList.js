import React from "react";

import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

function ExpenseList(props) {
  if (props.item.length === 0) {
    return <h1 className="expenses-list__fallback">Found No Expense</h1>;
  }

  return (
    <ul className="expenses-list">
      {props.item.map((e) => {
        return (
          <ExpenseItem
            key={e.id}
            title={e.title}
            amount={e.amount}
            date={e.date}
          />
        );
      })}
      ;
    </ul>
  );
}
export default ExpenseList;
