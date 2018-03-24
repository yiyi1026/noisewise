import React, {Component} from 'react';
import TodoListItem from './todo_list_item.jsx';
import TodoForm from './todo_form.jsx';

class TodoList extends Component{
  constructor(props){
    super(props)
  }

  // componentDidMount() {
  //   this.props.receiveTodos();
  // }

  render(){
    console.log(this.props);
    const {createTodo, receiveTodo} = this.props;
    const todos = this.props.byId;
    // // const items = [];
    let items;
    if (todos){
      items = Object.values(todos).map((todo,idx)=>{
        return <TodoListItem todo={todo} key={idx}/>;
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