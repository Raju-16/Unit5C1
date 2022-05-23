import React, { useState } from "react";
import styles from "./addTask.module.css";

const AddTask = ({ addtodo }) => {
  const [value, setValue] = useState("");
  return (
    <div className={styles.todoForm}>
      <input
        data-cy="add-task-input"
        type="text"
        value={value}
        placeholder="Add Task"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button
        data-cy="add-task-button"
        disabled={!value}
        onChange={() => {
          addtodo(value);
          setValue("");
        }}
      >
        +
      </button>
    </div>
  );
};

export default AddTask;
