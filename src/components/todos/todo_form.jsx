import React, {Component} from 'react';
import {pst} from '../../util/pst';
import ErrorList from '../error_list.jsx';

class TodoForm extends Component{
  constructor(props){
    super(props);

    this.state = {
      tag: "grocery",
      title: '',
      user_id: 1,
      done: false,
      date: pst()
    }
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  update(key){
    switch (key){
      case "user_id":
        return e => this.setState({[key]: parseInt(e.target.value)});
      case "done":
        return e => this.setState({[key]: e.target.value});
      default:
        return e => this.setState({[key]: e.target.value});
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const todo = Object.assign({}, this.state);

    this.props.createTodo({todo}).then(() =>
      this.setState({
        title: "",
        done: false,
      }) // reset form
    );
  }


  render(){
    let pst = this.state.date;
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <ErrorList errors={this.props.errors} />
          <label> Date
            <input 
              ref='date'
              defaultValue={pst}
              onChange={this.update('date')} 
              required
            >
            </input>
          </label>
          <label> Title:
            <input 
              ref='title'
              value={this.state.title}
              placeholder='buy milk'
              onChange={this.update('title')} 
              required
            />
          </label>
          <label> Tag:
            <input 
            ref="tag"
            defaultValue={this.state.tag}
            onChange={this.update('tag')}
            required/>
            </label>
          <label> Done 
            <select
                  onChange={this.update('done')}
                  defaultValue={false}
            >
              <option>false</option>
              <option>true</option>
            </select>
          </label>
          <button className="create-button btn btn-primary">Add New Todo!</button>
          </form>
        </div>
    )
  }
}
export default TodoForm;