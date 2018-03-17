import React, { Component } from 'react';
// import './weight_watcher.css';

class WeightDetail extends Component{

  render(){
    const {deleteWeight, weight} = this.props;
    return(
    <div>
      <span className="weight-user">user_id: { weight.user_id} </span>
      <span className="weight-user">weight: { weight.weight_value} </span>
      <span className="weight-user">date: { weight.date}</span>
      <button onClick={deleteWeight}>Delete!</button>
    </div>
    )
  }
}

export default WeightDetail;