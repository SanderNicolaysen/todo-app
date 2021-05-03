import classes from "./TodoHeader.module.css";

const TodoHeader = (props) => {
  return (
    <div className={classes["todo-header"]}>
      <div className={classes["list-title-container"]}>
        <h2 className={classes["list-title"]}>{props.name}</h2>
      </div>
      <p
        className={classes["task-count"]}
      >{`${props.remainingTasks} tasks remaining`}</p>
    </div>
  );
};

export default TodoHeader;
