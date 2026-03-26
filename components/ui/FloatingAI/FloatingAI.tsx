"use client";
import { useState, useRef, useEffect } from "react";
import MarkdownMessage from "@/components/ui/MarkdownMessage/MarkdownMessage";
import { FLOATING_AI_SYSTEM_PROMPT } from "@/lib/constants/floatingAIPrompt";
import styles from "./FloatingAI.module.css";

// ===== TYPES =====
interface Message {
  role: "user" | "ai";
  text: string;
}
// ===== DATA =====
const QUICK_ACTIONS = [
  {
    label: "📊 Tanya Data Judol",
    prompt: "Berikan saya data terbaru tentang judi online di Indonesia",
  },
  {
    label: "🚨 Lapor Kena Judol",
    prompt:
      "Saya atau keluarga saya terjerat judi online, bagaimana cara melapor?",
  },
  {
    label: "💰 Konsultasi Hutang",
    prompt: "Saya punya hutang pinjol, bagaimana strategi melunasinya?",
  },
  { label: "📞 Bantuan Darurat", prompt: "Saya butuh bantuan darurat segera" },
];
export default function FloatingAI() {
  // ===== STATE =====
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showGreeting, setShowGreeting] = useState(false);
  const [greetingIndex, setGreetingIndex] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  // ===== GREETINGS =====
  const GREETINGS = [
    "👋 Hai! Ada yang bisa dibantu?",
    "🔍 Cek data judol terbaru di sini",
    "💬 Tanya apa saja tentang pinjol & judol",
    "🚨 Butuh bantuan darurat? Klik di sini",
  ];
  // ===== HANDLERS =====
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);
  useEffect(() => {
    const showTimer = setTimeout(() => {
      if (!isOpen) setShowGreeting(true);
    }, 1500);
    const cycleInterval = setInterval(() => {
      setGreetingIndex((prev) => (prev + 1) % 4);
    }, 6000);
    return () => {
      clearTimeout(showTimer);
      clearInterval(cycleInterval);
    };
  }, [isOpen]);
  // ===== SEND =====
  const handleSend = async (text: string) => {
    if (!text.trim()) return;
    const userMessage: Message = { role: "user", text: text.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [
            { role: "system", content: FLOATING_AI_SYSTEM_PROMPT },
            ...messages.map((m) => ({
              role: m.role === "user" ? "user" : "assistant",
              content: m.text,
            })),
            { role: "user", content: text.trim() },
          ],
          userName: "Pengunjung SIKAT JP",
          userFocus: "Informasi Umum",
          useCustomSystemPrompt: true,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setMessages((prev) => [...prev, { role: "ai", text: data.message }]);
      } else {
        setMessages((prev) => [
          ...prev,
          {
            role: "ai",
            text: "🤖 Maaf, sistem AI sedang mengalami gangguan. Silakan coba lagi dalam beberapa saat atau gunakan quick actions di atas.",
          },
        ]);
      }
    } catch (error) {
      console.error("FloatingAI API Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: "🤖 Koneksi ke sistem AI terputus. Silakan coba lagi atau kunjungi halaman terkait di website kami.",
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };
  // ===== QUICK ACTION =====
  const handleQuickAction = (prompt: string) => {
    handleSend(prompt);
  };
  // ===== KEYDOWN =====
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend(input);
    }
  };
  // ===== RENDER =====
  return (
    <>
      {isOpen && (
        <div className={styles.backdrop} onClick={() => setIsOpen(false)} />
      )}
      <div className={`${styles.panel} ${isOpen ? styles.panelOpen : ""}`}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <div className={styles.aiAvatar}>
              <span>✦</span>
            </div>
            <div>
              <div className={styles.headerTitle}>SIKAT AI</div>
              <div className={styles.headerStatus}>
                <span className={styles.onlineDot} />
                Online
              </div>
            </div>
          </div>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            ✕
          </button>
        </div>
        <div className={styles.messagesArea}>
          {messages.length === 0 && (
            <div className={styles.welcome}>
              <div className={styles.welcomeIcon}>✦</div>
              <h3 className={styles.welcomeTitle}>Halo! Saya SIKAT AI</h3>
              <p className={styles.welcomeDesc}>
                Asisten digital untuk membantu Anda menavigasi masalah judi
                online & pinjol ilegal.
              </p>
              <div className={styles.quickActions}>
                {QUICK_ACTIONS.map((action, i) => (
                  <button
                    key={i}
                    className={styles.quickBtn}
                    onClick={() => handleQuickAction(action.prompt)}
                  >
                    {action.label}
                  </button>
                ))}
              </div>
            </div>
          )}
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`${styles.message} ${
                msg.role === "user" ? styles.userMsg : styles.aiMsg
              }`}
            >
              {msg.role === "ai" && <div className={styles.msgAvatar}>✦</div>}
              <div className={styles.msgBubble}>
                <MarkdownMessage content={msg.text} />
              </div>
            </div>
          ))}
          {isTyping && (
            <div className={`${styles.message} ${styles.aiMsg}`}>
              <div className={styles.msgAvatar}>✦</div>
              <div className={styles.msgBubble}>
                <div className={styles.typingDots}>
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        <div className={styles.inputArea}>
          {messages.length > 0 && (
            <div className={styles.quickActionsInline}>
              {QUICK_ACTIONS.map((action, i) => (
                <button
                  key={i}
                  className={styles.quickBtnSmall}
                  onClick={() => handleQuickAction(action.prompt)}
                >
                  {action.label}
                </button>
              ))}
            </div>
          )}
          <div className={styles.inputRow}>
            <input
              ref={inputRef}
              type="text"
              className={styles.textInput}
              placeholder="Ketik pertanyaan..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button
              className={styles.sendBtn}
              onClick={() => handleSend(input)}
              disabled={!input.trim()}
            >
              ↑
            </button>
          </div>
        </div>
      </div>
      {showGreeting && !isOpen && (
        <div className={styles.greetingBubble}>
          <span>{GREETINGS[greetingIndex]}</span>
          <button
            className={styles.greetingClose}
            onClick={(e) => {
              e.stopPropagation();
              setShowGreeting(false);
            }}
          >
            ✕
          </button>
        </div>
      )}
      <button
        className={`${styles.fab} ${isOpen ? styles.fabHidden : ""}`}
        onClick={() => {
          setIsOpen(true);
          setShowGreeting(false);
        }}
        aria-label="Buka SIKAT AI Assistant"
      >
        <span className={styles.fabIcon}>
          <i className="fa-solid fa-robot" />
        </span>
        <span className={styles.fabPulse} />
      </button>
    </>
  );
}
