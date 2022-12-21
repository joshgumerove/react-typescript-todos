import React from "react";
import Item from "../models/todo";
import Todo from "./Todo";
import classes from "./Todos.module.css";

interface Props {
  // children: React.ReactNode;
  items: Item[];
  onRemoveTodo: (id: string) => void;
}

const Todos: React.FC<Props> = ({ items, onRemoveTodo }) => {
  return (
    <ul className={classes.todos}>
      {items.map((item) => (
        <Todo
          key={item.id}
          description={item.description}
          onRemoveTodo={onRemoveTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
