import React from "react";
import styles from "../styles/PageTemplate.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function PageTemplate({ children }) {
  return (
    <div className={cx("page-template")}>
      <h1>일정 관리</h1>
      <div className={cx("content")}>{children}</div>
    </div>
  );
}

export default PageTemplate;
