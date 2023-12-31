import React from "react";
import styles from "./Card.module.css";
import banner from "../../asstes/banner.png"

const Card = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <img src={banner} alt="placeholder" />
        <div className={styles.banner}>
          <div id={styles.pill}>
            <p>100 Likes</p>
          </div>
        </div>
      </div>
      <div className={styles.titleWrapper}>
        <p>New Bollywood</p>
      </div>
    </div>
  );
};

export default Card;
