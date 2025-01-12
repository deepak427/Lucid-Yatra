import { Metadata } from "next";
import styles from "./Home.module.css";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Lucid Yatra - Go better",
  description: "Personalized and secure travel experience",
};

export default function Home() {
  return (
    <>
      <main className={styles.homeMain}>
        <div className={styles.skewContainer}>
          <Image
            src={"/images/hero-banner.webp"}
            alt="Hero Banner"
            objectFit={"cover"}
            fill={true}
          />
        </div>
        <section className={styles.mainTextContainer}>
          <h1>Lucid Yatra</h1>
          <p>Go better</p>
        </section>
      </main>
    </>
  );
}
