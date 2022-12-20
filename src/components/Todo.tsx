import React from "react";

interface Props {
  description: string;
}

const Todo: React.FC<Props> = ({ description }) => {
  return <li>{description}</li>;
};

export default Todo;

// do not pass down key as a prop
