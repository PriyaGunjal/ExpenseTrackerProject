import ExpenceDate from "../ExpenceDate";
import "./ExpenceItem.css";
import ExpenceDetails from "./ExpenceDetails";
import React, { useState } from "react";
function ExpenceItem(props) {
  return (
    <div className="expense-item">
      <ExpenceDate date={props.date} />
      <ExpenceDetails title={props.title} amount={props.amount} locationOfExpenditure={props.locationOfExpenditure}/>
    </div>
  );
}
export default ExpenceItem;
