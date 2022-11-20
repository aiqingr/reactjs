import React, { Component } from "react";
import axios from "axios"

export default class App extends Component {
    getStuData = () => {
        axios.get("http://localhost:3001/students").then(
            response => {console.log("Success", response.data)},
            error => {console.log("Failed", error)}
        )
    }
	render() {
		return <div>
            <button onClick={this.getStuData}>Click me to get </button>
        </div>;
	}
}
