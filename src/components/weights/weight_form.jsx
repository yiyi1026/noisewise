import React, { Component } from 'react';
import './weight_form.css';

class WeightForm extends Component {
  constructor(props){
    super(props);
    let utc = new Date().toJSON().slice(0,10);
    this.state = {
      user_id: '1',
      weight_value: "",
      date: utc
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    switch (property){
      case "user_id":
        return e => this.setState({[property]: parseInt(e.target.value)});
      case "weight":
        return e => this.setState({[property]: parseFloat(e.target.value)});
      default:
        return e => this.setState({[property]: e.target.value});
    }
  }

  handleSubmit(e) {
    e.preventDefault();
;
    this.props.createWeight(this.state);
    let utc = new Date().toJSON().slice(0,10);
    this.setState({
      weight_value: "",
      date: utc,
    }); // reset form
  }

  
  render(){
    let utc = new Date().toJSON().slice(0,10);
    return(
      <form className="weight-form" onSubmit={this.handleSubmit}>
        <label> User 
        <select className='add-weight'
              onChange={this.update('user_id')}
              defaultValue='1'
            >
            <option>1
              </option>
              <option>2
              </option>
            </select>
            </label>
        <label> Weight(Lb):
        <input 
        className="input add-weight"
        ref="weight"
        value={this.state.weight_value}
        placeholder="Weight"
        onChange={this.update('weight_value')}
        required/>
        </label>
        <label> Date:
        <input
        className="input add-weight"
        ref="date"
        defaultValue={utc}
        onChange={this.update('date')}
        required/>
        </label>
        <button className="create-button btn btn-primary">Add New Weight!</button>
      </form>
    )
  }
  
}
export default WeightForm;