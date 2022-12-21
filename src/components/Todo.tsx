import React from "react";
import classes from "./TodoItem.module.css";

interface Props {
  description: string;
  onRemoveTodo: () => void; // note this syntax
}

const Todo: React.FC<Props> = ({ description, onRemoveTodo }) => {
  return (
    <li className={classes.item} onClick={onRemoveTodo}>
      {description}
    </li>
  );
};

export default Todo;
