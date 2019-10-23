import React, { useState, useReducer } from 'react';
import { initialState, reducer } from '../reducers/reducer';
import TodoItem from './todoItem';


const TodoForm = (props) => {
	const [value, setValue] = useState('')
	const [state, dispatch] = useReducer(reducer, initialState)


	const handleSubmit = (e) => {
		const newTodo = {item: value, completed: false, id: new Date()}
		e.preventDefault();
		dispatch({ type: 'ADD', payload: newTodo})
		setValue('')
		props.setter([...props.item, newTodo])
	}
	
	const handleChange = (e) => {
		e.preventDefault();
		setValue(e.target.value)
	}




	return(
		<div className="todo-wrapper">
			<form onSubmit = {handleSubmit}>
				<input 
				type='text'
				name='newItem' 
				value = {value}
				onChange = {handleChange}
				/>
				<button>Add</button>
			</form>

			<div className="todo-list-items" >
				{props.item.map((todo)=>{
					return(
						<TodoItem className={state.completed ? "completed" : ""} key={todo.id} info={todo} />
						)
				})}
			</div>
		</div>
		)
}

export default TodoForm;