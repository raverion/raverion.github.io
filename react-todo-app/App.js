import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");

  useEffect(() => {
    document.title = "Basic Todo App";
  }, []);

  const addTodo = () => {
    if (todo !== "") {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };

  const deleteTodo = (text) => {
    const newTodos = todos.filter((todo) => {
      return todo !== text;
    });
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h1> todo list </h1>

      <div className="input-wrapper">
        <input
          type="text"
          name="todo"
          value={todo}
          placeholder="Create a new task"
          onChange={(event) => {
            setTodo(event.target.value);
          }}
        />
        <button className="add-button" onClick={addTodo}>
          Add
        </button>
      </div>

      {todos?.length > 0 ? (
        <ul className="todo-list">
          {todos.map((todo, index) => (
            <div className="todo">
              <li key={index}> {todo} </li>
              <button
                className="delete-button"
                onClick={() => {
                  deleteTodo(todo);
                }}
              >
                Delete
              </button>
            </div>
          ))}
        </ul>
      ) : (
        <div className="empty">
          <p>No task found</p>{" "}
        </div>
      )}
    </div>
  );
};

export default App;
