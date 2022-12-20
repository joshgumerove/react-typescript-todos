import React from "react";
import { Item } from "../models/todo";
import Todo from "./Todo";

interface Props {
  // children: React.ReactNode;
  items: Item[];
}

const Todos: React.FC<Props> = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        // <li key={item.id}>{item.description}</li>
        <Todo item={item} />
      ))}
    </ul>
  );
};

export default Todos;

// note -- React.FC is a type definition (FunctionComponent)
