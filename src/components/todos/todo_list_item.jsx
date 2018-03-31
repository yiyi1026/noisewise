import React, {Component} from 'react';

class TodoListItem extends Component{
  constructor(props){
    super(props);
    this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
    this.handleDrag = this.handleDrag.bind(this);
  }

  handleRemoveTodo(){
    const {removeTodo, todo} = this.props;
    // console.log(removeTodo);
    removeTodo(todo);
  }

  handleDrag(e){
    e.preventDefault();
    console.log('hi');
  }

  render(){
    console.log(this.props);
    const {todo} = this.props;
    const {title, date} = todo;
    return (<li>{title} {date}
      <button className="btn btn-sm btn-table" onClick={this.handleRemoveTodo}
      >Delete</button>
      {/* <button className="btn btn-sm btn-table" onClick={this.handleDrag}
      >Drag</button> */}
      </li>)
  }
}

export default TodoListItem;