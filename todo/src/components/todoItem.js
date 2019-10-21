import React from 'react';
import { Card } from 'semantic-ui-react';
import styled from 'styled-components';

const CustomCard = styled(Card)`
	&&& {
		font-size: 2em;
	}
`


const TodoItem = (props) => {

	return(
		<h2 onClick={props.handler}>
			<p className={props.className}>
				{props.info.item}
			</p>
		</h2>
		)
}

export default TodoItem;