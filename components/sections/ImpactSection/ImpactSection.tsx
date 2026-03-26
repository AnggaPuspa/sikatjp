'use client';
import { useEffect, useRef, useState } from 'react';
import styles from './ImpactSection.module.css';

function useCountUp(target: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const steps = 60;
    const increment = target / steps;
    const stepDuration = duration / steps;
    let current = 0;
    let frame = 0;
    const timer = setInterval(() => {
      frame++;
      const progress = frame / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      current = Math.floor(target * eased);
      setCount(current);
      if (frame >= steps) {
        setCount(target);
        clearInterval(timer);
      }
    }, stepDuration);
    return () => clearInterval(timer);
  }, [started, target, duration]);

  return { count, ref };
}

function formatNumber(n: number): string {
  return new Intl.NumberFormat('id-ID').format(n);
}

export default function ImpactSection() {
  const bigNumber = useCountUp(8642109, 2200);
  const stat81 = useCountUp(81, 1400);
  const stat187 = useCountUp(187, 1600);

  return (
    <section className={styles.section} id="statistik">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badgeSolid}>STATUS DARURAT</div>
        </div>
        <div className={styles.statsRow}>
          <div className={styles.statCard} ref={stat81.ref}>
            <span className={styles.statNumber}>Rp {stat81.count}T</span>
            <p className={styles.statLabel}>
              Uang rakyat lenyap ke bandar luar negeri. Setiap. Tahun.
            </p>
          </div>
          <div className={styles.statCard} ref={stat187.ref}>
            <span className={styles.statNumber}>{stat187.count}%</span>
            <p className={styles.statLabel}>
              Lonjakan korban dalam dua tahun terakhir.
            </p>
          </div>
        </div>
        <div className={styles.statement} ref={bigNumber.ref}>
          <h2 className={styles.bigNumber}>{formatNumber(bigNumber.count)}</h2>
          <p className={styles.statementLabel}>
            Warga sudah kehilangan seluruh tabungan karena judi online.
          </p>
          <span className={styles.sourceTag}>
            Sumber: OJK &amp; PPATK, 2023–2025
          </span>
        </div>
      </div>
    </section>
  );
}
