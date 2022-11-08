import { useState } from "react"
import Cards from "../UI/Cards/Cards"
import "./LogsForm.css"
const LogsForm = (props) => {
    const [inputDate, setInputDate] = useState("")
    const [inputDesc, setInputDesc] = useState("")
    const [inputTime, setInputTime] = useState("")
    const descChangeHandler = (event) => {
        setInputDesc(event.target.value)
    }
    const dateChangeHandler = (event) => {
        setInputDate(event.target.value)
    }
    const timeChangeHandler = (event) => {
        setInputTime(event.target.value)
    }

    const formSubmitHandler = (e) => {
        e.preventDefault()
        const newLog = {
            date: new Date(inputDate),
            desc: inputDesc,
            time: +inputTime
        }

        setInputDate("")
        setInputDesc("")
        setInputTime("")
        props.onSaveLogs(newLog)
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