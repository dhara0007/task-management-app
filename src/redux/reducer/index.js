import { combineReducers } from 'redux';
import TaskReducer from './TaskReducer';
import VisibilityFilterReducer from './VisibilityFilterReducer';

export default combineReducers({
  TaskReducer,
  VisibilityFilterReducer
})

