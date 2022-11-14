import React, {useState} from 'react';

import ExpenseForm from './ExpenseForm';
import NewExpenseView from './NewExpenseView';
import './NewExpense.css';

const NewExpense = (props) => {
    const [currentStatus, setCurrentStatus] =  useState(false);

    const clickHandler = (event) => {
        event.preventDefault();
        console.log('test click')
        currentStatus = true;
    }

    const currentStatusHandler = (activatedStatus) => {
        setCurrentStatus(activatedStatus);
    }
    

    return (
        <div className='new-expense'>
            <NewExpenseView activated={currentStatus} onActivated={currentStatusHandler}/>
            {/* <button onClick={clickHandler}>Add New Expense</button> */}
        </div>
    // <div className='new-expense'>
    //     <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
    // </div>
    );
};

export default NewExpense;