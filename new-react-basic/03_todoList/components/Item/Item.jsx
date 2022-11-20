import React, { Component } from "react";
import "./Item.css"

export default class Item extends Component {
	state = {
		mouse: false
	}

	mouseHandler = (flag) => {
		return () => {
			this.setState({
				mouse: flag
			})
		}
	} 

	checkedHandler = (id) => {
		return (e) => {
			console.log(e.target)
			this.props.updateTodo(id, e.target.checked)
		}
	}

	deleteHandler = (id) => {
		this.props.deleteTodo(id)
	}
	render() {
		const {todo} = this.props
		const {id, name, done} = todo
		const {mouse} = this.state
		return (
			<li 
				style={{backgroundColor: mouse ? "#ddd" : "white"}}
				onMouseEnter={this.mouseHandler(true)} 
				onMouseLeave={this.mouseHandler(false)}>
				<label>
					<input 
						type="checkbox" 
						checked={done}
						onChange={this.checkedHandler(id)}
						/>
					<span>{name}</span>
				</label>
				<button onClick={()=>{this.deleteHandler(id)}} className="btn btn-danger" style={{ display: mouse ? "block" : "none" }}>
					删除
				</button>
			</li>
		);
	}
}
