import ToDoLists from "./ToDoLists";
import classes from "./Todo.module.css";

const Todo = (props) => {
  if (props.items.length === 0) {
    return <h2>No Tasks! Try adding some.</h2>;
  }

  const order = ["High", "Medium", "Low"];
  const map = new Map();
  order.forEach((x, i) => map.set(x, i));
  props.items.sort((x, y) => map.get(x.prior) - map.get(y.prior));

  return (
    <div className={classes.showGrid}>
      {props.items.map((eachTask) => {
        return (
          <ToDoLists
            key={eachTask.id}
            id={eachTask.id}
            task={eachTask.task}
            prior={eachTask.prior}
            delHandler={props.removeTask}
            date={eachTask.date}
          />
        );
      })}
    </div>
  );
};
export default Todo;
