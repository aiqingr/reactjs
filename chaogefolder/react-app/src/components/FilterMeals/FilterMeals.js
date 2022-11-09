import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faSearch} from "@fortawesome/free-solid-svg-icons"
import classes from "./FilterMeals.module.css"
const FilterMeals = props => {

    // const [keywords, setKeywords] = useState()

    const inputChangeHandler = e => {
        const newKeywords = e.target.value;
        props.onFilter(newKeywords)
    } 
    return (
        <div className={classes.FilterMeals}>
            <div className={classes.InputOuter}>
                <input 
                    onChange={inputChangeHandler}
                    className={classes.SearchInput} 
                    type="text" 
                    placeholder={"please enter"}
                ></input>
                <FontAwesomeIcon icon={faSearch} className={classes.SearchIcon}></FontAwesomeIcon>
            </div>
        </div>
    )
}

export default FilterMeals