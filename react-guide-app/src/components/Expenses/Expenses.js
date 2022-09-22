import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";

function ExpenseDisplayed(props) {
    const [filteredYear, setFilteredYear] = useState("2020");
    // console.log(props.children);
    const saveFilterHandler = (selectedYear) => {
        // console.log('selectedYear :>> ', selectedYear);
        setFilteredYear(selectedYear);
    }
    return (
        <Card className='expenses'>
            <ExpenseFilter selected={filteredYear} onSaveFiltered={saveFilterHandler}></ExpenseFilter>
            {props.items.map((expenses) => (
                <ExpenseItem 
                    key={expenses.id}
                    title={expenses.title} 
                    amount={expenses.amount}
                    date={expenses.date}
                />
            ))}
        </Card>
    );
}

export default ExpenseDisplayed;
