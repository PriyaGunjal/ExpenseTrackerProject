import React, { useState } from "react";
import './NewExpense.css';
import ExpenseForm from "../ExpenseForm";

const NewExpence=(props)=>{
    const [isEditing,setIsEditing]=useState(false);
    const saveExpenceDataHandler=(enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData,
            id:Math.random().toString()
        }
props.onAddExpence(expenseData);
setIsEditing(false);
    }
    const startEditingHandler=()=>{
        setIsEditing(true);
    }

    const stopEditingHandler=()=>{
        setIsEditing(false);
    }
    return <div className="new-expense">
       { !isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
{isEditing &&<ExpenseForm onSaveExpenceData={saveExpenceDataHandler} onCancel={stopEditingHandler}/>}
    </div>
};
export default NewExpence;