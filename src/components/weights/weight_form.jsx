import React, { Component } from 'react';
import './weight_form.css';
import ErrorList from '../error_list.jsx';
import {pst} from '../../util/pst';


class WeightForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      user_id: '1',
      weight_value: "",
      date: pst()
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
    const weight = Object.assign({}, this.state);
    this.props.createWeight(weight).then(
      () => (this.setState({
        weight_value: "",
        date: pst()
      }))
    ); // reset form
  }

  render(){
    let pst = this.state.date; 
    return(
      <form className="weight-form" onSubmit={this.handleSubmit}>
        <ErrorList errors={ this.props.errors } />
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
        defaultValue={pst}
        onChange={this.update('date')}
        required/>
        </label>
        <button className="create-button btn btn-primary">Add New Weight!</button>
      </form>
    )
  }
  
}
export default WeightForm;