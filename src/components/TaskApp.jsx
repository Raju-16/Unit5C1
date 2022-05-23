import React, { useState } from "react";
import styles from "./taskApp.module.css";
import TaskHeader from "./TaskHeader/TaskHeader";
import AddTask from "./AddTask/AddTask";
import Tasks from "./Tasks/Tasks";
import { v4 as uuidv4 } from "uuid";

const TaskApp = () => {
  const [todo, setTodo] = useState([]);

  // NOTE: do not delete `data-cy` key value pair

  const addtodo = (newtodo) => {
    setTodo([
      ...todo,
      {
        id: uuidv4(),
        value: newtodo,
      },
    ]);
  };
  return (
    <div data-cy="task-app" className={styles.taskApp}>
      <div className={styles.top_text}>
        <h1>Todo List</h1>
        <h4>
          You have {} of {} task reamining
        </h4>
      </div>
      <TaskHeader />
      <AddTask addtodo={addtodo} />
      <Tasks />
    </div>
  );
};

export default TaskApp;
