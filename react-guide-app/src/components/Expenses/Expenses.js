import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function ExpenseDisplayed(props) {
    const [filteredYear, setFilteredYear] = useState("2020");
    const saveFilterHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
        
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });


    return (
        <li>
            <Card className='expenses'>
                <ExpenseFilter selected={filteredYear} onSaveFiltered={saveFilterHandler}></ExpenseFilter>
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </li>
        
    );
}

export default ExpenseDisplayed;
