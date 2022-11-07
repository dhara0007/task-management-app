import {ActionTypes} from "../../redux/constants/ActionTypes"

let nextTaskId = 99;
export const AddTaskAction = (name, description,duedate) => {
  return { 
    type: ActionTypes.ADD_TASK,
    id: nextTaskId++,
    name,
    description,
    duedate
  }
}

