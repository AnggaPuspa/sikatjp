// ===== MESSAGE TYPES =====
export type MessageSender = "bot" | "user";

export interface Message {
  id: string;
  sender: MessageSender;
  text: string;
  timestamp?: Date;
}

// ===== FORM TYPES =====
export interface FormData {
  name: string;
  phone: string;
  focus: "pinjol" | "judol" | "mental";
}

export type WizardStep = 1 | 2 | 3;
export type AppStep = "form" | "chat";

// ===== FINANCIAL TYPES =====
export interface DebtCalculation {
  totalDebt: number;
  monthlyInterest: number;
  monthlyPayment: number;
  monthsToPayoff: number;
  totalInterestPaid: number;
}

// ===== SIMULATION TYPES =====
export interface JudolSimulation {
  initialDeposit: number;
  sessionDuration: number;
  estimatedLoss: number;
  winProbability: number;
  finalBalance: number;
}

// ===== USER PROFILE TYPES =====
export interface UserFinancialProfile {
  name: string;
  phone: string;
  focus: "pinjol" | "judol" | "mental";
  totalDebt?: number;
  monthlyIncome?: number;
  monthlyExpenses?: number;
}
