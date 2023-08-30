import React, { useState } from "react";
import { OurData } from "../../model/OurData";
import OutProductItem from "./OutProductItem";
import styles from "./OurProduct.module.css";
import arrow from "../../assets/img/arrow.png";
const OurProduct = () => {
  const itemsPerPage = 6;

  const [activePage, setActivePage] = useState("top");

  const filteredProducts = OurData.filter(
    (product) => product.nameTitle.toLowerCase() === activePage
  ).slice(0, itemsPerPage);

  const handleSliderChange = (pageName) => {
    if (pageName && typeof pageName === "string") {
      setActivePage(pageName.toLowerCase());
    }
  };
  return (
    <div className="our">
      <div className={styles["content-section-our"]}>
        <div className={styles["our-heading"]}>Our Products</div>
        <div className={styles["section-product"]}>
          <ul className={styles["nav-our"]}>
            {["Top", "Bottom", "Dress", "Set", "Knit", "Outer"].map(
              (item, index) => (
                <li
                  key={index}
                  className={`${
                    activePage === item.toLowerCase()
                      ? styles["section-item"]
                      : ""
                  }`}
                >
                  <a
                    onClick={() => handleSliderChange(item)}
                    // href={`?${item.toLowerCase()}`}
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
        <div className={styles["our-product"]}>
          <div className={styles["our-product-all"]}>
            {filteredProducts.map((item, index) => (
              <OutProductItem
                key={index}
                image={item.image}
                name={item.name}
                price={item.price}
                button={item.button}
                nameButton={item.nameButton}
              ></OutProductItem>
            ))}
          </div>
          <div className={styles["btn-our"]}>
            <button className={styles["btn-see-more"]}>
              SEE MORE
              <img
                className={styles["icon-arrow"]}
                src={arrow}
                alt={styles["Icon"]}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProduct;
