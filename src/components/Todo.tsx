import React from "react";
import classes from "./TodoItem.module.css";

interface Props {
  description: string;
}

const Todo: React.FC<Props> = ({ description }) => {
  return <li className={classes.item}>{description}</li>;
};

export default Todo;

// do not pass down key as a prop
