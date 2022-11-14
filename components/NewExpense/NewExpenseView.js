import React, {useState} from "react";
import NewExpense from "./NewExpense";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpenseView = (props) => {
    


    const clickHandler = (event) => {
        event.preventDefault();
        console.log(props.activated)
        props.activated = true;
    }

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        console.log(expenseData)
        props.onAddExpense(expenseData);
    }
  if (props.activated === true) {
    return (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    );
  }

  if (props.activated === false) {
    return (
        <button onClick={clickHandler}>Add New Expense</button>
    )
  }
};

export default NewExpenseView;
