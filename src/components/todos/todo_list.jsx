import React, {Component} from 'react';
import ReactTable from "react-table";
import TodoListItem from './todo_list_item.jsx';
import TodoForm from './todo_form.jsx';

class TodoList extends Component{
  constructor(props){
    super(props)
  }

  componentDidMount() {
    this.props.receiveTodos();
  }

  render(){
    const {createTodo, receiveTodo, removeTodo, todos} = this.props;
    console.log(todos);
    // // const items = [];
    let items;
    if (todos){
      items = todos.map((todo,idx)=>{
        return <TodoListItem todo={todo} key={idx} removeTodo={removeTodo}/>;
      });
    }

    return (<div>
              <TodoForm createTodo={createTodo} receiveTodo={receiveTodo}/>
              <ul>
                {items}
              </ul>
            </div>)
  }
}

export default TodoList;