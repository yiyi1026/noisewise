import {Component} from 'react';

class TodoListItem extends Component{
  constructor(props){
    super(props);
  }

  render(){
    let todo = this.props.todo;
    return (<li>{todo.title}</li>)
  }
}

export default TodoListItem;