import React, { Component } from 'react';
import WeightForm from './weight_form.jsx';
// import './weight_watcher.css';
import {requestSingleWeight} from '../../actions/weight_actions';

class WeightDetail extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const {deleteWeight, weight, updateWeight} = this.props;
    return(
      <div>
        <button className="btn btn-sm btn-table" onClick={deleteWeight}>Delete</button>
        <button className="btn btn-sm btn-table" onClick={updateWeight}>Update</button>
      </div>
    )
    // }
  }
}

export default WeightDetail;