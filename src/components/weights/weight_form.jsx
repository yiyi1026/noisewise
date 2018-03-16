import React, { Component } from 'react';

class WeightForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      user_id: '1',
      weight_value: "",
      date: ""
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
    // console.log(this.props.createWeight);
    this.props.createWeight(this.state);
    this.setState({
      user_id: "",
      weight_value: "",
      date: "",
    }); // reset form
  }

  
  render(){
    // return <div>weight Form</div>
    return(
      <form className="weight-form" onSubmit={this.handleSubmit}>
        <label> User
        <select
              value={this.state.user_id}
              onChange={this.update('user_id')}
              placeholder = "select user id"
            >
              {[1,2].map((type, i) => {
                return <option value={type} key={i}>{type}</option>;
              })}
            </select>
            </label>
        <label>Weight(Lb):
        <input 
        className="input"
        ref="weight"
        value={this.state.weight_value}
        placeholder="Weight"
        onChange={this.update('weight_value')}
        required/>
        </label>
        <label>Date:
        <input
        className="input"
        ref="date"
        value={this.state.date}
        placeholder="Date"
        onChange={this.update('date')}
        required/>
        </label>
        <button className="create-button">Add New Weight!</button>
      </form>
    )
  }
  
}
export default WeightForm;