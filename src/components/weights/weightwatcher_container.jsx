import React, {Component} from 'react';
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
  // const topicId = match.params.topicId? match.params.topicId : null;
  // let q = selectWeightsByTopicId(state.weights, topicId);
  // console.log(state);
  return {
    // weights: q,
    allIds: state.allIds,
    byId: state.byId,
  //   currentWeight: state.weights.currentWeight,
  //   topics: state.topics,
  //   currentUser: state.session.currentUser,
  //   currentTopic: state.session.currentTopic,
  //   errors: []
}
  // console.log(state);
  // return state;
};

const mapDispatchToProps = dispatch => ({
  // requestSingleTopic: (topicId) => dispatch(requestSingleTopic(topicId)),
  requestAllWeights: () => dispatch(requestAllWeights()),
  createWeight: (weight) => dispatch(createWeight(weight)),
  // updateWeight: (weight) => dispatch(updateWeight(weight))
});

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(WeightWatcher);
