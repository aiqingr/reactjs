import React, { useState, Fragment } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (username, age) => {
    setUsersList((preUsersList) => {
      return [...preUsersList, {username: username, age: age, id: Math.random().toString()}]
    }); 
  } 
  return (
    <Fragment>  
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList}/>
    </Fragment>
  );
}

export default App;
