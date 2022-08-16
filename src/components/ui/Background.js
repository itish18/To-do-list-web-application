import classes from "./Background.module.css";

const Background = (props) => {
  return <div className={classes.backdrop} onClick={props.remove} />;
};

export default Background;
