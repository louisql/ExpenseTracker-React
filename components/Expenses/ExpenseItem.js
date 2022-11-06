import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';


const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle('Updated!');
    console.log(title);
  }

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date}/>
      
      <div className='expense-item__description'>
        <h2>{title}</h2> 
        {/* originaly props.title but we wanted to be able to modify it with clickHandler so we stored it in a varaible */}
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;
