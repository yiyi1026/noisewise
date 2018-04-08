import React, {Component} from 'react';
import {merge} from 'lodash';

// drag
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';
import ItemTypes from '../drag_and_drop/item_types';

//drag
const boxSource = {
	beginDrag(props) {
		return {
      title: props.todo.title,
      type: props.type
		}
	},

	endDrag(props, monitor) {
		const item = monitor.getItem();
    const dropResult = monitor.getDropResult();
    const {todo, updateTodo} = props;
		if (dropResult) {
      let ori = item.type
      let des 
      if(ori == "Undone"){
        des = "Done";
      } else if (ori == "Done"){
        des = "Undone";
      }
      
      const toggleTodo = merge({}, todo, {done: !todo.done});
      updateTodo(toggleTodo);

		}
	},
};

function collect(connect, monitor) {
  return {
    // Call this function inside render()
    // to let React DnD handle the drag events:
    connectDragSource: connect.dragSource(),
    // You can ask the monitor about the current drag state:
    isDragging: monitor.isDragging()
  };
}

class TodoListItem extends Component{
  constructor(props){
    super(props);
  };

	render() {
		const { isDragging, connectDragSource, todo, deleteTodo } = this.props;
		const { title, date, tag, done } = todo;
    const opacity = isDragging ? 0.4 : 1;

    let item = 
      (<li draggable="true" className='todo-list-item' 
      >{date} {title} {tag} {done? 'Done': 'Undone'}
        <button className="btn btn-sm btn-table" onClick={() => deleteTodo(todo)}
        >Delete</button>
      </li>)
		return connectDragSource(<div>{item}</div>)
	}

}

export default DragSource((props) => {return props.type} , boxSource, collect)(TodoListItem);