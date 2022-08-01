import "./App.css";
import React, { createRef, forwardRef, useRef } from "react";
import ScrollBox from "./ScrollBox";

function App() {
  const button = React.forwardRef((props, ref) => (
    <button onClick={() => ref.scrollToBottom()}>맨 밑으로</button>
  ));

  const ref = createRef(button);

  return (
    <div>
      <ScrollBox ref={ref}></ScrollBox>
    </div>
  );
}

export default App;
