// ===== PLATFORM =====
export const PLATFORM = {
  name: "SIKAT JP",
  fullName: "Sistem Informasi Krisis Algoritma Judi & Pinjol",
  tagline: "Uangmu Kendalimu, Bukan Sebaliknya",
  mission:
    "Memvalidasi realita depresi korban finansial dan menavigasi mereka keluar dari siklus pinjol dan judi online",
  framework: "INNOVATE (Validate → Navigate → Optimize)",
} as const;

// ===== EMERGENCY CONTACTS =====
export const EMERGENCY_CONTACTS = {
  suicidePrevention: {
    name: "Hotline Pencegahan Bunuh Diri",
    number: "119",
    description: "Layanan 24/7 untuk krisis mental",
  },
  ojk: {
    name: "Lapor OJK Darurat",
    number: "157",
    description: "Laporkan pinjol ilegal",
  },
  whatsapp: {
    name: "Tim SIKAT JP",
    number: "0812-XXXX-XXXX",
    description: "Konsultasi dengan tim profesional",
  },
} as const;

// ===== JUDOL STATS =====
export const JUDOL_STATS = {
  realWinRate: 0.001,
  houseEdge: 0.95,
  averageLossPerSession: 0.85,
  addictionRate: 0.73,
} as const;

// ===== PINJOL STATS =====
export const PINJOL_STATS = {
  averageInterestRate: 0.1,
  illegalInterestRate: 0.3,
  averageDebt: 30_000_000,
  averageIncome: 5_000_000,
} as const;

// ===== FOCUS OPTIONS =====
export const FOCUS_OPTIONS = [
  {
    id: "pinjol",
    label: "Terjerat Rantai Utang Pinjol Ilegal",
    description: "Hutang menumpuk dengan bunga mencekik",
  },
  {
    id: "judol",
    label: "Terjebak Candu Algoritma Judi Online",
    description: "Uang habis karena game slot/aviator",
  },
  {
    id: "mental",
    label: "Krisis Mental Depresi Finansial",
    description: "Tertekan berat karena masalah keuangan",
  },
] as const;

// ===== MESSAGES =====
export const MESSAGES = {
  panicButton:
    "Tidak ada hutang yang lebih berharga dari nyawamu. Jangan menyerah, mari cari jalan keluarnya bersama.",
  houseAlwaysWins:
    "The House Always Wins - Sistem judol dirancang untuk menguras uangmu. Matematika tidak pernah bohong.",
  debtSnowball:
    "Hutang bisa dilunasi dengan strategi yang tepat. Mari hitung roadmap pelunasanmu.",
  youAreNotAlone:
    "Jutaan orang Indonesia terjebak siklus yang sama. Kamu BUKAN sendirian.",
} as const;
