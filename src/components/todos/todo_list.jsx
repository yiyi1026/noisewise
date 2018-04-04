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
    const {createTodo, receiveTodo, deleteTodo, todos, errors} = this.props;

    let items;
    if (todos){
      items = todos.map((todo,idx)=>{
        return <TodoListItem todo={todo} key={idx} deleteTodo={deleteTodo}/>;
      });
    }

    return (<div>
              <TodoForm createTodo={createTodo} receiveTodo={receiveTodo} errors={errors}/>
              <ul>
                {items}
              </ul>
            </div>)
  }
}

export default TodoList;