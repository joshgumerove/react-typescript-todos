import React from "react";
import { Item } from "../models/todo";

interface Props {
  item: Item;
}

const Todo: React.FC<Props> = ({ item }) => {
  return <li key={item.id}>{item.description}</li>;
};

export default Todo;
