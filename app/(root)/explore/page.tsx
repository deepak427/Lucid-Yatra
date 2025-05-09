import React from "react";
import Image from "next/image";
import styles from "./Explore.module.css";

const images = [
  {
    src: "/images/chandrashila-top-view.webp",
    alt: "Chandrashila top view",
    caption: "Sunrise from Chandrashila — the coldest, yet warmest memory.",
  },
  {
    src: "/images/chandrashila-top-view.webp",
    alt: "Chandrashila",
    caption: "The peak moment where everything felt still.",
  },
  {
    src: "/images/chandrashila-top-view.webp",
    alt: "Top view",
    caption: "Those skies, those eyes, that silence.",
  },
  {
    src: "/images/chandrashila-top-view.webp",
    alt: "View",
    caption: "Hiked through snow to see this — totally worth it!",
  },
  {
    src: "/images/chandrashila-top-view.webp",
    alt: "Memory",
    caption: "Every step led to this stunning view.",
  },
  {
    src: "/images/chandrashila-top-view.webp",
    alt: "Snowy morning",
    caption: "That one time when everything aligned perfectly.",
  },
];

const tiltClasses = [
  styles.tiltLeft,
  styles.tiltRight,
  styles.tiltLeftSmall,
  styles.tiltRightSmall,
];

const Explore = () => {
  return (
    <main className={styles.container}>
      <section className={styles.gallery}>
        {images.map((img, index) => {
          const randomTilt =
            tiltClasses[Math.floor(Math.random() * tiltClasses.length)];
          return (
            <div className={`${styles.photoCard} ${randomTilt}`} key={index}>
              <div className={styles.imageWrapper}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  layout="responsive"
                  width={500}
                  height={350}
                  className={styles.image}
                  quality={75}
                  priority={index === 0}
                />
              </div>
              <p className={styles.caption}>{img.caption}</p>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default Explore;
