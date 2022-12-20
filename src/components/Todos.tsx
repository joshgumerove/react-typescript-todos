import React from "react";
import { Todo } from "../models/todo";

interface Props {
  // children: React.ReactNode;
  items: Todo[];
}

const Todos: React.FC<Props> = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.description}</li>
      ))}
    </ul>
  );
};

export default Todos;

// note -- React.FC is a type definition (FunctionComponent)
