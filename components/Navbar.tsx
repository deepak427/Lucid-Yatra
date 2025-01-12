import Link from "next/link";
import styles from "./Navbar.module.css";
import React from "react";

const Navbar = () => {
  return (
    <header className={styles.main_nav}>
      <nav className={styles.nav_container}>
        <h2>LuYa</h2>
        <div className={styles.buttons_container}>
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLScKVwjL1riqMm6wWXtsLQj77rLQWJZZwuSscssuJBru5SBy1w/viewform?usp=header"
            className={`${styles.nav_btn} ${styles.nav_btn_book}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Book your travel now via Google Forms"
          >
            Book Travel Now
          </Link>
          <Link
            href="/explore"
            className={`${styles.nav_btn} ${styles.nav_btn_test}`}
          >
            Explore Us
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
