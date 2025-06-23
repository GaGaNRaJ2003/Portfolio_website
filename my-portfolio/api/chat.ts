import { ChatGroq } from '@langchain/groq';

export const config = {
  runtime: 'edge',
};

export default async function handler(req: Request) {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'Method not allowed' }), {
      status: 405,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  try {
    const { history, name, linkedin } = await req.json();

    if (!history || !Array.isArray(history)) {
      return new Response(JSON.stringify({ error: 'Invalid history provided' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const llm = new ChatGroq({
      model: "llama3-70b-8192",
      temperature: 0,
      apiKey: process.env.GROQ_API_KEY,
    });

    const systemPrompt = `You are acting as ${name}. You are answering questions on ${name}'s website, related to their experience, skills, and career. Be friendly, professional, and helpful. Here's their LinkedIn for context:\n${linkedin}. Make sure to answer in 1-2 lines for every question.`;

    const response = await llm.invoke([
      { role: "system", content: systemPrompt },
      ...history
    ]);

    const botContent =
      typeof response.content === "string"
        ? response.content
        : Array.isArray(response.content)
          ? response.content.map((c: any) => (typeof c === "string" ? c : c.text || "")).join(" ")
          : "";

    return new Response(JSON.stringify({ message: botContent }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (err: any) {
    console.error('Error in chat API:', err);
    return new Response(JSON.stringify({ error: 'Internal server error', details: err.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
} 