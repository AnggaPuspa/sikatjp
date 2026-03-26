// ===== TYPES =====
export interface ChatMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

export interface ChatRequest {
  messages: ChatMessage[];
  userName?: string;
  userFocus?: string;
}

export interface ChatResponse {
  success: boolean;
  message?: string;
  error?: string;
  details?: any;
}

// ===== CONFIG =====
const ALIBABA_ENDPOINT =
  "https://dashscope-intl.aliyuncs.com/compatible-mode/v1/chat/completions";
const MODEL = "qwen-plus";

// ===== API =====
export async function sendChatMessage(
  apiKey: string,
  messages: ChatMessage[],
  systemPrompt: string,
): Promise<any> {
  const response = await fetch(ALIBABA_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: MODEL,
      messages: [{ role: "system", content: systemPrompt }, ...messages],
      temperature: 0.7,
      max_tokens: 800,
    }),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(JSON.stringify(errorData));
  }

  return response.json();
}
