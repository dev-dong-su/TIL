import React, { Component } from "react";
import styles from "../styles/TodoItem.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function TodoItem({ done, children, onToggle, onRemove }) {
  return (
    <div className={cx("todo-item")} onclick={onToggle}>
      <input className={cx("tick")} type='checkbox' checked={done} readOnly />
      <div className={cx("text", { done })}>{children}</div>
      <div className={cx("delete")} onClick={onRemove}>
        [지우기]
      </div>
    </div>
  );
}

export default TodoItem;
