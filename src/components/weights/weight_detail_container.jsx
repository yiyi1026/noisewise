import {connect} from 'react-redux';
import WeightDetail from './weight_detail.jsx'
import {deleteWeight} from '../../actions/weight_actions'

const mapDispatchToProps = (dispatch, {weight}) => ({
  deleteWeight: () => dispatch(deleteWeight(weight)),
});

export default connect(
  null, 
  mapDispatchToProps
)(WeightDetail);
