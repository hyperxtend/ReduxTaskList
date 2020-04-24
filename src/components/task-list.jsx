import React from "react";
import { connect } from "react-redux";
import Task from "./Task";
import { getTodosByVisibilityFilter } from "../redux/selectors";

const TaskList = ({ todos }) => (
  <ul className="taskList">
    {todos && todos.length
      ? todos.map((todo, index) => {
          return <Task key={`todo-${todo.id}`} todo={todo} />;
        })
      : "No added Tasks"}
  </ul>
);
const mapStateToProps = state => {
  const { visibilityFilter } = state;
  const todos = getTodosByVisibilityFilter(state, visibilityFilter);
  return { todos };
};
export default connect(mapStateToProps)(TaskList);
