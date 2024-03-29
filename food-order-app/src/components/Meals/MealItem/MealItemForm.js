import React, { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(true);
	const amountInputRef = useRef();

	const formSubmitHandler = (event) => {
		event.preventDefault();
        // the value is always a string
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNum = +enteredAmount;
        if(enteredAmount.trim().length === 0 || enteredAmountNum < 1 || enteredAmountNum > 5) {
            setAmountIsValid(false);
            return;
        }

        props.onAddToCart(enteredAmountNum);
	};
	return (
		<form className={classes.form} onSubmit={formSubmitHandler}>
			<Input
                ref={amountInputRef}
				label="Amount"
				input={{
					id: "amount_" + props.id,
					type: "number",
					min: "1",
					max: "5",
					step: "1",
					defaultValue: "1",
				}}
			/>
			<button>+ Add</button>
            {!amountIsValid && <p>Please enter a valid amount(1-5)</p>}
		</form>
	);
};

export default MealItemForm;
