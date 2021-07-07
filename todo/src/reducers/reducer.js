import React from 'react';

export const initialState = [{
	item: 'do homework',
	completed: false,
	id: new Date()
}]



export const reducer = (state, action) => {
	switch(action.type){
		case "COMPLETED":
			return {
				...state,
				completed: !state.completed,
				id: action.payload
			}
		case "ADD":
			return 
				[...state,
				
					{	
					item: action.payload,
					completed: false,
					id: Date.now()
					}
				]
			
		default:
			return state
	}
} 