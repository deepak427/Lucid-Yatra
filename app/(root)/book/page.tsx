"use client";

import { useState } from "react";
import styles from "./Book.module.css";
import { useRouter } from "next/navigation";

export default function Book() {
  const destination = "Manali";

  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    address: "",
  });

  const [selectedDestination, setSelectedDestination] = useState(destination);
  const [travelDate, setTravelDate] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          destination: selectedDestination,
          travelDate,
          ...formData,
        }),
      });

      if (res.ok) {
        router.push("/?thankyou=true");
      } else {
        console.log("Failed to submit booking.");
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error("Error submitting booking:", error);
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.container}>
      <div>
        <h2 className={styles.heading}>Book Your Travel Adventure</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label className={styles.label}>Destination:</label>
          <select
            className={styles.select}
            value={selectedDestination}
            onChange={(e) => setSelectedDestination(e.target.value)}
          >
            <option value="Manali">Manali</option>
            <option value="Goa">Goa</option>
            <option value="Shimla">Shimla</option>
            <option value="Jaipur">Jaipur</option>
          </select>

          <label className={styles.label}>Travel Date:</label>
          <input
            type="date"
            value={travelDate}
            onChange={(e) => setTravelDate(e.target.value)}
            required
            className={styles.input}
          />

          <input
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className={styles.input}
          />
          <input
            name="contact"
            placeholder="Contact Number (With country code)"
            value={formData.contact}
            onChange={handleChange}
            required
            className={styles.input}
          />
          <textarea
            name="address"
            placeholder="Pickup Address / Full Address"
            value={formData.address}
            onChange={handleChange}
            required
            className={styles.textarea}
            rows={4}
          />
          <button
            type="submit"
            className={styles.button}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Booking..." : "Book Now"}
          </button>
        </form>
      </div>
    </div>
  );
}
