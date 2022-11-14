import React, {useState} from "react";

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const [activated, setActivated] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        console.log(expenseData)
        props.onAddExpense(expenseData);

    }

    const statusHandler = (enteredStatus) =>{
        setActivated(enteredStatus)
    }
    

    const clickHandler = (event) => {
        event.preventDefault();
        console.log('test click')
        setActivated(true)
    }


    if (activated === true) {
        return (
            <div className='new-expense'>
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onActivatedStatus={statusHandler}/>
            </div>
        );
      }
    
      if (activated === false) {
        return (
            <div className='new-expense'><button onClick={clickHandler}>Add New Expense</button></div>
        )
      }
};

export default NewExpense;