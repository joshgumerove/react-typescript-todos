import React, { useContext } from "react";
import { TodosContext } from "../store/todos-context";
import Todo from "./Todo";
import classes from "./Todos.module.css";

// interface Props {
//   // children: React.ReactNode;
//   items: Item[];
//   onRemoveTodo: (id: string) => void;
// }

const Todos: React.FC = () => {
  const todosContext = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {todosContext.items.map((item) => (
        <Todo
          key={item.id}
          description={item.description}
          onRemoveTodo={todosContext.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
