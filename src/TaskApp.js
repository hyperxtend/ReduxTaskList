import React from "react";
import AddTask from "./Components/AddTask";
import TaskList from "./Components/TaskList";
import VisibilityFilters from "./Components/VisibilityFilters";
import "./styles.css";

export default function TaskApp() {
  return (
    <div className="taskApp">
      <h1>Tasks</h1>
      <AddTask />
      <VisibilityFilters />
      <TaskList />
    </div>
  );
}
