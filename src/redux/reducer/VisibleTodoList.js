import { connect } from 'react-redux';
import { ActionTypes } from '../constants/ActionTypes';
import { RemoveTaskAction } from '../actions/RemoveTaskAction';
import TaskList from '../components/TaskList';

const getVisibleTaskList = (tasks, filter) => {
  switch (filter) {
    case ActionTypes.SHOW_DONE:
      return tasks.filter((task) => task.done && !task.inProgress && !task.toDo);
    case ActionTypes.SHOW_INPROGRESS:
      return tasks.filter((task) => !task.done && task.inProgress && !task.toDo);
    case ActionTypes.SHOW_TODO:
        return tasks.filter((task) => !task.done && !task.inProgress && task.toDo);
    case ActionTypes.SHOW_ALL:
    default:
      return tasks;
  }
};

const mapStateToProps = (state) => {
  return { 
    tasks: getVisibleTaskList(state.TaskReducer, state.VisibilityFilterReducer),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTaskDeleteClick: (id) => dispatch(RemoveTaskAction(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);