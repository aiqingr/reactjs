import { useState } from "react"
import Cards from "../UI/Cards/Cards"
import "./LogsForm.css"
const LogsForm = (props) => {
    /* 
        当表单发生变化的时候获取用户输入的内容
     */

    const [inputDate, setInputDate] = useState("")
    const [inputDesc, setInputDesc] = useState("")
    const [inputTime, setInputTime] = useState("")

    const descChangeHandler = (event) => {
        // 获取当前触发事件的对象
        // 事件对象中保存了当前事件触发的所有信息
        // event.target 执行的是触发事件的对象 DOM对象
        console.log(event.target.value);
        setInputDesc(event.target.value)
    }
    const dateChangeHandler = (event) => {
        console.log("date", event.target.value);
        setInputDate(event.target.value)
    }
    const timeChangeHandler = (event) => {
        console.log(event.target.value);
        setInputTime(event.target.value)
    }

    //当表单提交的时候 汇总表单的数据

    /* 
        在react中一般表单不需要自行提交
        而是通过react提交
    */

    const formSubmitHandler = (e) => {
        e.preventDefault()
        // 获取表单项的数据 date desc time
        const newLog = {
            date: new Date(inputDate),
            desc: inputDesc,
            time: +inputTime
        }

        setInputDate("")
        setInputDesc("")
        setInputTime("")
        console.log(newLog)
    }

    return <Cards className="log-form">
        <form onSubmit={formSubmitHandler}>
            <div className="form-item">
                <label htmlFor="date">Date</label>
                <input id="date" type="date" onChange={dateChangeHandler} value={inputDate}></input>
            </div>
            <div className="form-item">
                <label htmlFor="desc">Content</label>
                <input onChange={descChangeHandler} id="desc" type="text" value={inputDesc}></input>
            </div>
            <div className="form-item">
                <label htmlFor="time">Times</label>
                <input id="time" type="number" onChange={timeChangeHandler} value={inputTime}></input>
            </div>
            <div className="form-btn">
                <button>add</button>
            </div>
        </form>
    </Cards>
}

export default LogsForm