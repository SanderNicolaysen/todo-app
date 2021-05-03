import classes from "./TodoList.module.css";
import Todo from "./Todo/Todo";
import TodoForm from "./TodoForm/TodoForm";
import TodoHeader from "./TodoHeader/TodoHeader";
import { useState, useEffect } from "react";
import useLocalStorage from "../../hooks/useLocalStorage";
import axios from "./../../axios-todos";

const TodoList = (props) => {
  const [todos, setTodos] = useLocalStorage("todos", []);

  useEffect(() => {
    // const getTodos = async () => {
    //   const myTodos = await axios.get("/todos.json");
    //   console.log(myTodos);
    //   setTodos(myTodos.data);
    // };
    // getTodos();
  }, []);

  const addTodoHandler = (todo) => {
    setTodos([...todos, todo]);
  };

  const removeTodoHandler = (id) => {
    const updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);

    // await axios.delete('');
  };

  const updateTodoHandler = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  const editTodoHandler = (editedTodo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === editedTodo.id) {
        todo.text = editedTodo.text;
      }
      return todo;
    });

    setTodos(updatedTodos);
  };

  const clearCompletedTasksHandler = () => {
    setTodos([]);
  };

  const remainingTodos = () => {
    return todos.filter((x) => x.completed === false).length;
  };

  return (
    <div className={classes["todo-list"]}>
      <TodoHeader remainingTasks={remainingTodos()} name="Default" />
      <div className={classes["todo-body"]}>
        <div className={classes["tasks"]}>
          {todos.map((item) => {
            return (
              <Todo
                key={item.id}
                todo={item}
                onUpdate={updateTodoHandler}
                onEdit={editTodoHandler}
                onRemove={removeTodoHandler}
              />
            );
          })}
        </div>

        <TodoForm onSubmit={addTodoHandler} />

        <div className={classes["delete-stuff"]}>
          <button
            onClick={clearCompletedTasksHandler}
            className={`${classes["btn"]} ${classes["delete"]}`}
          >
            Clear completed tasks
          </button>
          <button className={`${classes["btn"]} ${classes["delete"]}`}>
            Delete list
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
