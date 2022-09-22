import logo from './logo.svg';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpenses from './components/NewExpenses/NewExpenses';
import { useState } from 'react';

const DUMMY_EXPENSE = [
  {
    id: "ep1",
    title: "Car Insurance",
    amount: 102,
    date: new Date(2022, 9, 10)
  },
  {
    id: "ep2",
    title: "House rent",
    amount: 2102,
    date: new Date(2022, 9, 12)
  },
  {
    id: "ep3",
    title: "Entertainment",
    amount: 1202,
    date: new Date(2022, 9, 15)
  },{
    id: "ep4",
    title: "Grocery",
    amount: 1502,
    date: new Date(2022, 9, 20)
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSE);
  const addExpensesHandler = (newExpense) => {
    setExpenses(preExpenses => {
      return [newExpense, ...preExpenses];
    });
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <NewExpenses onAddExpenses={addExpensesHandler}/>
        <Expenses items={expenses}/>
      </header>
    </div>
  );
}

export default App;
