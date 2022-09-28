import React, { useState, Fragment,useRef } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
// import Wrapper from "../Helper/Wrapper";

const AddUser = props => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();
    // const [enteredUsername, setEnteredUsername] = useState("");
    // const [enteredAge, setEnteredAge] = useState("");
    const [error, setError] = useState("");

    const addUserHandler = event => {
        event.preventDefault();
        const nameInput = nameInputRef.current.value;
        const ageInput = ageInputRef.current.value;
        if(nameInput.trim().length === 0 || ageInput.trim().length === 0) {
            setError({
                title: "Invilid input",
                message: "Please enter a valid username and age(non empty)"
            });
            return;
        } 

        if(+ageInput < 0) {
            setError({
                title: "Invilid age",
                message: "Please enter a valid age(> 0)"
            });
            return;
        }

        props.onAddUser(nameInput, ageInput);
        nameInputRef.current.value = "";
        ageInputRef.current.value = "";
        // setEnteredAge("");
        // setEnteredUsername("");
    };

    // const usernameChangedHandler = event => {
    //     setEnteredUsername(event.target.value);
    // }

    // const ageChangedHandler = event => {
    //     setEnteredAge(event.target.value);
    // }

    const errorHandler = event => {
        setError(null);
    }

    return (
        <Fragment>
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
                        // value={enteredUsername}
                        // onChange={usernameChangedHandler} 
                        ref={nameInputRef}
                    />
                    <label htmlFor="age">Age</label>
                    <input 
                        id="age" 
                        type="number" 
                        // value={enteredAge}
                        // onChange={ageChangedHandler}
                        ref={ageInputRef}
                    />
                    <Button type="submit">add user</Button>
                </form>
            </Card>
        </Fragment>
    )
}

export default AddUser;