import React from "react";
import styles from "./Button.module.css";
const Button = ({ text }) => {
  return (
    <div className={styles["button-more"]}>
      <button className={styles["btn-more"]}>{text}</button>
    </div>
  );
};
export default Button;
