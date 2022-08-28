import React from "react";
import styles from "../styles/TodoInput.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

// input과 버튼이 함께 있는 컴포넌트
function TodoInput({ value, onChange, onInsert }) {
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onInsert();
    }
  };

  return (
    <div className={cx("todo-input")}>
      <input
        onChange={onChange}
        value={value}
        onKeyPress={handleKeyPress}
      ></input>
      <div className={cx("add-button")} onClick={onInsert}>
        추가
      </div>
    </div>
  );
}

export default TodoInput;
