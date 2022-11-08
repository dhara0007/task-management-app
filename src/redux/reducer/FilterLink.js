import { connect } from 'react-redux';
import SideLink from '../components/SideLink';
import { SetVisibilityFilterAction } from '../actions/SetVisibilityFilterAction';


const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.VisibilityFilterReducer
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => dispatch(SetVisibilityFilterAction(ownProps.filter))
  }
}

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(SideLink);

export default FilterLink;