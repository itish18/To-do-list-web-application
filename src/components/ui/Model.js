import classes from "./Model.module.css";

const Model = (props) => {
  return (
    <div className={classes.model}>
      <p>Are you sure?</p>
      <button
        className={classes.btn}
        onClick={() => {
          console.log(props.taskId);
        }}
      >
        Yes
      </button>
      <button className={classes.btn} onClick={props.onNo}>
        No
      </button>
    </div>
  );
};

export default Model;
