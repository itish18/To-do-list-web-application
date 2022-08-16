import classes from "./ToDoLists.module.css";

const ToDoLists = (props) => {
  let priority = "";

  if (props.prior === "High") {
    priority = classes.high;
  } else if (props.prior === "Medium") {
    priority = classes.medium;
  } else {
    priority = classes.low;
  }

  return (
    <div>
      <div className={classes.card}>
        <div className={classes.box}>
          <div className={priority}></div>
        </div>
        <p>{props.task}</p>
        <div className={classes.butt}>
          <button
            className={classes.btn}
            onClick={() => {
              props.delHandler(props.id);
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToDoLists;
