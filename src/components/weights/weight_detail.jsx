import React, { Component } from 'react';
// import './weight_watcher.css';

class WeightDetail extends Component{
  constructor(props){
    super(props);
  }

  render(){
    const {deleteWeight, weight} = this.props;
    console.log(deleteWeight);
    // console.log(weight);
    return(
    <div>
      <span className="weight-user">user_id: { weight.user_id} </span>
      <span className="weight-user">weight: { weight.weight_value} </span>
      <span className="weight-user">date: { weight.date}</span>
      <button onClick={deleteWeight}>Delete Weight</button>
    </div>
    )
  }
}

export default WeightDetail;