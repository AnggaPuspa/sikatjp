import type { DebtCalculation, JudolSimulation } from "@/types/chat";
import { JUDOL_STATS } from "@/lib/constants/platform";

// ===== DEBT PAYOFF =====
export const calculateDebtPayoff = (
  totalDebt: number,
  monthlyInterestRate: number,
  monthlyPayment: number,
): DebtCalculation => {
  let remainingDebt = totalDebt;
  let monthsToPayoff = 0;
  let totalInterestPaid = 0;

  while (remainingDebt > 0 && monthsToPayoff < 360) {
    const interestThisMonth = remainingDebt * monthlyInterestRate;
    totalInterestPaid += interestThisMonth;

    const principalPayment = monthlyPayment - interestThisMonth;

    if (principalPayment <= 0) {
      return {
        totalDebt,
        monthlyInterest: monthlyInterestRate,
        monthlyPayment,
        monthsToPayoff: -1,
        totalInterestPaid: -1,
      };
    }

    remainingDebt -= principalPayment;
    monthsToPayoff++;
  }

  return {
    totalDebt,
    monthlyInterest: monthlyInterestRate,
    monthlyPayment,
    monthsToPayoff,
    totalInterestPaid,
  };
};

// ===== JUDOL SIMULATION =====
export const simulateJudol = (
  initialDeposit: number,
  sessionDuration: number,
): JudolSimulation => {
  const spinsPerMinute = 2;
  const totalSpins = sessionDuration * spinsPerMinute;
  const expectedLossPerSpin =
    (initialDeposit * JUDOL_STATS.houseEdge) / totalSpins;
  const estimatedLoss = initialDeposit * JUDOL_STATS.averageLossPerSession;
  const finalBalance = Math.max(0, initialDeposit - estimatedLoss);

  return {
    initialDeposit,
    sessionDuration,
    estimatedLoss,
    winProbability: JUDOL_STATS.realWinRate,
    finalBalance,
  };
};

// ===== MINIMUM PAYMENT =====
export const calculateMinimumPayment = (
  totalDebt: number,
  monthlyInterestRate: number,
): number => {
  const monthlyInterest = totalDebt * monthlyInterestRate;
  const minimumPayment = monthlyInterest * 1.5;
  return Math.ceil(minimumPayment / 100000) * 100000;
};

// ===== OPPORTUNITY COST =====
export const calculateOpportunityCost = (
  lostAmount: number,
  months: number,
  investmentReturn: number = 0.01,
): number => {
  const futureValue = lostAmount * Math.pow(1 + investmentReturn, months);
  return futureValue;
};

// ===== FORMAT RUPIAH =====
export const formatRupiah = (amount: number): string => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

// ===== DEBT TO INCOME =====
export const calculateDebtToIncomeRatio = (
  totalDebt: number,
  monthlyIncome: number,
): number => {
  return (totalDebt / monthlyIncome) * 100;
};

// ===== PAYOFF ROADMAP =====
export const generatePayoffRoadmap = (
  totalDebt: number,
  monthlyPayment: number,
  monthlyInterestRate: number,
): Array<{
  month: number;
  payment: number;
  interest: number;
  principal: number;
  balance: number;
}> => {
  const roadmap = [];
  let remainingDebt = totalDebt;
  let month = 1;

  while (remainingDebt > 0 && month <= 60) {
    const interestPayment = remainingDebt * monthlyInterestRate;
    const principalPayment = Math.min(
      monthlyPayment - interestPayment,
      remainingDebt,
    );

    remainingDebt -= principalPayment;

    roadmap.push({
      month,
      payment: monthlyPayment,
      interest: interestPayment,
      principal: principalPayment,
      balance: Math.max(0, remainingDebt),
    });

    month++;
  }

  return roadmap;
};
