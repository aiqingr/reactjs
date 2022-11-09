import React from "react";
import ReactDOM from "react-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import classes from "./Checkout.module.css"
import { useContext } from "react";
import CartContext from "../../../store/CartContext"
import CheckoutItem from "./CheckoutItem/CheckoutIetm";
import Bar from "./Bar/Bar";


const checkoutRoot = document.getElementById("checkout-root")

const Checkout = props => {
    const ctx = useContext(CartContext)
    return ReactDOM.createPortal(
        <div className={classes.Checkout}>
            <div className={classes.Close}>
                <FontAwesomeIcon 
                    onClick={()=>props.onHide()}
                    icon={faXmark}></FontAwesomeIcon>
            </div>
            <div className={classes.MealsDesc}>
                <header className={classes.Header}>
                    <h2 className={classes.Title}>餐品详情</h2>
                </header>
                <div className={classes.Meals}>
                    {ctx.items.map(item=> <CheckoutItem meal={item} key={item.id}></CheckoutItem>)}
                </div>
                <footer className={classes.Footer}>
                    <p className={classes.TotalPrice}>{ctx.totalPrice}</p>
                </footer>
            </div>

            <div>
                <Bar totalPrice={ctx.totalPrice}></Bar>
            </div>
        </div>,
        checkoutRoot)
}

export default Checkout