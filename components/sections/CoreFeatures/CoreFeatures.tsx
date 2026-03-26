"use client";
import { useState, useEffect, useRef } from "react";
import styles from "./CoreFeatures.module.css";
const formatRp = (n: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(Math.abs(n));
export default function CoreFeatures() {
  // ===== STATE =====
  const [activeTab, setActiveTab] = useState<"judol" | "pinjol">("judol");
  const [deposit, setDeposit] = useState("");
  const [durasi, setDurasi] = useState("");
  const [simRunning, setSimRunning] = useState(false);
  const [simDone, setSimDone] = useState(false);
  const [saldoHistory, setSaldoHistory] = useState<number[]>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [utang, setUtang] = useState("");
  const [bunga, setBunga] = useState("");
  const [sisaGaji, setSisaGaji] = useState("");
  const [bulanLunas, setBulanLunas] = useState<number | null>(null);
  const [errorUtang, setErrorUtang] = useState(false);

  // ===== FORMAT INPUT =====
  const formatInputNumber = (value: string): string => {
    const numbers = value.replace(/\D/g, "");
    if (!numbers) return "";
    return new Intl.NumberFormat("id-ID").format(Number(numbers));
  };

  const parseInputNumber = (value: string): number => {
    return Number(value.replace(/\D/g, ""));
  };

  const handleDepositChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatInputNumber(e.target.value);
    setDeposit(formatted);
  };

  const handleUtangChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatInputNumber(e.target.value);
    setUtang(formatted);
  };

  const handleSisaGajiChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatInputNumber(e.target.value);
    setSisaGaji(formatted);
  };
  // ===== JUDOL SIMULATION =====
  const buildSimulation = (
    totalDeposit: number,
    totalSesi: number,
  ): number[] => {
    const WIN_RATE = 0.47;
    const BET_FRACTION = 0.1;
    const WIN_PAYOUT = 1.8;
    const history: number[] = [totalDeposit];
    let saldo = totalDeposit;
    const betPerSesi = totalDeposit * BET_FRACTION;
    for (let i = 0; i < totalSesi; i++) {
      if (saldo <= 0) break;
      const bet = Math.min(betPerSesi, saldo);
      if (Math.random() < WIN_RATE) {
        saldo = saldo + bet * (WIN_PAYOUT - 1);
      } else {
        saldo = saldo - bet;
      }
      saldo = Math.max(0, saldo);
      history.push(saldo);
    }
    return history;
  };
  // ===== JUDOL HANDLERS =====
  const startSimulasi = () => {
    const dep = parseInputNumber(deposit);
    const dur = Number(durasi);
    if (!dep || dep <= 0 || !dur || dur <= 0) return;
    const steps = buildSimulation(dep, Math.min(dur, 200));
    setSaldoHistory(steps);
    setCurrentStep(0);
    setSimDone(false);
    setSimRunning(true);
  };
  useEffect(() => {
    if (!simRunning || saldoHistory.length === 0) return;
    intervalRef.current = setInterval(() => {
      setCurrentStep((prev) => {
        const next = prev + 1;
        if (next >= saldoHistory.length) {
          clearInterval(intervalRef.current!);
          setSimRunning(false);
          setSimDone(true);
          return prev;
        }
        return next;
      });
    }, 60);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [simRunning, saldoHistory]);
  // ===== PINJOL HANDLERS =====
  const resetJudol = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setSimRunning(false);
    setSimDone(false);
    setSaldoHistory([]);
    setCurrentStep(0);
    setDeposit("");
    setDurasi("");
  };
  // ===== KALKULASI =====
  const handleHitungPinjol = () => {
    const u = parseInputNumber(utang);
    const b = Number(bunga);
    const g = parseInputNumber(sisaGaji);
    if (!u || !b || !g) return;

    const bungaDesimal = b / 100;
    const bungaNominal = u * bungaDesimal;

    if (g <= bungaNominal) {
      setErrorUtang(true);
      setBulanLunas(null);
      return;
    }

    setErrorUtang(false);
    let currentUtang = u;
    let months = 0;
    let totalBungaBayar = 0;

    while (currentUtang > 0 && months < 1200) {
      const bungaBulanIni = currentUtang * bungaDesimal;
      totalBungaBayar += bungaBulanIni;
      
      const sisaBayarPokok = g - bungaBulanIni;
      currentUtang -= sisaBayarPokok;
      months++;
    }

    setBulanLunas(months);
  };
  // ===== DERIVED VALUES =====
  const dep = parseInputNumber(deposit);
  const saldoSekarang = saldoHistory[currentStep] ?? (dep > 0 ? dep : 0);
  const kerugian = Math.max(0, dep - saldoSekarang);
  const persenSisa =
    dep > 0 ? Math.min(100, Math.max(0, (saldoSekarang / dep) * 100)) : 100;
  const UMR_HARIAN = 150715;
  const hariKerjaHangus =
    kerugian > 0 ? (kerugian / UMR_HARIAN).toFixed(1) : null;
  const getBisaBeli = (nominal: number): string[] => {
    const items: string[] = [];
    if (nominal >= 15000)
      items.push(`${Math.floor(nominal / 15000)} porsi makan warteg`);
    else if (nominal >= 5000)
      items.push(`${Math.floor(nominal / 5000)} gorengan + es teh`);
    if (nominal >= 50000)
      items.push(`${Math.floor(nominal / 50000)} bulan BPJS Kesehatan kelas 3`);
    if (nominal >= 25000)
      items.push(`${Math.floor(nominal / 25000)} paket data 3GB`);
    if (nominal >= 80000)
      items.push(
        `${Math.floor(nominal / 10200).toFixed(0)} liter bensin Pertalite`,
      );
    if (nominal >= 150000)
      items.push(`${Math.floor(nominal / 150000)} kursus online bersertifikat`);
    if (nominal >= 500000)
      items.push(`${Math.floor(nominal / 500000)} bulan tabungan darurat`);
    return items.slice(0, 3);
  };
  const bisaBeli = kerugian > 0 ? getBisaBeli(kerugian) : [];
  const totalBunga =
    bulanLunas !== null
      ? (parseInputNumber(sisaGaji) * bulanLunas) - parseInputNumber(utang)
      : 0;
  const totalBayar = bulanLunas !== null ? parseInputNumber(sisaGaji) * bulanLunas : 0;
  // ===== RENDER =====
  return (
    <section className={styles.section} id="fitur">
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badgeSolid}>Fitur Interaktif</div>
          <h2 className={styles.title}>Buktikan Sendiri</h2>
          <p className={styles.subtitle}>
            Judi online dan pinjol bukan soal nasib buruk. Ada hitungan pasti di
            baliknya yang selalu menguntungkan mereka, bukan kamu. Dua alat di
            bawah ini akan tunjukkan langsung.
          </p>
        </div>
        <div className={styles.tabsContainer}>
          <button
            className={`${styles.tabBtn} ${activeTab === "judol" ? styles.tabActive : ""}`}
            onClick={() => setActiveTab("judol")}
          >
            Realita Judol
          </button>
          <button
            className={`${styles.tabBtn} ${activeTab === "pinjol" ? styles.tabActive : ""}`}
            onClick={() => setActiveTab("pinjol")}
          >
            Simulasi Pinjol
          </button>
        </div>
        <div className={styles.cardContainer}>
          {activeTab === "judol" ? (
            <div className={styles.fullCard}>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>
                  Kalkulator Realita Judol — The House Always Wins
                </h3>
                <p className={styles.cardDesc}>
                  Masukkan berapa uang yang mau kamu depositkan dan berapa sesi
                  main yang kamu rencanakan. Sistem akan simulasikan ke mana
                  uang itu pergi.
                </p>
              </div>
              <div className={styles.aviatorGrid}>
                <div className={styles.aviatorLeft}>
                  {(simRunning || simDone) && (
                    <div className={styles.progressSection}>
                      <div className={styles.progressLabelRow}>
                        <span className={styles.progressLabelText}>
                          Saldo Tersisa
                        </span>
                        <span className={styles.progressLabelValue}>
                          {dep > 0 ? formatRp(saldoSekarang) : "—"}
                        </span>
                      </div>
                      <div className={styles.progressBarTrack}>
                        <div
                          className={`${styles.progressBarFill} ${simDone && persenSisa < 10 ? styles.progressBarDanger : ""}`}
                          style={{ width: `${persenSisa}%` }}
                        />
                      </div>
                      <div className={styles.progressSubtext}>
                        {dep > 0 && (
                          <span>
                            {persenSisa.toFixed(0)}% tersisa dari {formatRp(dep)}
                          </span>
                        )}
                      </div>
                    </div>
                  )}
                  <div className={styles.inputStack}>
                    <div className={styles.formItem}>
                      <label className={styles.label}>
                        Nominal Deposit (Rp)
                      </label>
                      <input
                        type="text"
                        className={styles.inputRegular}
                        placeholder="500.000"
                        value={deposit}
                        onChange={handleDepositChange}
                        disabled={simRunning}
                      />
                    </div>
                    <div className={styles.formItem}>
                      <label className={styles.label}>
                        Berapa Sesi Kamu Main
                      </label>
                      <input
                        type="number"
                        className={styles.inputRegular}
                        placeholder="50"
                        value={durasi}
                        onChange={(e) => setDurasi(e.target.value)}
                        disabled={simRunning}
                      />
                    </div>
                  </div>
                  <div className={styles.btnRow}>
                    <button
                      className={styles.ctaButton}
                      onClick={startSimulasi}
                      disabled={simRunning || !deposit || !durasi}
                    >
                      {simRunning ? "Simulasi Berjalan..." : "Lihat Hasilnya"}
                    </button>
                    <button
                      className={styles.ctaButtonAlt}
                      onClick={resetJudol}
                    >
                      Reset
                    </button>
                  </div>
                  {/* Edukasi pindah fokus ke sebelah kanan (Intinya Simpel), box dikurangi agar clean */}
                </div>
                <div className={styles.aviatorRight}>
                  {(simRunning || simDone) && (
                    <div className={styles.statRow}>
                      <div className={styles.statCard}>
                        <div className={styles.statLabel}>Modal Awal</div>
                        <div className={styles.statValue}>
                          {dep > 0 ? formatRp(dep) : "—"}
                        </div>
                      </div>
                      <div className={styles.statCard}>
                        <div className={styles.statLabel}>Uang Hangus</div>
                        <div
                          className={`${styles.statValue} ${kerugian > 0 ? styles.statNegative : ""}`}
                        >
                          {kerugian > 0 ? formatRp(kerugian) : "—"}
                        </div>
                        {hariKerjaHangus !== null && (
                          <div className={styles.statMeta}>
                            ≈ {hariKerjaHangus} hari kerja sia-sia
                            <br />
                            <span
                              style={{ fontSize: "0.72rem", color: "#d1d5db" }}
                            >
                              (Sumber: Kompas.id — Rata-rata UMP Nasional 2025:
                              Rp3.315.728/bulan)
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                  {bisaBeli.length > 0 && (
                    <div className={styles.bisaBeliBox}>
                      <div className={styles.bisaBeliLabel}>
                        Uang itu seharusnya bisa buat:
                      </div>
                      <ul className={styles.bisaBeliList}>
                        {bisaBeli.map((item, i) => (
                          <li key={i} className={styles.bisaBeliItem}>
                            <span className={styles.bisaBeliIcon}>✔</span>{" "}
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {simDone && (
                    <div className={styles.verdictBlock}>
                      <div className={styles.verdictLabel}>
                        {persenSisa < 10
                          ? "Uangmu Hampir Habis"
                          : "Simulasi Selesai"}
                      </div>
                      <p className={styles.verdictText}>
                        {persenSisa < 10
                          ? `Dari ${formatRp(dep)} yang kamu depositkan, hanya tersisa ${formatRp(saldoSekarang)}. Ini bukan sial — ini matematika. Setiap sesi, bandar sudah ambil jatahnya.`
                          : `Kamu masih ada sisa di simulasi ini. Tapi mainkan lebih lama, dan uang itu pasti habis. Bandar tidak pernah kalah dalam jangka panjang.`}
                      </p>
                    </div>
                  )}
                  {!simDone && (
                    <div className={styles.verdictBlock}>
                      <div className={styles.verdictLabel}>Intinya Simpel</div>
                      <p className={styles.verdictText}>
                        Dari setiap Rp100.000 yang kamu taruhkan, Rp3.000
                        langsung masuk kantong bandar — tidak peduli strategi
                        apapun. Mainkan 100 sesi dan uangmu pasti berkurang.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className={styles.fullCard}>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>
                  Simulasi Efek Bola Salju Pinjol
                </h3>
                <p className={styles.cardDesc}>
                  Hitung kapan hutangmu lunas dan berapa total yang harus kamu
                  bayar. OJK menetapkan bunga pinjol legal maks 0.4%/hari atau
                  ~12%/bulan. Pinjol ilegal bisa 20-30%/bulan.
                </p>
              </div>
              <div className={styles.formRow}>
                <div className={styles.formItem}>
                  <label className={styles.label}>
                    Total Hutang Pokok (Rp)
                  </label>
                  <input
                    type="text"
                    className={styles.inputRegular}
                    placeholder="30.000.000"
                    value={utang}
                    onChange={handleUtangChange}
                  />
                </div>
                <div className={styles.formItem}>
                  <label className={styles.label}>Bunga Bulanan (%)</label>
                  <input
                    type="number"
                    className={styles.inputRegular}
                    placeholder="3"
                    value={bunga}
                    onChange={(e) => setBunga(e.target.value)}
                  />
                </div>
                <div className={styles.formItem}>
                  <label className={styles.label}>
                    Kemampuan Cicil per Bulan (Rp)
                  </label>
                  <input
                    type="text"
                    className={styles.inputRegular}
                    placeholder="2.000.000"
                    value={sisaGaji}
                    onChange={handleSisaGajiChange}
                  />
                </div>
              </div>
              <div className={styles.btnRow}>
                <button
                  className={styles.ctaButton}
                  onClick={handleHitungPinjol}
                >
                  Hitung Pelunasan
                </button>
              </div>
              {errorUtang && (
                <div className={styles.alert}>
                  Cicilan kamu lebih kecil dari bunga per bulan. Hutangmu tidak
                  akan pernah lunas — terus bertambah selamanya.
                </div>
              )}
              {bulanLunas !== null && (
                <div className={styles.resultsGrid}>
                  <div className={styles.resultCard}>
                    <div className={styles.resultLabel}>Lunas Dalam</div>
                    <div className={styles.resultValue}>{bulanLunas} Bulan</div>
                    <div className={styles.resultSub}>
                      ≈ {(bulanLunas / 12).toFixed(1)} tahun hidup terbebani
                    </div>
                  </div>
                  <div className={styles.resultCard}>
                    <div className={styles.resultLabel}>
                      Total Bunga yang Kamu Bayar
                    </div>
                    <div className={styles.resultValue}>
                      {formatRp(totalBunga)}
                    </div>
                    <div className={styles.resultSub}>
                      Uang ini 100% hangus — bukan bayar hutang pokok
                    </div>
                  </div>
                  <div className={styles.resultCard}>
                    <div className={styles.resultLabel}>Total Uang Keluar</div>
                    <div className={styles.resultValue}>
                      {formatRp(totalBayar)}
                    </div>
                    <div className={styles.resultSub}>
                      Padahal hutang aslimu hanya {formatRp(parseInputNumber(utang))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
