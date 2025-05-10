"use client";

import styles from "./ContactSection.module.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.gridContainer}>
        {/* Contact Section */}
        <div className={styles.section}>
          <h3>Contact</h3>
          <p>
            <FaMapMarkerAlt className={styles.icon} />
            Kaintura Plaza, Badrinath Rd, beside Lily Hotel, Tapovan, Rishikesh, Uttarakhand 249204
          </p>
          <p><FaPhoneAlt className={styles.icon} /> +91 731 097 5354, +91 789 564 0073</p>
          <p><FaEnvelope className={styles.icon} /> deepgi454@gmail.com</p>
        </div>

        {/* Chat With Us Section */}
        <div className={styles.section}>
          <h3>Chat With us on WhatsApp</h3>
          <p>We are happy to chat with you and clear your doubts.</p>
          <a
            href="https://wa.me/917310975354"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappButton}
          >
            <FaWhatsapp className={styles.icon} />
            WhatsApp Us
          </a>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p>© www.luex.shop, All Rights Reserved, 2024.</p>
        <p>
          Designed by{" "}
          <Link href="https://www.luex.shop" target="_blank">
            Tejpal Singh
          </Link>
        </p>
      </div>
    </footer>
  );
}
