import React, { useRef } from "react";

function ScrollBox(props, ref) {
  const style = {
    border: "1px solid black",
    height: "300px",
    width: "300px",
    overflow: "auto",
    position: "relative",
  };

  const innerStyle = {
    width: "100%",
    height: "650px",
    background: "linear-gradient(white, black)",
  };

  const scrollToBottom = () => {
    const { scrollHeight, clientHeight } = box;
    /*
    ES6의 비구조화 할당 문법
    다음과 같은 의미
    const scrollHeight = box.scrollHeight
    const clientHeight = box.clientHeight
    */
    box.scrollTop = scrollHeight - clientHeight;
  };

  const box = useRef();

  return (
    <div style={style} ref={box}>
      ScrollBox
      <div style={innerStyle}></div>
    </div>
  );
}

export default ScrollBox;
