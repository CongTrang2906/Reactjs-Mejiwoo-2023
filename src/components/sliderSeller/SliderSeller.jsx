import React from "react";
import styles from "./SliderSeller.module.css";
import { SliderSellerData } from "../../model/SliderSellerData";
const SliderSeller = () => {
  return (
    <div className={styles["slider-seller"]}>
      {SliderSellerData.map((item, index) => (
        <div key={index} className={styles["text-content-seller"]}>
          <h2 className={styles["text-heading-seller"]}>{item.heading}</h2>
          <p className={styles["text-description-seller"]}>
            {item.description}
          </p>
          <button className={styles["btn-shopnow"]}>SHOP NOW</button>
        </div>
      ))}
    </div>
  );
};

export default SliderSeller;
