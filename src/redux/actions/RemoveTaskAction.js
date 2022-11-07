import {ActionTypes} from "../../redux/constants/ActionTypes"

export const RemoveTaskAction = (id) => {
    return {
      type: ActionTypes.REMOVE_TASK,
      id
    }
  }