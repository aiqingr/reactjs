import React, { Component } from "react";
import PropTypes from "prop-types"
import {nanoid} from "nanoid"
import "./Header.css"

export default class header extends Component {
	static propTypes = {
		addTodo: PropTypes.func.isRequired
	}
	keyUpHandler = (e) => {
		const {keyCode, target} = e
		//判断是否是enter按键
		if(keyCode !== 13) return
		if(target.value.trim() === "") {
			alert("can not be empty")
			return
		}
		const todoObj = {
			id: nanoid(),
			name: target.value,
			done: false
		}
		this.props.addTodo(todoObj)
		target.value = ""
	}
	render() {
		return (
			<div class="todo-header">
				<input
					onKeyUp={this.keyUpHandler}
					type="text"
					placeholder="请输入你的任务名称，按回车键确认"
				/>
			</div>
		);
	}
}
