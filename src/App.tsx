import React, { useState } from "react";
import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";
import Item from "./models/todo";
import "./App.css";

function App() {
  const [todosList, setTodoList] = useState<Item[]>([]);

  const adddTodoHandler = (item: Item) => {
    setTodoList((prev) => [...prev, item]);
  };

  const removeTodoHandler = (todoId: string) => {
    setTodoList((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={adddTodoHandler} />
      <Todos items={todosList} onRemoveTodo={removeTodoHandler} />
    </div>
  );
}

export default App;

// note how this is now a .tsx file
// do not need to compile our JavaScript code manually
