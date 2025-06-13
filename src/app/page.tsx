import Image from "next/image";
import styles from "./page.module.css";
import MainSlider from "@/component/layout/main-slider/Main-slider";
import LiveDrop from "@/component/layout/live-drop/Live-drop";

export default function Home() {
  return (
    <div className={styles.grid}>
      <LiveDrop />

      <div>
        <MainSlider />
        <p></p>
        <p></p>
      </div>

      <div></div>
    </div>
  );
}
