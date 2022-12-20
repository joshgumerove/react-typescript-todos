import React from "react";
import Todos from "./components/Todos";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Todos />
    </div>
  );
}

export default App;

// note how this is now a .tsx file
// do not need to compile our JavaScript code manually
