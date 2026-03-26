import { useState, useCallback } from "react";
import type { Message } from "@/types/chat";
import { containsSuicideIndicators } from "@/lib/utils/helpers";
import { EMERGENCY_CONTACTS, MESSAGES } from "@/lib/constants/platform";

interface UseChatReturn {
  messages: Message[];
  isTyping: boolean;
  sendMessage: (
    userMessage: string,
    formData: { name: string; focus: string },
  ) => Promise<void>;
  addMessage: (message: Message) => void;
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
}

export const useChat = (): UseChatReturn => {
  // ===== STATE =====
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  // ===== ADD MESSAGE =====
  const addMessage = useCallback((message: Message) => {
    setMessages((prev) => [...prev, message]);
  }, []);

  // ===== SEND MESSAGE =====
  const sendMessage = useCallback(
    async (userMessage: string, formData: { name: string; focus: string }) => {
      if (containsSuicideIndicators(userMessage)) {
        addMessage({
          id: Date.now().toString() + "emergency",
          sender: "bot",
          text: `${formData.name}, ${MESSAGES.panicButton}\n\n🆘 HUBUNGI SEGERA:\n- ${EMERGENCY_CONTACTS.suicidePrevention.name}: ${EMERGENCY_CONTACTS.suicidePrevention.number}\n- ${EMERGENCY_CONTACTS.whatsapp.name}: ${EMERGENCY_CONTACTS.whatsapp.number}\n\nTim profesional kami akan segera menghubungi Anda. Bertahanlah.`,
          timestamp: new Date(),
        });
        return;
      }

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
          addMessage({
            id: Date.now().toString() + "bot",
            sender: "bot",
            text: data.message,
            timestamp: new Date(),
          });
        } else {
          addMessage({
            id: Date.now().toString() + "bot",
            sender: "bot",
            text: `Maaf ${formData.name}, sistem AI sedang mengalami gangguan teknis. Tim profesional kami tetap akan menghubungi Anda melalui WhatsApp yang telah terdaftar.\n\nSilakan coba lagi dalam beberapa saat.`,
            timestamp: new Date(),
          });
        }
      } catch (error) {
        console.error("Chat API Error:", error);
        addMessage({
          id: Date.now().toString() + "bot",
          sender: "bot",
          text: `Koneksi ke sistem AI terputus. Namun data Anda tetap aman, ${formData.name}. Tim kami akan segera menghubungi Anda.`,
          timestamp: new Date(),
        });
      } finally {
        setIsTyping(false);
      }
    },
    [messages, addMessage],
  );

  // ===== RETURN =====
  return {
    messages,
    isTyping,
    sendMessage,
    addMessage,
    setMessages,
  };
};
