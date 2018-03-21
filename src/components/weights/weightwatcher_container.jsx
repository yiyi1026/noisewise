// import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import {connect} from 'react-redux';
import WeightWatcher from './weight_watcher.jsx';
import {
  requestAllWeights, 
  createWeight, 
  updateWeight, 
  deleteWeight
} from '../../actions/weight_actions';

// import { RingLoader } from 'react-spinners';

const mapStateToProps = (state, {match}) => {
  return {
    allIds: state.weights.allIds,
    byId: state.weights.byId,
    errors: state.errors
  }
};

const mapDispatchToProps = (dispatch) => ({
  requestAllWeights: () => dispatch(requestAllWeights()),
  createWeight: (weight) => dispatch(createWeight(weight)),
  updateWeight: (weight) => dispatch(updateWeight(weight)),
  deleteWeight: (weight) => dispatch(deleteWeight(weight)),
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(WeightWatcher);
