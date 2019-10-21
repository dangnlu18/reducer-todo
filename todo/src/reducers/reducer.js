import React from 'react';

export const initialState = {
	item: 'do homework',
	completed: false,
	id: new Date()
}



export const reducer = (state, action) => {
	switch(action.type){
		case "COMPLETED":
			return {
				...state,
				completed: !state.completed
			}
		case "ADD":
			return {
				...state,
				
				data:action.payload

			}
		default:
			return state
	}
} 