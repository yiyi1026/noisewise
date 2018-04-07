import React, { Component } from 'react';
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
// import Dustbin from './Dustbin';
// import Box from './Box';
import DropTarget from './drop_target.js';

export default class DragDropContainer extends Component {
	render() {
		return (
			<DragDropContextProvider backend={HTML5Backend}>
				<div>
					<div>
						{/* <Dustbin /> */}
					</div>
					<div >
						{/* <Box name="Glass" />
						<Box name="Banana" />
						<Box name="Paper" /> */}
					</div>
				</div>
			</DragDropContextProvider>
		)
	}
}