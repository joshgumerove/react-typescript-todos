import React, { useState } from "react";
import Item from "../models/todo";

interface TodosContextObject {
  items: Item[];
  addTodo: (item: Item) => void;
  removeTodo: (id: string) => void;
}

export const TodosContext = React.createContext<TodosContextObject>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

interface Props {
  children: React.ReactNode;
}

const TodosContextProvider: React.FC<Props> = ({ children }) => {
  const [todosList, setTodoList] = useState<Item[]>([]);

  const adddTodoHandler = (item: Item) => {
    setTodoList((prev) => [...prev, item]);
  };

  const removeTodoHandler = (todoId: string) => {
    setTodoList((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };
  const contextValue: TodosContextObject = {
    items: todosList,
    addTodo: adddTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
