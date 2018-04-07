import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';
import ItemTypes from './item_types';

// const style = {
// 	border: '1px dashed gray',
// 	backgroundColor: 'white',
// 	padding: '0.5rem 1rem',
// 	marginRight: '1.5rem',
// 	marginBottom: '1.5rem',
// 	cursor: 'move',
// 	float: 'left',
// }

const boxSource = {
	beginDrag(props) {
		return {
			name: props.name,
		}
	},

	endDrag(props, monitor) {
		const item = monitor.getItem()
		const dropResult = monitor.getDropResult()

		if (dropResult) {
			// 
			alert(`You dropped ${item.name} into ${dropResult.name}!`) // eslint-disable-line no-alert
		}
	},
}

function collect(connect, monitor) {
  return {
    // Call this function inside render()
    // to let React DnD handle the drag events:
    connectDragSource: connect.dragSource(),
    // You can ask the monitor about the current drag state:
    isDragging: monitor.isDragging()
  };
}

class DragItem extends Component {

	render() {
		const { isDragging, connectDragSource } = this.props
		const { name } = this.props
		const opacity = isDragging ? 0.4 : 1

		return connectDragSource(<div>{name}</div>)
	}
}

export default DragSource(ItemTypes.BOX, boxSource, collect)(DragItem);