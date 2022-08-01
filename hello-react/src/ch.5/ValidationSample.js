import React, { useRef, useState } from "react";
import "./ValidationSample.css";

function ValidationSample() {
  const [state, setState] = useState({
    password: "",
    clicked: false,
    validated: false,
  });

  const inputRef = useRef();

  const handleChange = (e) => {
    setState({
      ...state,
      password: e.target.value,
    });
  };

  const handleButtonClick = () => {
    setState({
      clicked: true,
      validated: state.password === "0000",
    });
    inputRef.current.focus();
  };

  return (
    <div>
      <h1>ValidationSample</h1>
      <input
        type='password'
        value={state.password || ""}
        onChange={handleChange}
        ref={inputRef}
        className={
          state.clicked ? (state.validated ? "success" : "failure") : ""
        }
      ></input>
      <button onClick={handleButtonClick}>검증하기</button>
    </div>
  );
}

export default ValidationSample;
