import "./App.css";
import TodoList from "./Components/TodoList/TodoList";
import NavBar from "./Components/Layout/Navigation/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <main className="app">
        <TodoList />
      </main>
    </>
  );
}

export default App;
