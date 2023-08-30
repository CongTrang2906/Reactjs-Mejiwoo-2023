import React from "react";
import styles from "./Slider.module.css";
import { SliderData } from "../../model/SliderData";
const Slider = () => {
  return (
    <div className={styles["slider"]}>
      {SliderData.map((item, index) => (
        <div key={index} className={styles["text-content"]}>
          <h2 className={styles["text-heading"]}>{item.heading}</h2>
          <h3 className={styles["text-heading-title"]}>{item.title}</h3>
          <div className={styles["text-description"]}>{item.description}</div>
        </div>
      ))}
    </div>
  );
};

export default Slider;
