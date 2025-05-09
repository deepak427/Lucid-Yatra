"use client"

import Link from "next/link";
import styles from "./Navbar.module.css";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className={styles.main_nav}>
      <nav className={styles.nav_container}>
        <h2>LuYa</h2>

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          &#9776;
        </button>

        <ul className={`${styles.navLinks} ${menuOpen ? styles.show : ""}`}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/explore">Explore</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li className={styles.nav_book_btn}>
            <Link href="/book">Book</Link>
          </li>
        </ul>

        <div className={styles.buttons_container}>
          <Link
            href="/book"
            className={`${styles.nav_btn} ${styles.nav_btn_test}`}
          >
            Book Travel Now
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
