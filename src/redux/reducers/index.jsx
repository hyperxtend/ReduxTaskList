import { combineReducers } from "../../../node_modules/redux";
import visibilityFilter from "./visibility-filter";
import todos from "./task";

export default combineReducers({ todos, visibilityFilter });