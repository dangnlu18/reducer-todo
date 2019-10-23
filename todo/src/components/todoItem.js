import React, {useReducer} from 'react';
import { reducer } from '../reducers/reducer';
import { Card } from 'semantic-ui-react';
import styled from 'styled-components';


const CustomCard = styled(Card)`
	&&& {
		font-size: 2em;
	}
`


const TodoItem = (props) => {

	const [state,dispatch] = useReducer(reducer, props)

	const handleClick = (e) =>{
		e.preventDefault();
		dispatch({type: 'COMPLETED', payload: state.info.id})
	}

	return(
		<CustomCard onClick={handleClick}>
			<Card.Header className={props.className}>
				{props.info.item}
			</Card.Header>
		</CustomCard>
		)
}

export default TodoItem;