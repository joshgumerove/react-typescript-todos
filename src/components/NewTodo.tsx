import React, { FormEvent, useRef } from "react";

const NewTodo = () => {
  const todoTextInputRef = useRef<HTMLInputElement>(null); // note how we must provide an initial value
  const submitHandler = (e: FormEvent): void => {
    e.preventDefault();
    const enteredText = todoTextInputRef.current!.value; // exclamation mark since connection will already be established

    if (!enteredText.trim()) {
      throw new Error("Error: text must not be empty");
    }
  };

  return (
    <form onSubmit={submitHandler}>
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
