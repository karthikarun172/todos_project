/** @format */

import React from "react";
import Divider from "./Divider";
import { TodoList } from "../Dummies";
import TaskCard from "./TaskCard";

function DailyTaskList({ onClickTask }) {
  return (
    <div>
      <Divider date="today" />
      {TodoList.map((todos) => (
        <TaskCard
          onClickTask={onClickTask}
          TaskName={todos.name}
          priority={todos.priority}
          key={todos.id}
        />
      ))}
    </div>
  );
}

export default DailyTaskList;
