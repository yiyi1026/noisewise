import {connect} from 'react-redux';
import WeightDetail from './weight_detail.jsx'
import {deleteWeight, updateWeight} from '../../actions/weight_actions'

const mapDispatchToProps = (dispatch, {weight}) => ({
  deleteWeight: () => dispatch(deleteWeight(weight)),
  updateWeight: () => dispatch(updateWeight(weight))
});

export default connect(
  null, 
  mapDispatchToProps
)(WeightDetail);
