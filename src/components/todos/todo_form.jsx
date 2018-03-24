import React, {Component} from 'react';

class TodoForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      title: '',
      user_id: 1,
      done: false

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
    const todo = Object.assign({}, this.state, { id: this.uniqueId() });
    this.props.receiveTodo(todo);
    // this.props.createTodo(this.state);
    this.setState({
      title: "",
      done: false,
    }); // reset form
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