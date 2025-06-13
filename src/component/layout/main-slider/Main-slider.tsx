import { FC } from "react";
import Image from "next/image";
import styles from "./Main-slider.module.css";

const MainSlider: FC = () => {
  return (
    <div className={styles.slider}>
      <Image
        className={styles.img}
        src="/img/for-slider.jpg"
        width={800}
        alt="Баннер"
        height={400}
        quality={90}
        priority={true}
      />
    </div>
  );
};

export default MainSlider;
