import React from "react";
import ParaOutput from "./ParaOutput";

const DemoOutput = (props) => {
    return <ParaOutput>{props.show ? "This is a new Para" : ""}</ParaOutput>
}
// React.memo is only working for functional components, not for class based components
// checked the props value received. 
// if the parent is changed, but the value props is not changed
// child component will be skipped 
export default React.memo(DemoOutput);