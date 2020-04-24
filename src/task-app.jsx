import React from "react";
import AddTask from "./components/add-task";
import TaskList from "./components/task-list";
import VisibilityFilters from "./components/visibility-filters";
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
