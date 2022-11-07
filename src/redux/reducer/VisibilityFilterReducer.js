import {ActionTypes} from "../../redux/constants/ActionTypes"


const initialFilter = ActionTypes.SHOW_ALL;

const VisibilityFilterReducer = (state = initialFilter, action) => {
  switch (action.type) {
    case ActionTypes.SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

export default VisibilityFilterReducer;