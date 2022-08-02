import "./App.css";
import React, { createRef, forwardRef, useRef, useState } from "react";
import LifeCycleSample from "./ch.7/LifeCycleSample";

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function App() {
  const [state, setState] = useState({
    color: "#000000",
  });

  const handleClick = () => {
    setState({
      color: getRandomColor(),
    });
  };

  return (
    <div>
      <button onClick={handleClick}>랜덤 색상</button>
      <LifeCycleSample color={state.color}></LifeCycleSample>
    </div>
  );
}

export default App;
