import "./App.css";
import Expenses from "./ExpenceItem/Expenses";
import NewExpence from "./NewExpence/NewExpence";
import React,{useState} from "react";

const DUMMY_EXPENSES = [
  {id:"1",
    title: "car Insurance",
    amount: 294,
    date: new Date(2021, 2, 28),
    locationOfExpenditure: "company",
  },
  {
    id:"2",
    title: "Toilet Paper",
    amount: 300,
    date: new Date(2021, 5, 21),
    locationOfExpenditure: "shop",
  },
  {
    id:"3",
    title: "Market",
    amount: 500,
    date: new Date(2021, 2, 28),
    locationOfExpenditure: "Market",
  },
  {id:"4",
    title: "Furniture",
    amount: 700,
    date: new Date(2020, 2, 30),
    locationOfExpenditure: "Shop",
  }
];

function App(){
  const [expenses,setExpenses]=useState(DUMMY_EXPENSES);
  const addExpenceHandler=expensedata=>{
    setExpenses((prevExpenses)=>{
      return [expensedata,...prevExpenses];
    });
  }
  
  return (
    <div>
<NewExpence onAddExpence={addExpenceHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}
export default App;