import React from "react";
import "./Cards.css"
const Cards = (props) => {
    /* 
        props.children 表示组件的标签体
    */

    return <div className={`card ${props.className}`}>
        {props.children}
    </div>
}

export default Cards;