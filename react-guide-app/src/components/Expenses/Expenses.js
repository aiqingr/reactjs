import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";

function ExpenseDisplayed(props) {
    const [filteredYear, setFilteredYear] = useState("2020");
    const saveFilterHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
        
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });


    return (
        <Card className='expenses'>
            <ExpenseFilter selected={filteredYear} onSaveFiltered={saveFilterHandler}></ExpenseFilter>
            <ExpensesList items={filteredExpenses}/>
        </Card>
    );
}

export default ExpenseDisplayed;
