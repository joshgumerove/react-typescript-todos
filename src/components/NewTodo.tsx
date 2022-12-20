import React, { FormEvent, useRef } from "react";
import Item from "../models/todo";
import classes from "./NewTodo.module.css";

interface Props {
  onAddTodo: (item: Item) => void;
}

const NewTodo: React.FC<Props> = ({ onAddTodo }) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null); // note how we must provide an initial value

  const submitHandler = (e: FormEvent): void => {
    e.preventDefault();
    const enteredText = todoTextInputRef.current!.value; // exclamation mark since connection will already be established

    if (!enteredText.trim()) {
      throw new Error("Error: text must not be empty");
    }
    const newInput = new Item(enteredText);
    onAddTodo(newInput);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <br />
      <input
        type="text"
        id="text"
        placeholder="todo..."
        ref={todoTextInputRef}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
