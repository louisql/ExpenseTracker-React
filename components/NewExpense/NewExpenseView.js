import React, {useState} from "react";
// import NewExpense from "./NewExpense";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpenseView = (props) => {
  const [activated, setActivated] = useState(props.currentStatus);



    const clickHandler = (event) => {
        event.preventDefault();
        props.onActivatedStatus(true)
    }

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        console.log(expenseData)
        // props.onAddExpense(expenseData);
        props.onSaveExpenseData(expenseData);
    }

    const statusHandler = (enteredStatus) =>{
      // setActivated(enteredStatus)
      props.onActivatedStatus(enteredStatus)
  }

  if (props.currentStatus === true) {
    return (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onActivatedStatus={statusHandler}/>
    );
  }

  if (props.currentStatus === false) {
    return (
        <button onClick={clickHandler}>Add New Expense</button>
    )
  }
};

export default NewExpenseView;
