import React, {Component} from 'react';

class TodoListItem extends Component{
  constructor(props){
    super(props);
    this.handleRemoveTodo = this.handleRemoveTodo.bind(this);
  }

  handleRemoveTodo(){
    const {removeTodo, todo} = this.props;
    removeTodo(todo);
  }

  render(){
    // console.log(this.props);
    const {todo} = this.props;
    return (<li>{todo.title}
      <button className="btn btn-sm btn-table" onClick={this.handleRemoveTodo}>Delete</button></li>)
  }
}

export default TodoListItem;