import React from "react";
import AddTask from "./Components/add-task";
import TaskList from "./Components/task-list";
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
