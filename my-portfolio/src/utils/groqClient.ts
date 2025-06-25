// Groq API client that communicates through our backend
export interface GroqMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export interface GroqChatRequest {
  messages: GroqMessage[];
  model?: string;
  temperature?: number;
}

export interface GroqChatResponse {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: Array<{
    index: number;
    message: GroqMessage;
    finish_reason: string;
  }>;
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}

class GroqClient {
  private baseUrl: string;

  constructor() {
    // Use environment variable for backend URL, fallback to localhost
    this.baseUrl = import.meta.env.VITE_BACKEND_URL || 'https://portfolio-backend-production-2df1.up.railway.app';
    console.log('GroqClient initialized with backend URL:', this.baseUrl);
  }

  async chat(request: GroqChatRequest): Promise<GroqChatResponse> {
    try {
      const response = await fetch(`${this.baseUrl}/api/groq/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(request),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Groq API request failed:', error);
      throw error;
    }
  }

  async chatStream(request: GroqChatRequest): Promise<ReadableStream<Uint8Array> | null> {
    try {
      const response = await fetch(`${this.baseUrl}/api/groq/chat/stream`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(request),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }

      return response.body;
    } catch (error) {
      console.error('Groq API stream request failed:', error);
      throw error;
    }
  }

  // Helper method to create a simple chat completion
  async simpleChat(
    messages: GroqMessage[],
    model: string = 'llama3-70b-8192',
    temperature: number = 0
  ): Promise<string> {
    const response = await this.chat({
      messages,
      model,
      temperature,
    });

    return response.choices[0]?.message?.content || '';
  }
}

// Export a singleton instance
export const groqClient = new GroqClient();

// Export the class for custom instances if needed
export default GroqClient; 