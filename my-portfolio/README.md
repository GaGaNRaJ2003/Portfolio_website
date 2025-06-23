# AI-Powered Dynamic Portfolio Website

A modern, interactive portfolio website built with React, TypeScript, and Vite that dynamically loads data from LinkedIn and features an AI-powered chat interface.

## 🚀 Features

### Core Functionality
- **Dynamic Data Loading**: Real-time LinkedIn profile data scraping using Apify API
- **AI Chat Interface**: Interactive chatbot powered by Groq LLM (Llama3 models)
- **Intelligent Skills Categorization**: Automatic organization of skills using AI
- **Responsive Design**: Modern, mobile-friendly UI with smooth animations
- **Contact Integration**: Direct messaging through EmailJS

### Portfolio Sections
- **Profile Section**: Hero section with AI chat interface
- **Skills Section**: AI-categorized skills with visual tree layout
- **Experience Section**: Professional experience timeline
- **Projects Grid**: Showcase of technical projects
- **Certifications**: Professional certifications display
- **Contact Form**: Direct communication channel

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern React with latest features
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server
- **CSS3** - Custom styling with animations

### AI & APIs
- **Groq LLM** - High-performance AI models (Llama3-70b, Llama3-8b)
- **LangChain** - AI/LLM application framework
- **Apify** - Web scraping for LinkedIn data
- **EmailJS** - Contact form email service

### Development Tools
- **ESLint** - Code linting and formatting
- **Vercel** - Deployment platform

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/TheCoder30ec4/Portfolio_website.git
   cd Portfolio_website/my-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Copy the environment template and fill in your API keys:
   ```bash
   cp env.example .env
   ```
   
   Edit `.env` with your actual API keys:
   ```env
   VITE_GROQ_API_KEY=your_groq_api_key
   VITE_APIFY_API_TOKEN=your_apify_api_token
   VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 🔧 Configuration

### API Keys Required
- **Groq API Key**: For AI chat and skills categorization
- **Apify API Token**: For LinkedIn data scraping
- **EmailJS Credentials**: For contact form functionality

### Environment Variables
```env
VITE_GROQ_API_KEY=your_groq_api_key
VITE_APIFY_API_TOKEN=your_apify_api_token
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

## 🚀 Deployment

### Vercel Deployment (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy to Vercel**
   ```bash
   vercel
   ```

3. **Set Environment Variables in Vercel Dashboard**
   - Go to your project dashboard on Vercel
   - Navigate to Settings → Environment Variables
   - Add the following environment variables:
     - `VITE_GROQ_API_KEY`: Your Groq API key
     - `VITE_APIFY_API_TOKEN`: Your Apify API token
     - `VITE_EMAILJS_PUBLIC_KEY`: Your EmailJS public key

4. **Redeploy with Environment Variables**
   ```bash
   vercel --prod
   ```

### Manual Deployment
1. Build the project: `npm run build`
2. Deploy the `dist` folder to your hosting service

## 🔒 Security Notes

- **Never commit API keys to version control**
- **Use environment variables for all sensitive data**
- **The `.env` file is already in `.gitignore**
- **Vercel environment variables are encrypted and secure**

## 🏗️ Project Structure

```
src/
├── components/           # React components
│   ├── ProfileSection.tsx    # Hero section with AI chat
│   ├── SkillsSection.tsx     # AI-categorized skills
│   ├── ExperienceSection.tsx # Professional experience
│   ├── ProjectsGrid.tsx      # Projects showcase
│   ├── CertificateGrid.tsx   # Certifications display
│   ├── ContactForm.tsx       # Contact form
│   ├── NavBar.tsx            # Navigation
│   └── styles/               # Component-specific CSS
├── utils/                # Utility functions
│   ├── DataScraper/          # Apify integration
│   ├── fallbackData.ts       # Static data fallback
│   ├── skillsData.ts         # Skills data structure
│   └── ChatBot/              # AI chat utilities
├── App.tsx               # Main application component
└── main.tsx              # Application entry point
```

## 🤖 AI Features

### Chat Interface
- **Real-time Conversations**: Ask questions about the portfolio owner
- **Context-Aware Responses**: AI uses LinkedIn data for accurate answers
- **Professional Tone**: Maintains professional communication style
- **Quick Responses**: Optimized for 1-2 line answers

### Skills Categorization
- **Automatic Grouping**: AI organizes skills into logical categories
- **Dynamic Categories**: Frontend, Backend, Languages, Databases, etc.
- **Visual Tree Layout**: Interactive skills visualization
- **Fallback Support**: Graceful degradation without AI

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop computers
- Tablets
- Mobile devices
- Various screen sizes and orientations

## 🔄 Data Flow

1. **Initial Load**: Attempts to fetch LinkedIn data via Apify
2. **Fallback**: Uses static data if API fails
3. **AI Integration**: Groq LLM powers chat and skills categorization
4. **User Interaction**: Real-time responses and dynamic content updates

## 🛡️ Error Handling

- **API Timeout**: 2-minute timeout for data fetching
- **Graceful Degradation**: Falls back to static data
- **Loading States**: User-friendly loading indicators
- **Error Messages**: Clear error communication

## 📈 Performance

- **Fast Loading**: Vite-powered development and build
- **Optimized Assets**: Compressed images and efficient bundling
- **Lazy Loading**: Components load as needed
- **Caching**: Browser caching for static assets

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- **Groq** for high-performance AI models
- **Apify** for web scraping capabilities
- **EmailJS** for contact form functionality
- **React Team** for the amazing framework
- **Vite Team** for the fast build tool

---

⭐ **Star this repository if you find it helpful!**

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
