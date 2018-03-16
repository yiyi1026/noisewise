
import {connect} from 'react-redux';
import WeightDetail from './weight_detail.jsx'
import {deleteWeight} from '../../actions/weight_actions'

// import { RingLoader } from 'react-spinners';

const mapDispatchToProps = (dispatch, {weight}) => ({
  // requestSingleTopic: (topicId) => dispatch(requestSingleTopic(topicId)),
  requestAllWeights: () => dispatch(requestAllWeights()),
  deleteWeight: () => dispatch(deleteWeight(weight)),
});

export default connect(
  null, 
  mapDispatchToProps
)(WeightDetail);
