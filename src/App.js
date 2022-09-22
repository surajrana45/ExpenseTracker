import React, { useState } from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

//import ExpenseArray from "./components/ExpenseArray";

const dummy = [
  {
    id: 1,
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 2,
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: 3,
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 4,
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpense] = useState(dummy);
  const newAddExpense = (expense) => {
    setExpense((prevexp) => {
      return [expense, ...prevexp];
    });
  };

  // const [year, setYear] = useState("2021");

  // const currentYear = (newYear) => {
  //   setYear(newYear);
  // };

  // /*const filterExp = expenses.filter((obj) => {
  //   //const newDate = new Date(obj.date);
  //   return
  // });*/

  // //console.log(filterExp);
  // console.log(year);
  return (
    <div>
      <NewExpense onAddExpense={newAddExpense} />
      <Expenses parray={expenses} />
    </div>
  );
}

export default App;
