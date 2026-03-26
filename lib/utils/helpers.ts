export const generateId = (): string => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

// ===== FORMAT PHONE =====

export const formatPhoneNumber = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, "");
  if (cleaned.startsWith("0")) {
    return "62" + cleaned.substring(1);
  }
  return cleaned;
};

// ===== VALIDATION =====

export const validateFormData = (
  name: string,
  phone: string,
  focus: string,
): boolean => {
  const isNameValid = name.trim().length >= 3;
  const isPhoneValid = /^(08|628)\d{8,12}$/.test(phone.replace(/\D/g, ""));
  const isFocusValid = ["pinjol", "judol", "mental"].includes(focus);
  return isNameValid && isPhoneValid && isFocusValid;
};

// ===== SANITIZE =====

export const sanitizeInput = (input: string): string => {
  return input.trim().replace(/[<>]/g, "").substring(0, 500);
};

// ===== CRISIS DETECTION =====

export const containsSuicideIndicators = (message: string): boolean => {
  const indicators = [
    "bunuh diri",
    "ingin mati",
    "mengakhiri hidup",
    "tidak ingin hidup",
    "lebih baik mati",
    "suicide",
    "end my life",
  ];
  const lowerMessage = message.toLowerCase();
  return indicators.some((indicator) => lowerMessage.includes(indicator));
};

// ===== FORMAT TIMESTAMP =====

export const formatTimestamp = (date: Date): string => {
  return new Intl.DateTimeFormat("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
};

// ===== DEBOUNCE =====

export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number,
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};
