import React from "react";
import styles from "./tasks.module.css";
import Task from '../Task/Task'
import Counter from '../Counter/Counter'
import tasks from "../../data/tasks.json";

const Tasks = () => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <>
      <ul data-cy="tasks" className={styles.tasks}>
      {
        tasks.map((todo)=> {
          <Task value={todo.value} />
        })
      }
      </ul>
      <div data-cy="tasks-empty" className={styles.empty}>
      <Counter/>
      </div>
    </>
  );
};

export default Tasks;
