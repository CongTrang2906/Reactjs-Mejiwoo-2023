import React from "react";
import styles from "./SaidProductItem.module.css";
const SaidProductItem = (props) => {
  return (
    <div className={styles["user-all"]}>
      <div className={styles["user"]}>
        <div className={styles["image"]}>
          <img
            src={props.image}
            alt=""
            className={styles["product-img-user"]}
          />
        </div>
        <p className={styles["product-said"]}>{props.title}</p>
        <div className={styles["all-star"]}>
          <img className={styles["icon-star"]} src={props.icon} alt="Icon" />
          <img className={styles["icon-star"]} src={props.icon} alt="Icon" />
          <img className={styles["icon-star"]} src={props.icon} alt="Icon" />
          <img className={styles["icon-star"]} src={props.icon} alt="Icon" />
          <img className={styles["icon-star"]} src={props.icon} alt="Icon" />
        </div>
        <p className={styles["name"]}>{props.name}</p>
        <p className={styles["description-user"]}>{props.description}</p>
      </div>
    </div>
  );
};

export default SaidProductItem;
