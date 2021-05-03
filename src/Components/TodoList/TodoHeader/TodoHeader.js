import classes from "./TodoHeader.module.css";

const TodoHeader = (props) => {
  return (
    <div className={classes["todo-header"]}>
      <h2 className={classes["list-title"]}>Youtube</h2>
      <p
        className={classes["task-count"]}
      >{`${props.remainingTasks} tasks remaining`}</p>
    </div>
  );
};

export default TodoHeader;
