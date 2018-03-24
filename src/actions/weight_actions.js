import * as APIUtil from '../util/weight_api_util';
import { receiveErrors, clearErrors } from './error_actions';

//action types
export const RECEIVE_ALL_WEIGHTS = 'RECEIVE_ALL_WEIGHTS';
export const RECEIVE_SINGLE_WEIGHT = 'RECEIVE_SINGLE_WEIGHT';
export const REMOVE_WEIGHT = 'REMOVE_WEIGHT';
export const RECEIVE_SEARCHED_WEIGHTS = 'RECEIVE_SEARCHED_WEIGHTS';

//action creators
export const receiveAllWeights = weights => ({
  type: RECEIVE_ALL_WEIGHTS,
  weights
});

export const receiveSingleWeight = (weight) => ({
  type: RECEIVE_SINGLE_WEIGHT,
  weight
});


export const removeWeight = weight => ({
  type: REMOVE_WEIGHT,
  weight
});

export const receiveSearchedWeights = weights => ({
  type: RECEIVE_SEARCHED_WEIGHTS,
  weights
});


export const requestAllWeights = () => dispatch => (
  APIUtil.utilFetchAllWeights()
  .then(
    weights => {
      // console.log(weights);
      return dispatch(receiveAllWeights(weights))}
    // , errors => dispatch(receiveErrors(errors))
  )
);

export const requestSingleWeight = id => dispatch => (
  APIUtil.utilFetchSingleWeight(id)
  .then(
    weight => dispatch(receiveSingleWeight(weight))
    // ,errors => dispatch(receiveErrors(errors))
  )
);

export const createWeight = weight => dispatch => (
  APIUtil.utilCreateWeight(weight)
  .then(
    weight => {
      dispatch(receiveSingleWeight(weight));
      dispatch(clearErrors())},
    errors => {
      console.log(errors.request);
      return dispatch(receiveErrors(errors.request.responseText));}
  )
);

export const updateWeight = weight => dispatch => (
  APIUtil.utilUpdateWeight(weight)
  .then(
    weight => dispatch(receiveSingleWeight(weight)),
    errors => dispatch(receiveErrors(errors))
  )
);

export const deleteWeight = weight => dispatch => (
  APIUtil.utilDeleteWeight(weight)
  .then(
    weight => dispatch(removeWeight(weight))
  )
);

export const searchWeights = query => dispatch => (
  APIUtil.utilSearchWeights(query)
  .then(weights =>
    dispatch(receiveSearchedWeights(weights))
  )
);
