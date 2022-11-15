import React, { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faSearch} from "@fortawesome/free-solid-svg-icons"
import classes from "./FilterMeals.module.css"
const FilterMeals = props => {

    const [keywords, setKeywords] = useState("")
    useEffect(()=>{
        const timer = setTimeout(()=>{
            console.log("Effecting is runing");
            props.onFilter(keywords)
        }, 1000)

        return ()=> {
            console.log("Clear is runing");
            clearTimeout(timer)
        }
    }, [keywords])

    /* 
        在Effect回调函数中 可以指定一个函数作为返回值
        这个函数可以称之为清理函数 他会在下次Effect执行前调用
        可以在这个函数中 做一些工作 来哦清除上次effect执行所带来的影响
    */
    const inputChangeHandler = e => {
        setKeywords(e.target.value.trim())
        // props.onFilter(newKeywords)
    } 
    return (
        <div className={classes.FilterMeals}>
            <div className={classes.InputOuter}>
                <input 
                    value={keywords}
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