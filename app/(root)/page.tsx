"use client";

import styles from "./Home.module.css";
import Image from "next/image";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();
  const thankyou = searchParams.get("thankyou");

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
        {thankyou === "true" && (
          <div className={styles.thankYouMessage}>
            🎉 Thank you for your pre-order!
          </div>
        )}
        <section className={styles.mainTextContainer}>
          <h1>Lucid Yatra</h1>
          <p>Go better</p>
        </section>
      </main>
    </>
  );
}
