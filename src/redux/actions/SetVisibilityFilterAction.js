import {ActionTypes} from "../constants/ActionTypes"

export const SetVisibilityFilterAction = (filter) => {
    return { 
      type: ActionTypes.SET_VISIBILITY_FILTER,
      filter
    }
  }