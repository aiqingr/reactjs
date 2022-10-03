import React, { useState, useCallback, useMemo } from "react";
import Button from "./components/UI/Button/Button";
import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";
import DemoList from "./components/Demo/DemoList";

function App() {
	const [showPara, setShowPara] = useState(false);
    const [showToggle, setShowToggle] = useState(false);
	const [listTitle, setListTitle] = useState("My List");

	console.log("APP RUNNING");

	const showParaHandler = useCallback(() => {
        if(showToggle) {
            setShowPara((preShowPara) => !preShowPara);
        }
	}, [showToggle]);

    const showToggleHandler = () => {
        setShowToggle(true);
    }

	const listTitleHandler = useCallback(() => {
		setListTitle("A new List");
	}, []);

	const listNum = useMemo(() => [3,4,1,2,7,0], []);
	return (
		<div className="app">
			<h1>Hi there!</h1>
			{/* {showPara && <p>A new Para</p>} */}
			{/* hard coded the show value to false. Children are still re-excuted */}
			<DemoOutput show={false} />
			<DemoList title={listTitle} items={listNum}></DemoList>
			<Button onClick={showParaHandler}>Add new Paragraph</Button>
            <Button onClick={showToggleHandler}>Add Toggle</Button>
			<Button onClick={listTitleHandler}>Sorted List</Button>
		</div>
	);
}

export default App;
