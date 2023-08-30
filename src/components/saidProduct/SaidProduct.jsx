import React, { useRef } from "react";
import styles from "./SaidProduct.module.css";
import { SaidData } from "../../model/SaidData";
import SaidProductItem from "./SaidProductItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import nexticon from "../../assets/img/nexticonsvg.svg";
const SaidProduct = () => {
  let settings = {
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true,
    arrows: true,
  };
  function slideRight() {
    slideRef.current.slickNext();
  }

  const slideRef = useRef();
  return (
    <div className={styles["content-section-said"]}>
      <div className={styles["said-heading"]}>What They Said</div>
      <div className={styles["carousel"]}>
        <Slider ref={slideRef} {...settings}>
          {SaidData.map((item, index) => (
            <SaidProductItem
              key={index}
              title={item.title}
              image={item.image}
              name={item.name}
              icon={item.icon}
              price={item.title}
              description={item.description}
            ></SaidProductItem>
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
  );
};

export default SaidProduct;
