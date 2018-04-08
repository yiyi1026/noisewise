import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import PropTypes from 'prop-types';
import ItemTypes from './item_types';

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

class MyDropTarget extends Component {

	// render() {
  //   // Your component receives its own props as usual
  //   const { id } = this.props;

  //   // These two props are injected by React DnD,
  //   // as defined by your `collect` function above:
  //   const { isDragging, connectDropTarget } = this.props;

  //   return connectDropTarget(
  //     <div>
  //       I am a draggable card number {id}
  //       {isDragging && ' (and I am being dragged now)'}
  //     </div>
  //   );
  // }
	render() {
		const { canDrop, isOver, connectDropTarget } = this.props
		const isActive = canDrop && isOver

		let backgroundColor = '#222'
		if (isActive) {
			backgroundColor = 'darkgreen'
		} else if (canDrop) {
			backgroundColor = 'darkkhaki'
		}

		return connectDropTarget(
			<div>
				{isActive ? 'Release to drop' : 'Drag a box here'}
			</div>
		)
	}
}

export default DropTarget(ItemTypes.BOX, boxTarget, collect)(MyDropTarget);