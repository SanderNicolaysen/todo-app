import classes from "./Todo.module.css";
import { MdEdit, MdDelete, MdDone } from "react-icons/md";
import { useState, useEffect, useRef } from "react";

const Todo = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editInput, setEditInput] = useState("");
  const editRef = useRef();

  useEffect(() => {
    setEditInput(props.todo.text);
  }, []);

  useEffect(() => {
    if (isEditing) {
      editRef.current.focus();
    }
  }, [isEditing]);

  const updateTodoHandler = () => {
    props.onUpdate(props.todo.id);
  };

  const removeTodoHandler = (event) => {
    props.onRemove(props.todo.id);
  };

  const editTodoHandler = () => {
    setIsEditing(true);
  };

  const saveEdit = () => {
    setIsEditing(false);

    const updatedTodo = { ...props.todo };
    updatedTodo.text = editInput;
    props.onEdit(updatedTodo);
  };

  const getCorrectEditButton = () => {
    if (isEditing) {
      return (
        <button
          onClick={saveEdit}
          className={`${classes["btn"]} ${classes["success"]}`}
        >
          <MdDone title="edit done" />
        </button>
      );
    }

    return (
      <button
        onClick={editTodoHandler}
        className={`${classes["btn"]} ${classes["edit"]}`}
      >
        <MdEdit title="edit task" />
      </button>
    );
  };

  const task = (
    <>
      <input
        onClick={updateTodoHandler}
        type="checkbox"
        checked={props.todo.completed}
        onChange={(e) => props.todo.completed}
        id={props.todo.id}
      />
      <label htmlFor={props.todo.id}>
        <span className={classes["custom-checkbox"]}></span>
        {props.todo.text}
      </label>
    </>
  );

  const edit = (
    <>
      <input
        ref={editRef}
        type="text"
        value={editInput}
        className={`${classes.new} ${classes["edit-input"]}`}
        aria-label="edit task"
        onChange={(e) => setEditInput(e.target.value)}
        onKeyPress={(e) => (e.key === "Enter" ? saveEdit() : null)}
      />
      <label htmlFor={props.todo.id}>
        <span className={classes["custom-edit-checkbox"]}></span>
      </label>
    </>
  );

  return (
    <div className={classes.task}>
      {!isEditing && task}
      {isEditing && edit}

      <div className={classes["edit-task"]}>
        {getCorrectEditButton()}
        <button
          onClick={removeTodoHandler}
          className={`${classes["btn"]} ${classes["delete"]}`}
        >
          <MdDelete title="delete todo" />
        </button>
      </div>
    </div>
  );
};

export default Todo;
