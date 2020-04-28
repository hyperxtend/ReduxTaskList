import React from "react";
import { connect } from "react-redux";
import Task from "../task";
import { getTodosByVisibilityFilter } from "../../redux/selectors";
import Provider from "react-redux";

const TaskList = ({ todos }) => (
  <ul className="taskList">
    {todos && todos.length
      ? todos.map((todo, index) => {
          return <Task key={`todo-${todo.id}`} todo={todo} />;
        })
      : "No added Tasks"}
      <button onClick={this.handleDeleteTodo}>X</button>
  </ul>
 
);
const mapStateToProps = state => {
  const { visibilityFilter } = state;
  const todos = getTodosByVisibilityFilter(state, visibilityFilter);
  return { todos };
};
export default connect(mapStateToProps)(TaskList);
