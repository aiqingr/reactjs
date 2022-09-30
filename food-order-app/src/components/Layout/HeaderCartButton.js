import React, { useContext, useEffect, useState } from "react";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = props => {
    const [btnHighLighted, setBtnHighLighted] = useState(false);
    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.amount
    }, 0);

    const btnClasses = `${classes.button} ${btnHighLighted ? classes.bump : ""}`;

    const { items } = cartCtx;

    useEffect(()=>{
        if(items.length === 0) {
            return;
        }
        setBtnHighLighted(true);
        const timer = setTimeout(() => {
            setBtnHighLighted(false);
        }, 300);
        return () => {
            clearTimeout(timer)
        }
    },[items])

    return <button className={btnClasses} onClick={props.onPress}>
        <span className={classes.icon}><CartIcon /></span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
}

export default HeaderCartButton;