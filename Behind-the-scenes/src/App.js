import React, { useState } from "react";
import Button from "./components/UI/Button/Button";
import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
    const [showPara, setShowPara] = useState(false);


    console.log("APP RUNNING");

    const showParaHandler = () => {
        setShowPara(preShowPara => !preShowPara)
    }
	return (
		<div className="app">
			<h1>Hi there!</h1>
            {/* {showPara && <p>A new Para</p>} */}
            {/* hard coded the show value to false. Children are still re-excuted */}
            <DemoOutput show={false}/>
			<Button onClick={showParaHandler}>Add new Paragraph</Button>
		</div>
	);
}

export default App;
