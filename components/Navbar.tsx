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
            href="/booking"
            className={`${styles.nav_btn} ${styles.nav_btn_book}`}
          >
            Book Travel Now
          </Link>
          <Link href="/" className= {`${styles.nav_btn} ${styles.nav_btn_test}`}>
            Free Test Yatra
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
