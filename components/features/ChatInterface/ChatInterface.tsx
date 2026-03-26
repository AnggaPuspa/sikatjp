"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import MarkdownMessage from "@/components/ui/MarkdownMessage/MarkdownMessage";
import styles from "./ChatInterface.module.css";
type Message = {
  id: string;
  sender: "bot" | "user";
  text: string;
};
export default function ChatInterface() {
  // ===== STATE =====
  const [step, setStep] = useState<"form" | "chat">("form");
  const [wizardStep, setWizardStep] = useState(1);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", focus: "" });
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  // ===== HANDLERS =====
  const handleNextStep = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (wizardStep === 1 && formData.name.trim()) setWizardStep(2);
    else if (wizardStep === 2 && formData.phone.trim()) setWizardStep(3);
    else if (wizardStep === 3 && formData.focus) {
      setStep("chat");
    }
  };
  useEffect(() => {
    if (step === "chat" && messages.length === 0) {
      setMessages([
        {
          id: "1",
          sender: "bot",
          text: `Protokol Mitigasi SIKAT JP Aktif.\n\nSelamat datang, Saudara ${formData.name}.\n\nData identitas Anda (${formData.phone}) telah dikunci dalam sistem kami (100% Aman & Terenkripsi). Saat ini, tim profesional SIKAT JP (Pakar Hukum & Psikolog Klinis) sedang memproses formulir Anda dan akan menghubungi Anda secepatnya untuk memberikan pertolongan nyata.\n\nSembari menunggu tim kami menghubungi Anda, silakan gunakan ruang aman ini untuk meluapkan curahan hati, atau bercerita tentang krisis Anda bersama Saya (AI pendamping yang dilatih khusus dengan DNA logika SIKAT JP).\n\nFokus Anda: [ ${formData.focus.toUpperCase()} ]\n\nSilakan mulai mengetikkan apa saja yang membebani Anda di bawah ini.`,
        },
      ]);
    }
  }, [step, formData, messages.length]);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    if (step === "chat") scrollToBottom();
  }, [messages, isTyping, step]);
  // ===== CHAT SUBMIT =====
  const handleChatSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputValue.trim() || isTyping) return;
    const newUserMsg: Message = {
      id: Date.now().toString(),
      sender: "user",
      text: inputValue,
    };
    setMessages((prev) => [...prev, newUserMsg]);
    const userMessage = inputValue;
    setInputValue("");
    setIsTyping(true);
    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [
            ...messages.map((m) => ({
              role: m.sender === "user" ? "user" : "assistant",
              content: m.text,
            })),
            { role: "user", content: userMessage },
          ],
          userName: formData.name,
          userFocus: formData.focus,
        }),
      });
      const data = await response.json();
      if (data.success) {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now().toString() + "bot",
            sender: "bot",
            text: data.message,
          },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now().toString() + "bot",
            sender: "bot",
            text: `Maaf ${formData.name}, sistem AI sedang mengalami gangguan teknis. Tim profesional kami tetap akan menghubungi Anda melalui WhatsApp yang telah terdaftar.\n\nSilakan coba lagi dalam beberapa saat.`,
          },
        ]);
      }
    } catch (error) {
      console.error("Chat API Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now().toString() + "bot",
          sender: "bot",
          text: `Koneksi ke sistem AI terputus. Namun data Anda tetap aman, ${formData.name}. Tim kami akan segera menghubungi Anda.`,
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };
  // ===== RENDER =====
  return (
    <div className={styles.fullscreenApp}>
      <div className={styles.appContainer}>
        {step === "form" && (
          <div className={styles.formOverlay}>
            <div className={styles.formCard}>
              <form onSubmit={handleNextStep} className={styles.wizardForm}>
                {wizardStep === 1 && (
                  <div className={styles.wizardStep}>
                    <span className={styles.stepIndicator}>Tahap 1 dari 3</span>
                    <h2 className={styles.wizardTitle}>
                      Mari Petakan Jalan Keluar Anda.
                    </h2>
                    <p className={styles.wizardDesc}>
                      Untuk perlindungan hukum dan advokasi profesional oleh tim
                      SIKAT JP, pastikan Anda menggunakan identitas asli.
                    </p>
                    <div className={styles.inputGroup}>
                      <label>Nama Lengkap (Sesuai Identitas Asli)</label>
                      <input
                        type="text"
                        className={styles.wizardInput}
                        placeholder="Ketik nama lengkap Anda..."
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        autoFocus
                        required
                      />
                    </div>
                    <div className={styles.wizardActions}>
                      <Link
                        href="/bantuan-darurat"
                        className={styles.cancelBtn}
                      >
                        Batalkan
                      </Link>
                      <button type="submit" className={styles.nextBtn}>
                        Lanjut →
                      </button>
                    </div>
                  </div>
                )}
                {wizardStep === 2 && (
                  <div className={styles.wizardStep}>
                    <span className={styles.stepIndicator}>Tahap 2 dari 3</span>
                    <h2 className={styles.wizardTitle}>
                      Kontak Pemulihan Anonim.
                    </h2>
                    <p className={styles.wizardDesc}>
                      Silakan masukkan nomor WhatsApp Anda (100% Enkripsi Aman).
                      Tim profesional kami akan mengontak Anda untuk memberikan
                      solusi nyata.
                    </p>
                    <div className={styles.inputGroup}>
                      <label>Nomor WhatsApp Aktif</label>
                      <input
                        type="tel"
                        className={styles.wizardInput}
                        placeholder="Contoh: 0812-XXXX-XXXX"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        autoFocus
                        required
                      />
                    </div>
                    <div className={styles.wizardActions}>
                      <button
                        type="button"
                        className={styles.cancelBtn}
                        onClick={() => setWizardStep(1)}
                      >
                        ← Kembali
                      </button>
                      <button type="submit" className={styles.nextBtn}>
                        Lanjut →
                      </button>
                    </div>
                  </div>
                )}
                {wizardStep === 3 && (
                  <div className={styles.wizardStep}>
                    <span className={styles.stepIndicator}>Tahap 3 dari 3</span>
                    <h2 className={styles.wizardTitle}>Fokus Mitigasi Anda.</h2>
                    <p className={styles.wizardDesc}>
                      Sembari menunggu tim kami menghubungi Anda, sistem AI
                      mandiri kami siap menemani dan menjadi tempat Anda
                      meluapkan emosi dengan aman.
                    </p>
                    <div className={styles.cardOptions}>
                      <button
                        type="button"
                        className={`${styles.optionCard} ${formData.focus === "Utang Pinjol Ilegal" ? styles.selectedCard : ""}`}
                        onClick={() =>
                          setFormData({
                            ...formData,
                            focus: "Utang Pinjol Ilegal",
                          })
                        }
                      >
                        Terjerat Rantai Utang Pinjol Ilegal
                      </button>
                      <button
                        type="button"
                        className={`${styles.optionCard} ${formData.focus === "Kecanduan Algoritma Judol" ? styles.selectedCard : ""}`}
                        onClick={() =>
                          setFormData({
                            ...formData,
                            focus: "Kecanduan Algoritma Judol",
                          })
                        }
                      >
                        Terjebak Candu Algoritma Judi Online
                      </button>
                      <button
                        type="button"
                        className={`${styles.optionCard} ${formData.focus === "Krisis Mental Depresi Finansial" ? styles.selectedCard : ""}`}
                        onClick={() =>
                          setFormData({
                            ...formData,
                            focus: "Krisis Mental Depresi Finansial",
                          })
                        }
                      >
                        Krisis Mental Berat / Depresi Finansial
                      </button>
                    </div>
                    <div className={styles.wizardActions}>
                      <button
                        type="button"
                        className={styles.cancelBtn}
                        onClick={() => setWizardStep(2)}
                      >
                        ← Kembali
                      </button>
                      <button
                        type="submit"
                        className={styles.finalSubmitBtn}
                        disabled={!formData.focus}
                      >
                        Kunci Data Sesi AI →
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        )}
        {step === "chat" && (
          <>
            {isSidebarOpen && (
              <div
                className={styles.sidebarOverlay}
                onClick={() => setIsSidebarOpen(false)}
              />
            )}
            <aside
              className={`${styles.sidebar} ${isSidebarOpen ? styles.sidebarMobileOpen : ""}`}
            >
              <div className={styles.sidebarTop}>
                <div className={styles.sidebarTopNav}>
                  <Link href="/" className={styles.backBtn}>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="19" y1="12" x2="5" y2="12"></line>
                      <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>
                    Kembali ke Markas
                  </Link>
                  <button
                    className={styles.closeSidebarBtn}
                    onClick={() => setIsSidebarOpen(false)}
                    aria-label="Tutup Menu"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                </div>
                <button className={styles.newChatBtn}>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                  Sesi Logis Baru
                </button>
              </div>
              <div className={styles.historyList}>
                <p className={styles.historyTitle}>Riwayat Terenkripsi</p>
                <div
                  className={`${styles.historyItem} ${styles.activeHistory}`}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                  Sesi {formData.focus.split(" ")[0]}
                </div>
              </div>
              <div className={styles.sidebarBottom}>
                <div className={styles.userProfile}>
                  <div className={styles.userAvatar}>
                    {formData.name
                      ? formData.name.charAt(0).toUpperCase()
                      : "U"}
                  </div>
                  <span>{formData.name || "User SIKAT JP"}</span>
                </div>
              </div>
            </aside>
            <main className={styles.mainChat}>
              <div className={styles.chatHeader}>
                <div className={styles.headerLeft}>
                  <button
                    onClick={() => window.history.back()}
                    className={styles.mobileBackBtn}
                    aria-label="Kembali"
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="19" y1="12" x2="5" y2="12"></line>
                      <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>
                  </button>
                  <h2 className={styles.headerTitle}>Console AI</h2>
                </div>
                <button
                  className={styles.hamburgerBtn}
                  onClick={() => setIsSidebarOpen(true)}
                  aria-label="Buka Menu Riwayat"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </svg>
                </button>
              </div>
              <div className={styles.messagesView}>
                <div className={styles.messagesContainer}>
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`${styles.messageRow} ${msg.sender === "user" ? styles.rowUser : styles.rowBot}`}
                    >
                      <div className={styles.messageInner}>
                        <div
                          className={`${styles.avatar} ${msg.sender === "bot" ? styles.avatarBot : styles.avatarUser}`}
                        >
                          {msg.sender === "bot"
                            ? "S"
                            : formData.name
                              ? formData.name.charAt(0).toUpperCase()
                              : "U"}
                        </div>
                        <div className={styles.messageBubble}>
                          <MarkdownMessage content={msg.text} />
                        </div>
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className={`${styles.messageRow} ${styles.rowBot}`}>
                      <div className={styles.messageInner}>
                        <div className={`${styles.avatar} ${styles.avatarBot}`}>
                          S
                        </div>
                        <div
                          className={`${styles.messageBubble} ${styles.typingBubble}`}
                        >
                          <span className={styles.typingDot}></span>
                          <span className={styles.typingDot}></span>
                          <span className={styles.typingDot}></span>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} className={styles.scrollAnchor} />
                </div>
              </div>
              <div className={styles.inputArea}>
                <div className={styles.inputContainer}>
                  <form onSubmit={handleChatSubmit} className={styles.formBox}>
                    <input
                      type="text"
                      className={styles.textField}
                      placeholder="Ketik nominal pinjaman atau jabarkan krisis finansial Anda..."
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      disabled={isTyping}
                      autoComplete="off"
                    />
                    <button
                      type="submit"
                      className={`${styles.submitBtn} ${inputValue.trim() ? styles.activeBtn : ""}`}
                      disabled={!inputValue.trim() || isTyping}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                      </svg>
                    </button>
                  </form>
                  <div className={styles.disclaimer}>
                    SIKAT JP AI System dapat melakukan kesalahan asumsi
                    finansial. Verifikasi kalkulasi final dengan Konselor
                    Finansial riil melalui kontak tersimpan.
                  </div>
                </div>
              </div>
            </main>
          </>
        )}
      </div>
    </div>
  );
}
