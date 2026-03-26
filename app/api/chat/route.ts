import { NextRequest, NextResponse } from "next/server";
import { sendChatMessage } from "@/lib/api/alibaba";
import { createSystemPrompt } from "@/lib/constants/prompts";
import type { ChatRequest, ChatResponse } from "@/lib/api/alibaba";

// ===== POST =====
export async function POST(
  request: NextRequest,
): Promise<NextResponse<ChatResponse>> {
  try {
    const apiKey = process.env.ALIBABA_API_KEY;
    if (!apiKey) {
      console.error("ALIBABA_API_KEY tidak ditemukan di environment variables");
      return NextResponse.json(
        {
          success: false,
          error:
            "Konfigurasi API tidak lengkap. Silakan hubungi administrator.",
        },
        { status: 500 },
      );
    }

    const { messages, userName, userFocus, useCustomSystemPrompt }: ChatRequest & { useCustomSystemPrompt?: boolean } = await request.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { success: false, error: "Format pesan tidak valid" },
        { status: 400 },
      );
    }

    let systemPrompt: string;
    let apiMessages = messages;

    if (useCustomSystemPrompt) {
      systemPrompt = messages[0]?.content || "";
      apiMessages = messages.slice(1);
    } else {
      systemPrompt = createSystemPrompt(
        userName || "User",
        userFocus || "Umum",
      );
    }

    const data = await sendChatMessage(apiKey, apiMessages, systemPrompt);
    const aiResponse =
      data.choices?.[0]?.message?.content ||
      "Maaf, saya mengalami kesulitan memproses permintaan Anda. Silakan coba lagi.";

    return NextResponse.json({
      success: true,
      message: aiResponse,
    });
  } catch (error: any) {
    console.error("Alibaba API Error:", error);

    let errorMessage =
      "Terjadi kesalahan saat menghubungi AI. Silakan coba lagi.";
    let errorDetails = error.message;

    try {
      const parsedError = JSON.parse(error.message);
      if (parsedError.error?.code === "invalid_api_key") {
        errorMessage = "API Key tidak valid. Silakan periksa konfigurasi.";
      }
      errorDetails = parsedError;
    } catch {}

    return NextResponse.json(
      {
        success: false,
        error: errorMessage,
        details: errorDetails,
      },
      { status: 500 },
    );
  }
}
