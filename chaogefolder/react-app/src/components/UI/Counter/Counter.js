import classes from "./Counter.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons"
import { useContext } from "react"
import CartContext from "../../../store/CartContext"

const Counter = (props) => {

    const ctx = useContext(CartContext)

    const addButtonHandler = e => {
        ctx.addItem(props.meal)
    }

    const subButtonHandler = () => {
        ctx.removeItem(props.meal)
    }
    return (
        <div className={classes.Counter}>
            {
                (props.meal.amount && props.meal.amount !== 0) ? 
                <>
                    <button 
                        className={classes.Sub}
                        onClick={subButtonHandler}>
                        <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
                    </button>
                    <span className={classes.Count}>{props.meal.amount}</span>
                </> : null
            }
            <button 
                onClick={addButtonHandler}
                className={classes.Add}>
                <FontAwesomeIcon icon={faPlus} />
            </button>
        </div>
    )
}

export default Counter