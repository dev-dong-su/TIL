import { React, useState } from "react";

function EventPractice() {
  const [state, setState] = useState({ username: "", message: "" });

  const handleChange = (e) => {
    setState({
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = () => {
    alert(state.username + ": " + state.message);
    setState({
      message: "",
      username: "",
    });
  };

  return (
    <div>
      <h1>EventPractice</h1>
      <input
        type='text'
        name='username'
        placeholder='유저명'
        value={state.username}
        onChange={handleChange}
      ></input>
      <input
        type='text'
        name='message'
        placeholder='아무거나 입력하세요'
        value={state.message}
        onChange={handleChange}
      ></input>
      <button onClick={handleClick}>확인</button>
    </div>
  );
}

export default EventPractice;
