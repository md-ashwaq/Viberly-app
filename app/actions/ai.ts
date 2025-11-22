"use server";

import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function generateReply(leadInfo: any) {
    if (!process.env.OPENAI_API_KEY) {
        throw new Error("Missing OpenAI API Key");
    }

    try {
        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "system",
                    content: "You are a sales expert for an Indian SMB. Suggest a short, polite WhatsApp reply to move the lead to the next stage. Use professional Hinglish if appropriate.",
                },
                {
                    role: "user",
                    content: `Lead Info: ${JSON.stringify(leadInfo)}`,
                },
            ],
            max_tokens: 150,
        });

        return completion.choices[0].message.content;
    } catch (error) {
        console.error("OpenAI Error:", error);
        throw new Error("Failed to generate reply");
    }
}
