import React, { Component } from "react";
import PropTypes from "prop-types"
import Item from "../Item/Item"
import "./List.css"

export default class List extends Component {

	static propTypes = {
		todos: PropTypes.array.isRequired,
		updateTodo: PropTypes.func.isRequired
	}
	render() {
		const { todos, updateTodo, deleteTodo } = this.props
		return (
			<ul className="todo-main">
				{todos.map((item)=>{
					return <Item 
						key={item.id} 
						todo={item} 
						updateTodo={updateTodo}
						deleteTodo={deleteTodo}/>
				})}
			</ul>
		);
	}
}
