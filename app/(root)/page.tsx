"use client";

import styles from "./Home.module.css";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection"

export default function Home() {
  const searchParams = useSearchParams();
  const thankyou = searchParams.get("thankyou");

  return (
    <>
      <main className={styles.homeMain}>
        <div className={styles.heroSection}>
          <Image
            src="/images/hero-banner.webp"
            alt="Hero Banner"
            fill
            priority
            className={styles.heroImage}
          />
          <div className={styles.overlay}></div>
          <div className={styles.mainTextContainer}>
            <h1>Kshetra</h1>
            <p>Start your spiritual journey here</p>
          </div>
        </div>

        {thankyou === "true" && (
          <div className={styles.thankYouMessage}>
            🎉 Thank you for your pre-order!
          </div>
        )}

        <AboutSection />
        <ContactSection />
      </main>
    </>
  );
}
