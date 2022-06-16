import { combineReducers } from "redux";

import TodoReducer from "../todo/TodoReducer";

const rootReducer = combineReducers({
	todo: TodoReducer
});

export default rootReducer;
