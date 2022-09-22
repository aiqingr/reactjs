import React from 'react';
import './NewExpenses.css';
import ExpensesForm from './ExpensesForm'

const NewExpenses = (props) => {
    const saveExpenseDateHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        }
        console.log('expenseData :>> ', expenseData);

        props.onAddExpenses(expenseData);
    };


    return <div className='new-expense'>
        <ExpensesForm onSaveExpenseDate={saveExpenseDateHandler}/>
    </div>
}

export default NewExpenses;