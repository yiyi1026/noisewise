import React, {Component} from 'react';
import {utc} from '../../util/pst';

class TodoForm extends Component{
  constructor(props){
    super(props);
    // let utc = new Date().toLocaleString("en-US", {timeZone: "America/Santiago"}).split(",")[0];
    this.state = {
      tag: "grocery",
      title: '',
      user_id: 1,
      done: false,
      date: utc()
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.uniqueId = this.uniqueId.bind(this);

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

  uniqueId(){
      return parseInt(new Date().getTime());
  }

  handleSubmit(e) {
    e.preventDefault();
    const todo = Object.assign({}, this.state);

    this.props.createTodo({todo}).then(
      this.setState({
        title: "",
        done: false,
      }) // reset form
    );
  }


  render(){

    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label> Title
            <input 
              ref='title'
              value={this.state.title}
              placeholder='buy milk'
              onChange={this.update('title')} 
              required
            >
            </input>
          </label>
          <label> Done 
        <select
              onChange={this.update('done')}
              defaultValue={false}
            >
            <option>false
              </option>
              <option>true
              </option>
            </select>
            </label>
          <button className="create-button btn btn-primary">Add New Todo!</button>
          </form>
        </div>
    )
  }
}
export default TodoForm;