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
        <Todo key={item.id} description={item.description} />
      ))}
    </ul>
  );
};

export default Todos;
