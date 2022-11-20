import React, { Component } from "react";
import "./Footer.css"

export default class Footer extends Component {
	checkAllHanlder = (e) => {
		this.props.checkAllTodo(e.target.checked)
	}

	clearAllDoneHandler = () => {
		this.props.clearAllDoneTodo()
	}
	render() {
		const {todos} = this.props
		const doneCount = todos.reduce((prev, todo)=>{
			return prev + (todo.done ? 1 : 0)
		}, 0)
		const total = todos.length
		return (
			<div className="todo-footer">
				<label>
					<input type="checkbox" onChange={this.checkAllHanlder} checked={doneCount === total && total!==0}/>
				</label>
				<span>
					<span>已完成{doneCount}</span> / 全部{total}
				</span>
				<button onClick={this.clearAllDoneHandler} className="btn btn-danger">清除已完成任务</button>
			</div>
		);
	}
}
