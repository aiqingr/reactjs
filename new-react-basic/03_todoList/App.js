import React, { Component } from "react";
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import List from "./components/List/List"
import "./App.css"

export default class App extends Component {
	state = {
		todos: [
			{id: "id1", name: "eating", done: true},
			{id: "id2", name: "drinking", done: false},
			{id: "id3", name: "sleeping", done: false},
			{id: "id4", name: "fucking", done: true}
		]
	}

	// addTodo 用于添加一个todo，接收的参数是todo对象
	addTodo = (todoObj) => {
		// 获取原todos
		const {todos} = this.state
		// 追加一个todo
		const newTodos = [...todos,todoObj]
		// 更新状态
		this.setState({todos: newTodos})
	}

	updateTodo = (id, done) => {
		const {todos} = this.state
		const updatedTodos = todos.map((todoObj)=>{
			if(todoObj.id === id) return {...todoObj, done}
			else return todoObj
		})
		this.setState({todos: updatedTodos})
	}

	deleteTodo = (id) => {
		const {todos} = this.state
		const newTodos = todos.filter((todoObj)=>{
			return todoObj.id !== id
		})

		this.setState({todos: newTodos})
	}

	checkAllTodo = (done) => {
		const {todos} = this.state
		const newTodos = todos.map((todoObj)=>{
			return {...todoObj, done}
		})
		this.setState({todos: newTodos})
	}

	clearAllDoneTodo = () => {
		const {todos} = this.state
		const newTodos = todos.filter((todoObj)=>{
			return !todoObj.done
		})

		this.setState({todos: newTodos})
	}
	render() {
		const {todos} = this.state
		return (
			<div className="todo-container">
				<div className="todo-wrap">
					<Header addTodo={this.addTodo}/>
					<List 
						todos={todos} 
						updateTodo={this.updateTodo}
						deleteTodo={this.deleteTodo}/>
					<Footer 
						todos={todos}
						checkAllTodo={this.checkAllTodo}
						clearAllDoneTodo={this.clearAllDoneTodo}/>
				</div>
			</div>
		);
	}
}
