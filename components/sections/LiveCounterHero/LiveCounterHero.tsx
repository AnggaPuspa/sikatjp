"use client";
import { useState, useEffect } from "react";
import styles from "./LiveCounterHero.module.css";
export default function LiveCounterHero() {
  // ===== STATE =====
  const BASELINE_AMOUNT = 327452109280145;
  const [currentAmount, setCurrentAmount] = useState(BASELINE_AMOUNT);
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
    const interval = setInterval(() => {
      const increment =
        Math.floor(Math.random() * (1500000 - 100000 + 1)) + 100000;
      setCurrentAmount((prev) => prev + increment);
    }, 30);
    return () => clearInterval(interval);
  }, []);
  // ===== RENDER =====
  const formattedAmount = isMounted
    ? currentAmount.toLocaleString("id-ID")
    : BASELINE_AMOUNT.toLocaleString("id-ID");
  return (
    <section id="hero" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.badgeWrapper}>
          <div className={styles.badge}>
            <span className={styles.redDot}></span>
            <span>LIVE: ESTIMASI KERUGIAN NASIONAL 2024</span>
          </div>
        </div>
        <div className={styles.counterWrapper}>
          <span className={styles.currency}>Rp</span>
          <h1 className={styles.mainNumber}>{formattedAmount}</h1>
        </div>
        <p className={styles.subtitle}>
          Estimasi rupiah yang mengalir ke sindikat judi internasional.{" "}
          <br className="hidden sm:block" />
          Angka ini terus membesar setiap detiknya.
        </p>
      </div>
    </section>
  );
}
