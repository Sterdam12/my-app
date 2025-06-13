import { FC } from "react";
import Image from "next/image";
import styles from "./Live-element.module.css";

const LiveElement: FC = () => {
  return (
    <div className={styles.LiveFeedInner}>
      <Image
        className={styles.img}
        src="/img/for-slider.jpg"
        width={100}
        alt="Баннер"
        height={100}
        quality={90}
        priority={true}
      />
      <div className={styles.LiveFeedInfo}>
        <p className={styles.NameUser}>Anton</p>
        <p className={styles.CountItem}>2000</p>
        <p className={styles.NameItem}>Резиновый</p>
        <p className={styles.NameItem}>Резиновый</p>
      </div>
    </div>
  );
};

export default LiveElement;
