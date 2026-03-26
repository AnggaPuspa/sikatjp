"use client";

import Image from "next/image";
import styles from "./Modal.module.css";

interface ModalProps {
  onClose: () => void;
}

const OpenDataModal = ({ onClose }: ModalProps) => {
    return (
        <div className={styles.modalOverlay} onClick={onClose}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalImageHeader}>
              <Image
                src="/coming-soon-data.png"
                alt="Database Under Construction"
                fill
                style={{ objectFit: "contain", padding: "1.5rem" }}
              />
            </div>
            <div className={styles.modalTextWrapper}>
              <h2 className={styles.modalTitle}>Akses Dibatasi</h2>
              <p className={styles.modalDesc}>
                Infrastruktur database sedang tahap compile internal. Akses publik akan segera dibuka.
              </p>
              <button className={styles.modalCloseBtn} onClick={onClose}>
                Saya Mengerti
              </button>
            </div>
          </div>
        </div>
    );
};

export default OpenDataModal;
