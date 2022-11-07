import { combineReducers } from 'redux';
import TaskReducer from './TaskReducer';
import VisibilityFilterReducer from './VisibilityFilterReducer';

const reducers=  combineReducers({
  TaskReducer,
  VisibilityFilterReducer
})

export default reducers;

