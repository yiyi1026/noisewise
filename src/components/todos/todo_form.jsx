import {Component} from 'react';

class TodoForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      title: '',
      user_id: 1,
      done: false

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
    this.props.createTodo(this.state);
    this.setState({
      title: "",
      done: false,
    }); // reset form
  }


  render(){

    return(
      <div>
        <form>
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
          <button className="create-button btn btn-primary">Add New Todo!</button>
          </form>
        </div>
    )
  }
}
export default TodoForm;