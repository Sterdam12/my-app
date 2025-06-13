import { FC } from "react";
import Image from "next/image";
import styles from "./Live-drop.module.css";
import LiveElement from "@/component/live-element/Live-element";

const LiveDrop: FC = () => {
  return (
    <div className={styles.LiveDrop}>
      <p className={styles.title}>Live Feed</p>
      <div className={styles.LiveFeed}>
        <LiveElement />
      </div>
    </div>
  );
};

export default LiveDrop;
