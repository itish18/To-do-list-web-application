import Todo from "./components/tasks/Todo";
import classes from "./App.module.css";

import AddTask from "./components/tasks/AddTask";
import Background from "./components/ui/Background";
import { useEffect, useState } from "react";

function App(props) {
  const [showAdd, setShowAdd] = useState(false);
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("allTasks");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("allTasks", JSON.stringify(todos));
  }, [todos]);

  const changeAdd = () => {
    setShowAdd(true);
  };

  const removeAdd = () => {
    setShowAdd(false);
  };

  const onAddTasks = (data) => {
    setTodos((prevTasks) => {
      return [...prevTasks, data];
    });
  };

  const onRemoveTasks = (id) => {
    if (window.confirm("Are you sure?")) {
      const removeTasks = todos.filter((todo) => {
        return todo.id !== id;
      });
      setTodos(removeTasks);
    }
  };

  return (
    <div>
      <div className={classes.heading}>
        <h1 className={classes.title}>ToDo List</h1>
      </div>
      <div className={classes.add}>
        <button className={classes.btn} onClick={changeAdd}>
          +Add
        </button>
      </div>
      <Todo items={todos} removeTask={onRemoveTasks} />;
      {showAdd && <AddTask task={onAddTasks} />}
      {showAdd && <Background remove={removeAdd} />}
    </div>
  );
}

export default App;
