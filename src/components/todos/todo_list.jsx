import React, {Component} from 'react';
import ReactTable from "react-table";
import TodoListItem from './todo_list_item.jsx';
import TodoForm from './todo_form.jsx';
import './todo_list.css';
import TodoDraggableList from './todo_draggable_list.jsx'

// //drag
// import DropTarget from '../drag_and_drop/drop_target.js';

class TodoList extends Component{
  constructor(props){
    super(props)
  }

  componentDidMount() {
    this.props.receiveTodos();
  }

  render(){
    const {createTodo, receiveTodo, deleteTodo, todos, errors} = this.props;

    // let items;
    let undoneItems;
    let doneItems;
    if (todos){

      doneItems = todos.filter(todo => todo.done === true).map((todo,idx)=>{
        return <TodoListItem type="Done" todo={todo} key={idx} deleteTodo={deleteTodo}/>;
      });
      undoneItems = todos.filter(todo => todo.done === false).map((todo,idx)=>{
        return <TodoListItem type="Undone" todo={todo} key={idx} deleteTodo={deleteTodo}/>;
      });
    }

    return (<div>
              <TodoForm createTodo={createTodo} receiveTodo={receiveTodo} errors={errors}/>
                <div className='float-left container'>
                  <ul className='todo-undone-list'>
                    <li className='todo-item-title'><div className='drag-target'>Undone Todo here</div></li>
                  {/* {items} */}
                    <TodoDraggableList list={undoneItems} type="Done" />
                  </ul>
                </div>
                <div className='float-left container'>
                  <ul className='todo-done-list'>
                  <li className='todo-item-title'><div className='drag-target'> Done Todo here</div></li>
                  <TodoDraggableList list={doneItems} type="Undone" />
                  </ul>
                </div>
                {/* <DropTarget allowedDropEffect="move" /> */}
                <div>
                  </div>
            </div>)
  }
}

export default TodoList;