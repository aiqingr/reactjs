import { useState } from "react"
import Logs from "./Components/Logs/Logs"
import LogsForm from "./Components/LogsForm/LogsForm"
import "./App.css"
import ComfirmModal from "../src/Components/UI/ConfirmModal/ConfirmModal"

const App = () => {
    // 数据

    const [logsData, setLogsData] = useState([
        {
            id: "001",
            date: new Date(2021,8,20),
            desc: "Learn one",
            time: 1
        },
        {
            id: "002",
            date: new Date(2022,1,20),
            desc: "Learn two",
            time: 2
        },
        {
            id: "003",
            date: new Date(2021,10,21),
            desc: "Learn three",
            time: 3
        },
        {
            id: "004",
            date: new Date(2022,9,20),
            desc: "Learn four",
            time: 4
        }
    ])

    /* 
        把LogsForm的数据传给App
    */

    const saveLogHandler = (newLog) => {
        newLog.id = new Date() + ""
        console.log("app------>",newLog);
        setLogsData([...logsData, newLog])
    }

    const deleteLogHandler = (index) => {
        setLogsData(prev => {
            const newLogs = [...prev]
            newLogs.splice(index, 1)
            return newLogs
        })
    }
    return <div className="app">
        <ComfirmModal />
        <LogsForm onSaveLogs={saveLogHandler}></LogsForm>
        <Logs logsData={logsData} onDelLog={deleteLogHandler}></Logs>
    </div>
}

export default App