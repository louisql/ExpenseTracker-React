import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter/ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const selectedFilterDataHandler = (selectedFilter) => {
    setFilteredYear(selectedFilter);
  };

  const filteredExpenses = props.items.filter(item => item.date.getFullYear().toString() === filteredYear);

  

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onSelectedFilter={selectedFilterDataHandler}
        />
        {expensesContent}
      </Card>
    </div>
  );
};

export default Expenses;
