import classes from "./TodoForm.module.css";
import { useState, useRef, useEffect } from "react";

const TodoForm = (props) => {
  const [input, setInput] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const submitTodoTask = (event) => {
    event.preventDefault();

    props.onSubmit({ text: input, completed: false, id: Math.random() * 1000 });

    setInput("");
  };

  return (
    <div className={classes["new-task-creator"]}>
      <form onSubmit={submitTodoTask}>
        <input
          ref={inputRef}
          type="text"
          value={input}
          className={`${classes.new} ${classes.task}`}
          placeholder="new task name"
          aria-label="new task name"
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className={`${classes.btn} ${classes.create}`}
          aria-label="create new task"
        >
          +
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
