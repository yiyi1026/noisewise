import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import PropTypes from 'prop-types';
import ItemTypes from './item_types';

const style = {
	height: '12rem',
	width: '12rem',
	marginRight: '1.5rem',
	marginBottom: '1.5rem',
	color: 'white',
	padding: '1rem',
	textAlign: 'center',
	fontSize: '1rem',
	lineHeight: 'normal',
	float: 'left',
}

const boxTarget = {
	drop() {
		return { abc: 'DropTarget' }
	},
}

function collect(connect, monitor) {
  return {
    // Call this function inside render()
    // to let React DnD handle the drag events:
		connectDropTarget: connect.dropTarget(),
		isOver: monitor.isOver(),
    // You can ask the monitor about the current drag state:
		// isDragging: monitor.isDragging()
		canDrop: monitor.canDrop(),
  };
}

class TodoDraggableList extends Component {
	constructor(props){
		super(props);

		this.state = {
			list: this.props.list,
		}
	}

	render() {
		// console.log(this.props)
		const { canDrop, isOver, connectDropTarget } = this.props
		const isActive = canDrop && isOver

		let backgroundColor = '#222'
		if (isActive) {
			backgroundColor = 'darkgreen'
		} else if (canDrop) {
			backgroundColor = 'darkkhaki'
		}

		return connectDropTarget(
			<div 
			style={{style}}
			>
				type is {this.props.type}, 
				{isActive ? 'Release to drop' : 'Drag a box here'}
				{this.props.list}
			</div>,
		)
	}
}

export default DropTarget((props) => {return props.type;}, boxTarget, collect)(TodoDraggableList);