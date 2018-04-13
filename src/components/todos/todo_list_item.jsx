import React, {Component} from 'react';
import {merge} from 'lodash';
import ErrorList from '../error_list.jsx';

// drag
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';
import ItemTypes from '../drag_and_drop/item_types';

//css
import './todo_list_item.css';

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
    const {updateTodo} = props;
    const oldTodo = props.todo;
    // console.log(oldTodo);
		if (dropResult) {
      let ori = item.type
      let des 
      if(ori == "Undone"){
        des = "Done";
      } else if (ori == "Done"){
        des = "Undone";
      }
      
      const todo = merge({}, oldTodo, {done: !oldTodo.done});
      updateTodo(todo);

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

    this.state = {
      todo: this.props.todo,
      showEdit: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleFold = this.toggleFold.bind(this);
  };

  toggleFold(e){
    e.preventDefault();
    const showEdit = this.state.showEdit;
    this.setState({showEdit: !showEdit})
  }

  update(key){
    let originalTodo = this.state.todo;
    // let todo = merge({}, originalTodo);
    switch (key){
      case "user_id":
        return e => this.setState({[key]: parseInt(e.target.value)});
      case "done":
        return e => {
          // todo[key] = e.target.value
          let todo = merge({}, originalTodo, {[key]: e.target.value});
          this.setState({todo})};
      default:
        return e => {
          let todo = merge({}, originalTodo, {[key]: e.target.value});
          this.setState({todo})};
    }
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.updateTodo(this.state.todo);
  }

	render() {
    const { isDragging, connectDragSource, todo, deleteTodo, updateTodo } = this.props;

    const {date, title, tag, done, id} = this.state.todo;
    let {showEdit} = this.state;

    const display = (!!showEdit) ? 'block' : 'none';
    const toggleDisplay =  (!showEdit) ? 'inline-block' : 'none';
    const toggleButtonName = showEdit ? 'Fold' : 'Unfold';

    const {opacity} = isDragging ? 0.4 : 1;

    let item = 
      (<li 
        draggable="true" 
        className='todo-list-item  list-group-item list-group-item-action'
        style={opacity}
        key = {id}
        > 
        <div
          style={{display:toggleDisplay}}
        > {date} {title} {tag} {done? 'Done': 'Undone'}</div>
        <button className="btn btn-sm btn-table btn-primary" onClick={this.toggleFold}
        >{toggleButtonName}</button>
        <button style={{display:toggleDisplay}} className="btn btn-sm btn-table btn-danger" onClick={() => deleteTodo(todo)}
            >Delete</button>
        <div className=''>
          <form id= 'update-todo-form' onSubmit={this.handleSubmit}
          >
            {/* <ErrorList errors={this.props.errors} /> */}
            <label style={{display}}> Date
              <input 
                ref='date'
                defaultValue={this.state.todo.date}
                onChange={this.update('date')} 
                required
              >
              </input>
            </label>
            <label style={{display}}> Title:
              <input 
                ref='title'
                value={this.state.todo.title}
                placeholder='buy milk'
                onChange={this.update('title')} 
                required
              />
            </label>
            <label  style={{display}}> Tag:
              <input 
              ref="tag"
              defaultValue={this.state.todo.tag}
              onChange={this.update('tag')}
              required/>
              </label>
            <label  style={{display}}> Done 
              <select
                    onChange={this.update('done')}
                    defaultValue={this.state.todo.done}
              >
                <option>false</option>
                <option>true</option>
              </select>
            </label>
            <button  style={{display}} className="create-button btn btn-primary">Update</button>
            </form>
          </div>
      </li>)
		return connectDragSource(<div>{item}</div>)
	}

}

export default DragSource((props) => {return props.type} , boxSource, collect)(TodoListItem);