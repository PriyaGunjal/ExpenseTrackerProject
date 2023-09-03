import react, { useState } from "react";
import ExpenceItem from "../ExpenceItem/ExpenceItem";
import Card from "../ExpenceItem/Card";
import "../ExpenceItem/Expenses.css";
import ExpenseFilter from "../NewExpence/ExpenseFilter";
import ExpenseList from "../NewExpence/ExpenseList";
import ExpensesChart from "../ExpensesChart";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
const filteredExpense=props.items.filter(expense=>{
  return expense.date.getFullYear().toString()===filteredYear;
})
  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpense}/>
        <ExpenseList items={filteredExpense}/>
        </Card>
    </div>
  );
}

export default Expenses;