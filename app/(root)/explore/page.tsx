import { VideoComponent } from "@/components/VideoComponent";
import React from "react";
import styles from "./Explore.module.css";
import { Suspense } from "react";

const Explore = () => {
  return (
    <main className={styles.container}>
      <section className={styles.videoContainer}>
        <Suspense fallback={<p className={styles.loading}>Loading video...</p>}>
          <div className={styles.videoWrapper}>
            <VideoComponent fileName="Initial Package - Trim-Psb0eSlpmWh2MGmew3kWiOXkcCNKf4.mp4" />
          </div>
        </Suspense>
      </section>
      <img
          src={"/images/chandrashila-top-view.webp"}
          className={styles.image}
        />
    </main>
  );
};

export default Explore;
