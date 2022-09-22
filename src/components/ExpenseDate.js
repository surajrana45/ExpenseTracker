import "./ExpenseDate.css";

function ExpenseDate(props) {
  const today = new Date(props.date);
  const day = today.getDate();
  const month = today.getMonth() + 1; //January is 0!
  const year = today.getFullYear();
  //const day = props.date.getDate();
  //const month = props.date.getMonth() + 1; // getMonth() returns month from 0 to 11
  // const year = props.date.getFullYear();

  // <div className="expense-date__month">{month}</div>
  //
  return (
    <div className="expense-date">
      <div className="expense__day">{day}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
}
export default ExpenseDate;
