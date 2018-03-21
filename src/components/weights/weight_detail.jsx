import React, { Component } from 'react';
import WeightForm from './weight_form.jsx';
// import './weight_watcher.css';

class WeightDetail extends Component{
  constructor(props){
    super(props);
    this.state = {
      showUpdateForm: false,
      weight: this.props.weight
    }
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleUpdate(e){
    e.preventDefault();
    this.props.updateWeight(this.props.weight);    
  }

  render(){
    const {deleteWeight, weight, updateWeight} = this.props;
    return(
      <div>
        <button className="btn btn-sm btn-table" onClick={deleteWeight}>Delete</button>
        <button className="btn btn-sm btn-table" onClick={this.handleUpdate}>Update</button>
      </div>
    )
    // }
  }
}

export default WeightDetail;