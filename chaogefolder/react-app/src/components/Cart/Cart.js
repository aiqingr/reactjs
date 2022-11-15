import React from "react";
import classes from "./Cart.module.css"
import iconImg from "../../asset/bag.png"
import { useContext, useState } from "react";
import CartContext from "../../store/CartContext";
import CartDetails from "./CartDetails/CartDetails";
import Checkout from "./Checkout/Checkout";
import { useEffect } from "react";

const Cart = () => {

    const ctx = useContext(CartContext)
    const [showDetails, setShowDetails] = useState(false)
    const [showCheckout, setShowCheckout] = useState(false)
    /* 
        默认情况下 useEffect()中的函数会在组件渲染完后调用
        并且是每次渲染后都会调用
        useEffect可以传递第二个参数
        第二个参数是一个数组 在数组中可以指定effect的依赖项
        指定后 只有当依赖发生变化的时候 effect才可以触发
        通常会将effect中使用的所有变量都设置为依赖项
        如果依赖项设置了一个空数组 则意味着effect只会在初始化时执行一次
    */
    useEffect(()=>{
        console.log("effect is runing");
        if(ctx.totalAmount === 0) {
            setShowDetails(false)
            setShowCheckout(false)
        }
    }, [ctx])
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