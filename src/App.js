import "./App.css";
import { useState } from "react";
import TodoList from "./Components/TodoList/TodoList";

function App() {
  return (
    <div className="app">
      <h1 className="title">Todo App</h1>
      <TodoList />
    </div>
  );
}

export default App;
