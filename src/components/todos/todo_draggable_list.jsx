import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import PropTypes from 'prop-types';
import ItemTypes from './item_types';

//css
import './todo_draggable_list.css';

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
		const { canDrop, isOver, connectDropTarget } = this.props;
		const isActive = canDrop && isOver;
		const type = this.props.type;
		const realType = (type==='Undone' ? 'Done' : 'Undone');

		let backgroundColor = '#222'
		if (isActive) {
			backgroundColor = 'darkgreen'
		} else if (canDrop) {
			backgroundColor = 'darkkhaki'
		}

		return connectDropTarget(
			<div 
			className='draggable-target'
			>
				{realType} Todo List, {isActive ? 'Release to drop' : `Drag ${realType} Todo Here`}
				{this.props.list}
			</div>
		)
	}
}

export default DropTarget((props) => {return props.type;}, boxTarget, collect)(TodoDraggableList);