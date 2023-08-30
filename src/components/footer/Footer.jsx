import React from "react";
import styles from "./Footer.module.css";
import c from "../../assets/img/c.png";
const Footer = () => {
  return (
    <div id="footer">
      <div className={styles["content-footer"]}>
        <div className={styles["footer-all"]}>
          <p className={styles["title-footer"]}>
            <img src={c} alt="" className={styles["icon"]} />
            2023 MEJIWOO. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
