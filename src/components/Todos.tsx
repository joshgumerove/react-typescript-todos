import React from "react";

interface Props {
  // children: React.ReactNode;
  items: string[];
}

const Todos: React.FC<Props> = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
};

export default Todos;

// note -- React.FC is a type definition (FunctionComponent)
