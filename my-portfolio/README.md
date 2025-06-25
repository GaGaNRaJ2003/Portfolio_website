# Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Vite. Features an AI-powered chat interface using Groq API.

## 🚀 Features

- **Modern UI/UX**: Beautiful, responsive design with smooth animations
- **AI Chat Interface**: Interactive chat with Groq LLM integration
- **Secure Backend**: Lightweight Express.js backend for secure API key management
- **Project Showcase**: Dynamic project grid with filtering
- **Skills Visualization**: Interactive skills section
- **Contact Form**: Functional contact form with email integration
- **Mobile Responsive**: Optimized for all device sizes

## 🔒 Security

This project now includes a **secure backend** to protect your Groq API key:

- ✅ **No API Key Exposure**: API keys are never exposed in client-side code
- ✅ **Backend Proxy**: All Groq API calls go through a secure Express.js backend
- ✅ **CORS Protection**: Configured cross-origin request handling
- ✅ **Environment Variables**: Secure configuration management

## 🛠️ Setup

### Prerequisites
- Node.js 18+ (recommended: Node.js 20+)
- npm or yarn
- Groq API key

### 1. Frontend Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Copy environment configuration
cp env.example .env

# Edit .env and add your Groq API key
# GROQ_API_KEY=your_actual_groq_api_key_here

# Start backend server
npm run dev
```

### 3. Environment Variables

**Frontend (.env):**
```env
VITE_BACKEND_URL=http://localhost:3001
```

**Backend (.env):**
```env
GROQ_API_KEY=your_actual_groq_api_key_here
PORT=3001
NODE_ENV=development
ALLOWED_ORIGINS=http://localhost:5173,http://localhost:3000
```

## 🚀 Deployment

### Frontend (GitHub Pages)
```bash
npm run deploy
```

### Backend Deployment
The backend can be deployed to any Node.js hosting service:

1. **Vercel**: Connect your backend folder to Vercel
2. **Railway**: Deploy directly from GitHub
3. **Heroku**: Use the provided Procfile
4. **DigitalOcean App Platform**: Deploy as a Node.js app

**Important**: Set your environment variables in your hosting platform's dashboard.

## 🔧 Troubleshooting

### Common Issues

#### Peer Dependency Warnings
If you see peer dependency warnings with React 19, this is normal and won't affect functionality. The project uses `--legacy-peer-deps` in CI/CD to handle these warnings.

#### Build Failures
If the build fails with missing dependencies:
```bash
npm install lucide-react
npm run build
```

#### Backend Connection Issues
If the frontend can't connect to the backend:
1. Ensure the backend is running on the correct port
2. Check your `VITE_BACKEND_URL` environment variable
3. Verify CORS settings in the backend

#### Node Version Issues
The project requires Node.js 18+ (recommended: Node.js 20+). Update Node.js if you encounter engine warnings:
```bash
# Using nvm (recommended)
nvm install 20
nvm use 20

# Or download from nodejs.org
```

#### Development Server Issues
If the dev server doesn't start:
```bash
npm run clean  # Clean install
npm run dev
```

## 🔄 Data Flow

The application now uses a secure architecture:

```
Frontend (React) → Backend (Express) → Groq API
```

1. **Frontend**: Sends chat requests to backend
2. **Backend**: Validates requests and forwards to Groq API with secure API key
3. **Groq API**: Returns responses through backend
4. **Backend**: Forwards responses to frontend

## 📁 Project Structure

```
my-portfolio/
├── src/                    # Frontend source code
│   ├── components/         # React components
│   ├── utils/             # Utilities and API clients
│   └── ...
├── backend/               # Express.js backend
│   ├── server.js          # Main server file
│   ├── package.json       # Backend dependencies
│   └── README.md          # Backend documentation
├── public/                # Static assets
└── ...
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

MIT License - feel free to use and modify as needed.
