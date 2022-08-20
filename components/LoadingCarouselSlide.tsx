import React, { FC } from "react";
import styles from "../styles/LoadingCarouselSlideItem.module.scss";
const LoadingCarouselSlide: FC = () => {
  
  const indexArray = [0, 1, 2, 3];
  const LoadingCard: FC = () => {
    return (
      <div className={styles.loadingCarouselSlideItem}>
        <div className={`${styles.shimmerBG} ${styles.media}`} />
        <div className={styles.p32}>
          <div className={`${styles.shimmerBG} ${styles.titleLine}`} />
          <div className={`${styles.shimmerBG} ${styles.titleLine} ${styles.end}`} />
          <div className={`${styles.shimmerBG} ${styles.contentLine} ${styles.mT24}`} />
          <div className={`${styles.shimmerBG} ${styles.contentLine}`} />
          <div className={`${styles.shimmerBG} ${styles.contentLine}`} />
          <div className={`${styles.shimmerBG} ${styles.contentLine}`} />
          <div className={`${styles.shimmerBG} ${styles.contentLine} ${styles.end}`} />
        </div>
      </div>
    )
  }

  return (
    <div className={styles.loadingCarouselSlideItemWrapper}>
      {indexArray.map(item => <LoadingCard key={item} />)}
    </div>
  );
};

export default LoadingCarouselSlide;
