import React from "react";
import ParaOutput from "./ParaOutput";

const DemoOutput = (props) => {
    return <ParaOutput>{props.show ? "This is a new Para" : ""}</ParaOutput>
}

export default DemoOutput;