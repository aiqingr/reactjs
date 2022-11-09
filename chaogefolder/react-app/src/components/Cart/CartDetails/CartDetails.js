import React from "react";
import Backdrop from "../../UI/Backdrop/Backdrop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import classes from "./CartDetails.module.css";
import CartContext from "../../../store/CartContext";
import { useContext, useState } from "react";
import Meal from "../../Meals/Meal/Meal";
import Confirm from "../../UI/Confirm/Confirm";

const CartDetails = (props) => {
	const ctx = useContext(CartContext);
	const [showConfirm, setShowConfirm] = useState(false);

    const showConfirmHandler = () => {
        setShowConfirm(true)
    }

    const cancelHandler = (e) => {
        e.stopPropagation()
        setShowConfirm(false)
    }

    const okHandler = () => {
        ctx.clearCart()
    }
	return (
		<Backdrop>
            {showConfirm && <Confirm 
				onClick={cancelHandler}
                onCancel={cancelHandler}
                onOk={okHandler}
                confirmText={"Are you sure"}></Confirm>}
			<div
				onClick={(e) => e.stopPropagation()}
				className={classes.CartDetails}
			>
				<header className={classes.Header}>
					<p className={classes.Title}>Cart List</p>
					<div
                        onClick={showConfirmHandler}
                        className={classes.Clear}>
						<FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
						<span>Empty Cart</span>
					</div>
				</header>
				<div className={classes.MealList}>
					{ctx.items.map((item) => (
						<Meal key={item.id} meal={item} />
					))}
				</div>
			</div>
		</Backdrop>
	);
};

export default CartDetails;
