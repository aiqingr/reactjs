import React, { useState } from 'react';
import './ExpensesForm.css';

const ExpensesForm = (props) => {
    // using multiple state
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    const titleChangedHandler = event => {
        // console.log(event.target.value);
        setEnteredTitle(event.target.value);
    }

    const amountChangedHandler = event => {
        // console.log(event.target.value);
        setEnteredAmount(event.target.value)
    }

    const dateChangedHandler = event => {
        // console.log(event.target.value);
        setEnteredDate(event.target.value);
    }

    const submitHandler = event => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        // console.log('expenseData :>> ', expenseData);
        props.onSaveExpenseDate(expenseData);
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    }


    // use one state to hold multiple value at one time
    // const [useInput, setUserInput] = useState({
    //     enteredTitle: "",
    //     enteredAmount: "",
    //     enteredDate: ""
    // });

    // const titleChangedHandler = event => {
    //     setUserInput({
    //         ...setUserInput,
    //         enteredTitle: event.target.value
    //     });
    // }

    // const amountChangedHandler = event => {
    //     setUserInput({
    //         ...setUserInput,
    //         enteredAmount: event.target.value
    //     });
    // }

    // const dateChangedHandler = event => {
    //     setUserInput({
    //         ...setUserInput,
    //         enteredDate: event.target.value
    //     });
    // }
    return <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>title</label>
                <input type='text' value={enteredTitle} onChange={titleChangedHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>amount</label>
                <input type='number' value={enteredAmount} min="0.1" step="0.01" onChange={amountChangedHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>date</label>
                <input type='date' value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={dateChangedHandler}/>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type="submit">Add new expense</button>
        </div>
    </form>
}

export default ExpensesForm;