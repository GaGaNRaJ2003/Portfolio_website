# Portfolio Backend

A lightweight Express.js backend server that securely handles Groq API calls for the portfolio website.

## Features

- 🔒 **Secure API Key Management**: Groq API key is stored server-side and never exposed to the client
- 🚀 **Fast Proxy**: Direct proxy to Groq API with proper error handling
- 🌐 **CORS Support**: Configured for cross-origin requests from your frontend
- 📊 **Health Check**: Built-in health check endpoint
- 🔄 **Streaming Support**: Optional streaming endpoint for real-time responses

## Setup

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Environment Configuration

Copy the example environment file and configure your settings:

```bash
cp env.example .env
```

Edit `.env` and add your Groq API key:

```env
GROQ_API_KEY=your_actual_groq_api_key_here
PORT=3001
NODE_ENV=development
ALLOWED_ORIGINS=http://localhost:5173,http://localhost:3000,https://yourdomain.com
```

### 3. Start the Server

**Development mode:**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

The server will start on port 3001 (or the port specified in your `.env` file).

## API Endpoints

### Health Check
```
GET /health
```
Returns server status and basic information.

### Groq Chat Completion
```
POST /api/groq/chat
```

**Request Body:**
```json
{
  "messages": [
    {"role": "system", "content": "You are a helpful assistant."},
    {"role": "user", "content": "Hello!"}
  ],
  "model": "llama3-70b-8192",
  "temperature": 0
}
```

**Response:**
```json
{
  "id": "chatcmpl-...",
  "object": "chat.completion",
  "created": 1234567890,
  "model": "llama3-70b-8192",
  "choices": [
    {
      "index": 0,
      "message": {
        "role": "assistant",
        "content": "Hello! How can I help you today?"
      },
      "finish_reason": "stop"
    }
  ],
  "usage": {
    "prompt_tokens": 15,
    "completion_tokens": 8,
    "total_tokens": 23
  }
}
```

### Groq Streaming Chat (Optional)
```
POST /api/groq/chat/stream
```
Returns a streaming response for real-time chat interactions.

## Frontend Integration

Update your frontend environment variables:

```env
VITE_BACKEND_URL=http://localhost:3001
```

The frontend will automatically use this backend URL for all Groq API calls.

## Security Features

- ✅ API key never exposed to client-side code
- ✅ CORS protection with configurable origins
- ✅ Request validation and error handling
- ✅ Rate limiting considerations (can be added)
- ✅ Environment variable protection

## Deployment

### Local Development
1. Start the backend: `npm run dev`
2. Start your frontend: `npm run dev`
3. Frontend will automatically connect to `http://localhost:3001`

### Production Deployment
1. Set `NODE_ENV=production` in your `.env`
2. Configure `ALLOWED_ORIGINS` with your production domain
3. Deploy to your preferred hosting service (Vercel, Railway, Heroku, etc.)
4. Update frontend `VITE_BACKEND_URL` to point to your deployed backend

## Troubleshooting

### Common Issues

1. **CORS Errors**: Check your `ALLOWED_ORIGINS` configuration
2. **API Key Errors**: Verify your `GROQ_API_KEY` is set correctly
3. **Connection Refused**: Ensure the backend is running on the correct port
4. **Rate Limiting**: Groq has rate limits; implement retry logic if needed

### Logs
The server logs all requests and errors to help with debugging.

## License

MIT License - feel free to use and modify as needed. 