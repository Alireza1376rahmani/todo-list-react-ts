import { combineReducers } from "redux";

import appReducer from './reducers/app'
import taskReducer from './reducers/tasks'

export default combineReducers({
    app: appReducer,
    tasks: taskReducer
})
