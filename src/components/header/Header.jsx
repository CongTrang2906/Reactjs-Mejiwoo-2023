import React from "react";
import styles from "./Header.module.css";
import search from "../../assets/img/search.png";
import shop from "../../assets/img/shop.png";
import user from "../../assets/img/user.png";
import { HeaderData } from "../../model/HeaderData";
const Header = () => {
  return (
    <div>
      {HeaderData.map((item, index) => (
        <div key={index} className={styles["header"]}>
          <ul className={styles["nav"]}>
            <li>
              <a href="#home">{item.navHome}</a>
            </li>
            <li>
              <a href="#product">{item.navProduct}</a>
            </li>
            <li>
              <a href="#categories">{item.navCategories}</a>
            </li>
            <li>
              <a href="#sale">{item.navSale}</a>
            </li>
          </ul>
          <div className={styles["title"]}>
            <p className={styles["title-product"]}>{item.title}</p>
            <p className={styles["title-product-kr"]}>{item.titleProduct}</p>
          </div>
          <div className={styles["search"]}>
            <div className={styles["search-btn"]}>
              <input type="text" placeholder="Search" />
              <div className={styles["icon-search"]}>
                <img className={styles["icon-title"]} src={search} alt="Icon" />
              </div>
            </div>
            <div className={styles["icon-shop"]}>
              {" "}
              <img className={styles["icon-title"]} src={shop} alt="Icon" />
            </div>
            <div className={styles["icon-user"]}>
              {" "}
              <img className={styles["icon-title"]} src={user} alt="Icon" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Header;
