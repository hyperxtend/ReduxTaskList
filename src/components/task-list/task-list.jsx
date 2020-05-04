import React from "react";
import Task from "../task";

const TaskList = ({ todos }) => (
  <ul className="taskList">
    {todos && todos.length
      ? todos.map((todo, index) => {
          return <Task key={`todo-${todo.id}`} todo={todo} />;
        })
      : "No added Tasks"}
  </ul>
 
);

export default TaskList;