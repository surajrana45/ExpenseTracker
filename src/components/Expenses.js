import React, { useState } from "react";

//import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "./Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./EepensesChart";

function Expenses(props) {
  const [filterYear, setfilterYear] = useState("2022");
  const saveSelect = (syear) => {
    setfilterYear(syear);
  };
  const filterExpense = props.parray.filter((exp) => {
    var ans = exp.date.getFullYear().toString();
    return ans === filterYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={filterYear} onSave={saveSelect} />
        <ExpensesChart expenses={filterExpense} />
        <ExpenseList item={filterExpense} />
      </Card>
    </div>
  );
}
export default Expenses;
