import React, { useEffect, useState, useReducer, useContext } from 'react';

import Input from "../UI/Input/Input.js"
import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../contexts/auth-context';

const emailReducer = (state , action) => {

    if(action.type === "USER_INPUT") {
        return {value: action.val, isValid: action.val.includes("@")};
    }

    if(action.type === "INPUT_BLUR") {
        return {value: state.val, isValid: state.value.includes("@")};
    }

    return {value: "", isValid: false};
}

const passwordReducer = (state, action) => {
    if(action.type === "USER_INPUT") {
        return {value: action.val, isValid: action.val.trim().length > 6};
    }

    if(action.type === "INPUT_BLUR") {
        return {value: state.val, isValid: state.value.trim().length > 6};
    }

    return {value: "", isValid: false}
}

const Login = (props) => {      
    const authCtx = useContext(AuthContext)
    // const [enteredEmail, setEnteredEmail] = useState('');
    // const [emailIsValid, setEmailIsValid] = useState();
    // const [enteredPassword, setEnteredPassword] = useState('');
    // const [passwordIsValid, setPasswordIsValid] = useState();
    const [formIsValid, setFormIsValid] = useState(false);

    const [emailState, dispatchEmail] = useReducer(emailReducer, {
        value: "", 
        isValid: null
    });

    const [passwordState, dispaatchPassword] = useReducer(passwordReducer, {
        value: "",
        isValid: null
    });

    const { isValid: emailIsValid } = emailState;
    const { isValid: passwordIsValid } = passwordState;
    // useEffect(() => {
    //   console.log("START");

    //   return () => {
    //     console.log("CLEANUP");
    //   }
    // },[])

    useEffect(()=> {
        const identifier = setTimeout(() => {
        console.log("a timer start")
        setFormIsValid(emailIsValid && passwordIsValid)
        },1000)

        return () => {
        console.log("CLEANUP");
        clearTimeout(identifier);   
        } 
    }, [emailIsValid, passwordIsValid])

    const emailChangeHandler = (event) => {
        // setEnteredEmail(event.target.value);
        dispatchEmail({type: "USER_INPUT", val: event.target.value})

        // setFormIsValid(
        //   event.target.value.includes('@') && passwordState.isValid
        // );
    };

    const passwordChangeHandler = (event) => {
        // setEnteredPassword(event.target.value);
        dispaatchPassword({type: "USER_INPUT", val: event.target.value})

        // setFormIsValid(
        //   event.target.value.trim().length > 6 && emailState.isValid
        // );
    };

    const validateEmailHandler = () => {
        dispatchEmail({type: "INPUT_BLUR"})
        // setEmailIsValid(emailState.isValid);
    };

    const validatePasswordHandler = () => {
        dispaatchPassword({type: "INPUT_BLUR"})
        // setPasswordIsValid(passwordState.value.trim().length > 6);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        authCtx.onLogin(emailState.value, passwordState.value);
    };

    return (
        <Card className={classes.login}>
        <form onSubmit={submitHandler}>
            <Input 
                id="email"
                label="E-mail"
                type="email"
                isValid={emailIsValid}
                value={emailState.value}
                onChange={emailChangeHandler}
                onBlur={validateEmailHandler}
            />
            <Input
                id="password"
                label="Password"
                type="password"
                isValid={passwordIsValid}
                value={passwordState.value}
                onChange={passwordChangeHandler}
                onBlur={validatePasswordHandler}
            />
            <div className={classes.actions}>
            <Button type="submit" className={classes.btn} disabled={!formIsValid}>
                Login
            </Button>
            </div>
        </form>
        </Card>
    );
};

export default Login;
