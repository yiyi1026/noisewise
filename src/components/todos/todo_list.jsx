import React, {Component} from 'react';
import ReactTable from "react-table";
import TodoListItem from './todo_list_item.jsx';
import TodoForm from './todo_form.jsx';
import './todo_list.css';
import TodoDraggableList from './todo_draggable_list.jsx'

class TodoList extends Component{
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.receiveTodos();
  }

  render(){
    const {createTodo, receiveTodo, deleteTodo, updateTodo, todos, errors} = this.props;
    let undoneItems;
    let doneItems;
    if (todos){

      doneItems = todos.filter(todo => todo.done === true).map((todo,idx)=>{
        return <TodoListItem type="Done" todo={todo} key={idx} deleteTodo={deleteTodo} updateTodo={updateTodo}/>;
      });
      undoneItems = todos.filter(todo => todo.done === false).map((todo,idx)=>{
        return <TodoListItem type="Undone" todo={todo} key={idx} deleteTodo={deleteTodo} updateTodo={updateTodo}/>;
      });
    }

    return (
      <div>
        <TodoForm createTodo={createTodo} receiveTodo={receiveTodo} errors={errors}/>
        <div className='float-left container'>
          <ul className='todo-list'>
            <TodoDraggableList list={undoneItems} type="Done" /> {/*Undone_drag*/}
          </ul>
        </div>
        <div className='float-left container'>
          <ul className='todo-list'>
            <TodoDraggableList list={doneItems} type="Undone" /> {/*Done_drag*/}
          </ul>
        </div>
      </div>
      );
  }
}

export default TodoList;