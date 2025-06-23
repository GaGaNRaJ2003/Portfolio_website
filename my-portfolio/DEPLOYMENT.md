# Vercel Deployment Guide

This guide will help you deploy your portfolio website to Vercel while keeping your API keys secure.

## 🚀 Quick Deployment Steps

### 1. Prepare Your Repository

Make sure your code is committed to a Git repository (GitHub, GitLab, or Bitbucket).

### 2. Connect to Vercel

1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click "New Project"
3. Import your Git repository
4. Vercel will automatically detect it's a Vite project

### 3. Configure Build Settings

Vercel should auto-detect these settings, but verify:
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### 4. Set Environment Variables

**⚠️ CRITICAL: Set these before deploying!**

In your Vercel project dashboard:
1. Go to **Settings** → **Environment Variables**
2. Add the following variables:

| Variable Name | Description | Example |
|---------------|-------------|---------|
| `VITE_GROQ_API_KEY` | Your Groq API key for AI chat | `gsk_...` |
| `VITE_APIFY_API_TOKEN` | Your Apify API token | `apify_api_...` |
| `VITE_EMAILJS_PUBLIC_KEY` | Your EmailJS public key | `GJqgw-w-0T8oM-CMT` |

### 5. Deploy

Click "Deploy" and wait for the build to complete!

## 🔒 Security Best Practices

### ✅ What We've Fixed

1. **Removed hardcoded API keys** from source code
2. **Added environment variable support** for all sensitive data
3. **Created `.env.example`** template file
4. **Updated `.gitignore`** to exclude `.env` files

### ✅ What You Need to Do

1. **Never commit API keys** to your repository
2. **Use Vercel's environment variables** for production
3. **Keep your `.env` file local** for development
4. **Rotate API keys** if they were ever exposed

## 🛠️ Local Development Setup

### 1. Create Local Environment File

```bash
cp env.example .env
```

### 2. Add Your API Keys

Edit `.env` with your actual keys:
```env
VITE_GROQ_API_KEY=your_actual_groq_key
VITE_APIFY_API_TOKEN=your_actual_apify_token
VITE_EMAILJS_PUBLIC_KEY=your_actual_emailjs_key
```

### 3. Run Development Server

```bash
npm run dev
```

## 🔧 Troubleshooting

### Build Failures

**Issue**: Build fails with missing dependencies
**Solution**: 
```bash
npm install
npm run build
```

**Issue**: Environment variables not working
**Solution**: 
1. Check variable names start with `VITE_`
2. Redeploy after adding environment variables
3. Clear browser cache

### Runtime Errors

**Issue**: API calls failing in production
**Solution**:
1. Verify environment variables are set in Vercel
2. Check API key permissions and quotas
3. Ensure CORS settings are correct

### Performance Issues

**Issue**: Slow loading times
**Solution**:
1. Enable Vercel's edge caching
2. Optimize images and assets
3. Use Vercel's CDN

## 📱 Custom Domain Setup

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Domains**
3. Add your custom domain
4. Update DNS records as instructed

## 🔄 Continuous Deployment

Vercel automatically deploys when you push to your main branch. For other branches:
1. Push to a feature branch
2. Vercel creates a preview deployment
3. Merge to main for production deployment

## 📊 Monitoring

Vercel provides:
- **Analytics**: Page views, performance metrics
- **Functions**: Serverless function monitoring
- **Logs**: Real-time deployment and runtime logs

## 🆘 Support

- **Vercel Documentation**: [vercel.com/docs](https://vercel.com/docs)
- **Vercel Community**: [github.com/vercel/vercel/discussions](https://github.com/vercel/vercel/discussions)
- **Project Issues**: Check your repository's issues

---

**🎉 Congratulations!** Your portfolio is now securely deployed on Vercel with proper API key management. 