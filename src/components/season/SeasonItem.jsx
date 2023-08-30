import React from "react";
import Button from "../button/Button";
import styles from "./SeasonItem.module.css";

const SeasonItem = (props) => {
  return (
    <div className={styles["seasion-item"]}>
      <div className={styles["image-item"]}>
        <img src={props.image} alt="" className="products-img" />
      </div>
      <p className={styles["products-name"]}>{props.name}</p>
      <Button text={"MORE"} />
    </div>
  );
};

export default SeasonItem;
