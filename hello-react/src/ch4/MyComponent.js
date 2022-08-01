import { React, useState } from "react";
import { PropTypes } from "prop-types";

function MyComponent(props) {
  const [state, setState] = useState({ number: 0 });

  return (
    <div>
      <p>내 이름은 {props.name}</p>
      <p>내 나이는 {props.age}</p>
      <p>숫자 : {state.number}</p>
      <button
        onClick={() => {
          setState({
            number: state.number + 1,
          });
        }}
      >
        더하기
      </button>
    </div>
  );
}

MyComponent.defaultProps = {
  name: "응가",
};

MyComponent.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired,
};
export default MyComponent;
