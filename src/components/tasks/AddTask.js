import { useState } from "react";
import classes from "./AddTask.module.css";

const AddTask = (props) => {
  const [enteredTask, setTask] = useState("");
  const [enteredPri, setPri] = useState("High");

  const changeHandler = (event) => {
    setTask(event.target.value);
  };

  const prioChangeHandler = (event) => {
    setPri(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const userData = {
      id: Math.random().toString(),
      task: enteredTask,
      prior: enteredPri,
      date: new Date(),
    };

    props.task(userData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={classes.card}>
        <h1>Add Task</h1>
        <input
          typeof="text"
          placeholder="Task..."
          required
          value={enteredTask}
          onChange={changeHandler}
        />
        <select
          className={classes.priority}
          value={enteredPri}
          onChange={prioChangeHandler}
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
        <div className={classes.btn}>
          <button>Add</button>
        </div>
      </div>
    </form>
  );
};

export default AddTask;
