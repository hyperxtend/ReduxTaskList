import React from "react";
import cx from "classnames";

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

export default Task;