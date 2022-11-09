import React from "react";
import classes from "./Cart.module.css"
import iconImg from "../../asset/bag.png"
import { useContext, useState } from "react";
import CartContext from "../../store/CartContext";
import CartDetails from "./CartDetails/CartDetails";
import Checkout from "./Checkout/Checkout";

const Cart = () => {

    const ctx = useContext(CartContext)
    const [showDetails, setShowDetails] = useState(false)
    const [showCheckout, setShowCheckout] = useState(false)
    const toggleDetailsHandler = () => {
        if(ctx.totalAmount === 0) {
            return 
        }
        setShowDetails(prev=>!prev)
    }

    const showCheckoutHandler = () => {
        if(ctx.totalAmount === 0) return
        setShowCheckout(true)
    }

    const hideCheckoutHandler = () => {
        setShowCheckout(false)
    }
    return (
        <div className={classes.Cart} onClick={toggleDetailsHandler}>
            {showCheckout && <Checkout onHide={hideCheckoutHandler}></Checkout>}
            {showDetails && <CartDetails></CartDetails>}
            <div className={classes.Icon}>
                <img src={iconImg} alt={"Checked Bag"}/>
                {
                    ctx.totalAmount === 0 ? null : <span className={classes.TotalAmount}>{ctx.totalAmount}</span>
                }
                
            </div>
            {
                ctx.totalAmount === 0 ? <p className={classes.NoMeal}>Nothing selected</p> : <p className={classes.Price}>{ctx.totalPrice}</p>
            }
            <button 
                onClick={showCheckoutHandler}
                className={`${classes.Button} ${ctx.totalAmount===0 ? classes.Disabled: ""}`}>Check</button>
        </div>
    )
}

export default Cart