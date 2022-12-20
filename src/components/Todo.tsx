import React from "react";
import { Item } from "../models/todo";

interface Props {
  description: string;
}

const Todo: React.FC<Props> = ({ description }) => {
  return <li>{description}</li>;
};

export default Todo;
