import React, {Component} from 'react';

class TodoListItem extends Component{
  constructor(props){
    super(props);
    // this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
    // this.handleDrag = this.handleDrag.bind(this);
  }

  // handleRemoveTodo(){
  //   const {deleteTodo, todo} = this.props;
  //   deleteTodo(todo);
  // }

  render(){
    // console.log(this.props);
    const {todo, deleteTodo} = this.props;
    const {title, date, tag, done} = todo;

    return (
      <li draggable="true">{date} {title} {tag} {done? 'Undo': 'Done'}
        <button className="btn btn-sm btn-table" onClick={() => deleteTodo(todo)}
        >Delete</button>
      </li>)
  }
}

export default TodoListItem;