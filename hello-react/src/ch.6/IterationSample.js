import React, { useState } from "react";

function IterationSample() {
  const [state, setState] = useState({
    names: ["눈사람", "얼음", "눈", "바람"],
    name: "",
  });

  const handleChange = (e) => {
    setState({
      ...state,
      name: e.target.value,
    });
  };

  const handleInsert = () => {
    setState({
      names: state.names.concat(state.name),
      name: "",
    });
  };

  const handleRemove = (index) => {
    const { names } = state;
    /*
    배열을 자르는 내장 함수 slice와 전개 연산자...를
    사용하여 index 번째 값을 제외한 값들을 배열에 넣어 줌
    */
    setState({
      ...state,
      names: [
        ...names.slice(0, index),
        ...names.slice(index + 1, names.length),
      ],
    });
  };

  const nameList = state.names.map((name, index) => (
    <li key={index} onDoubleClick={() => handleRemove(index)}>
      {name}
    </li>
  ));

  return (
    <div>
      <h1>IterationSample</h1>
      <input onChange={handleChange} value={state.name}></input>
      <button onClick={handleInsert}>추가</button>
      <ul>{nameList}</ul>
    </div>
  );
}

export default IterationSample;
