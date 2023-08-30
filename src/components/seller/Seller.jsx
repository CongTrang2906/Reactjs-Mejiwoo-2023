import React, { useRef } from "react";
import { SellerData } from "../../model/SellerData";
import SellerItem from "./SellerItem";
import styles from "./Seller.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import nexticon from "../../assets/img/nexticonsvg.svg";
const Seller = () => {
  let settings = {
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true,
    arrows: true,
  };
  function slideLeft() {
    slideRef.current.slickPrev();
  }
  function slideRight() {
    slideRef.current.slickNext();
  }

  const slideRef = useRef();
  return (
    <div className={styles["best-seller"]}>
      <div className={styles["product-seller"]}>
        <div className={styles["section-heading"]}>Our Best Seller</div>
        <div className={styles["carousel"]}>
          <Slider ref={slideRef} {...settings}>
            {SellerData.map((item, index) => (
              <SellerItem
                key={index}
                image={item.image}
                name={item.name}
                price={item.price}
              ></SellerItem>
            ))}
          </Slider>
          <div className={styles.control}>
            {/* <span onClick={slideLeft}>A</span> */}
            <span onClick={slideRight}>
              <img src={nexticon} alt="" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Seller;
