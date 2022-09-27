import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helper/Wrapper";

const AddUser = props => {
    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredAge, setEnteredAge] = useState("");
    const [error, setError] = useState("");

    const addUserHandler = event => {
        event.preventDefault();
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: "Invilid input",
                message: "Please enter a valid username and age(non empty)"
            });
            return;
        } 

        if(+enteredAge < 0) {
            setError({
                title: "Invilid age",
                message: "Please enter a valid age(> 0)"
            });
            return;
        }

        props.onAddUser(enteredUsername, enteredAge);
        setEnteredAge("");
        setEnteredUsername("");
    };

    const usernameChangedHandler = event => {
        setEnteredUsername(event.target.value);
    }

    const ageChangedHandler = event => {
        setEnteredAge(event.target.value);
    }

    const errorHandler = event => {
        setError(null);
    }

    return (
        <Wrapper>
            {error && <ErrorModal 
                        title={error.title} 
                        message={error.message}
                        onConfirm={errorHandler} />
                    }
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input 
                        d="username" 
                        type="text" 
                        value={enteredUsername}
                        onChange={usernameChangedHandler} 
                    />
                    <label htmlFor="age">Age</label>
                    <input 
                        id="age" 
                        type="number" 
                        value={enteredAge}
                        onChange={ageChangedHandler}
                    />
                    <Button type="submit">add user</Button>
                </form>
            </Card>
        </Wrapper>
    )
}

export default AddUser;