import React from "react";

const ParaOutput = props =>{
    console.log("PARA RUNNING!")
    console.log("CHILDREN: ", props);
    return <p>{props.children}</p>
}

export default ParaOutput;
