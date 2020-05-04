import React from "react";
import { connect } from "react-redux";
import cx from "classnames";
import { toggleTodo } from "../../redux/actions";

const Task = ({ todo, toggleTodo }) => (
  <li className="taskItem" onClick={() => toggleTodo(todo.id)}>
    {todo && todo.completed ? "👌" : "👋"}{" "}
    <span
      className={cx(
        "taskItem__text",
        todo && todo.completed && "taskItem__text--completed"
      )}
    >
      {todo.content}
    </span>
    
  </li>
);
export default connect(
  null,
  { toggleTodo }
)(Task);
// export default Task;