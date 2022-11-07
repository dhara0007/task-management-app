import {ActionTypes} from "../../redux/constants/ActionTypes"
import TaskData from '../../database/TaskData'
  const TASKS = TaskData;
  const TaskReducer = (state = TASKS, action) => {
    switch (action.type) {
      case ActionTypes.ADD_TASK:
        return [
          ...state,
          {
            id: action.id,
            name: action.name,
            description: action.description,
            duedate:action.duedate,
            toDo: true,
            inProgress:false,
            done:false
          },
        ];
      case ActionTypes.REMOVE_TASK:
        return state.filter(task => task.id !== action.id);
        case ActionTypes.SEE_DETAILS:
          return state;
      default:
        return state;
    }
  }
  
  export default TaskReducer;