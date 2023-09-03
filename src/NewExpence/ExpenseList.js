import React from "react";
import "./ExpenseList.css";
import ExpenceItem from "../ExpenceItem/ExpenceItem";

const ExpenseList=(props)=>{
    if(props.items.length===0)
    {
return <h2 className="expenses-list__fallback">Found no expenses.</h2>
    }
    if(props.items.length===1)
    {
        return <h2 className="expenses-list__fallback">Only single Expense here. Please add more...</h2>
    }
return(
    <ul className='expenses-list'>
    {
        props.items.map((expense) => (
            <ExpenceItem
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))

        }
    
    </ul>
)
    }
export default ExpenseList;
 
