"use client";

import { useState } from "react";
import styles from "@/components/sections/OpenData/OpenData.module.css";
import OpenDataHero from "@/components/sections/OpenData/Hero/Hero";
import OpenDataStats from "@/components/sections/OpenData/Stats/Stats";
import OpenDataArchive from "@/components/sections/OpenData/Archive/Archive";
import OpenDataModal from "@/components/sections/OpenData/Modal/Modal";

export default function OpenDataPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className={styles.section}>
      <div className={styles.container}>
        <OpenDataHero />
        <OpenDataStats />
        <OpenDataArchive onDownloadClick={() => setIsModalOpen(true)} />
      </div>

      {isModalOpen && (
        <OpenDataModal onClose={() => setIsModalOpen(false)} />
      )}
    </main>
  );
}
