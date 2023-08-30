import React from "react";
import { SeasonData } from "../../model/SeasonData";
import SeasonItem from "./SeasonItem";
import styles from "./Season.module.css";
const Season = () => {
  return (
    <div className={styles["season-collection-all"]}>
      <div className={styles["section-heading"]}>Season Collections</div>
      <div className={styles["products-list"]}>
        {SeasonData.map((item, index) => (
          <SeasonItem
            key={index}
            image={item.image}
            name={item.name}
          ></SeasonItem>
        ))}
      </div>
    </div>
  );
};

export default Season;
