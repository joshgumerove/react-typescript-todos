import React from "react";
import Item from "../models/todo";
import Todo from "./Todo";
import classes from "./Todos.module.css";

interface Props {
  // children: React.ReactNode;
  items: Item[];
}

const Todos: React.FC<Props> = ({ items }) => {
  return (
    <ul className={classes.todos}>
      {items.map((item) => (
        <Todo key={item.id} description={item.description} />
      ))}
    </ul>
  );
};

export default Todos;
