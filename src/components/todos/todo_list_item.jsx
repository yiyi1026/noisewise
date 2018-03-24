import React, {Component} from 'react';

class TodoListItem extends Component{
  constructor(props){
    super(props);
  }

  render(){
    console.log(this.props.todo)
    let todo = this.props.todo;
    return (<li>{todo.title}</li>)
  }
}

export default TodoListItem;