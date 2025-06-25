#!/bin/bash

# Portfolio Backend Deployment Script

echo "🚀 Deploying Portfolio Backend..."

# Check if .env file exists
if [ ! -f .env ]; then
    echo "❌ Error: .env file not found!"
    echo "Please copy env.example to .env and configure your settings."
    exit 1
fi

# Check if GROQ_API_KEY is set
if ! grep -q "GROQ_API_KEY=" .env || grep -q "GROQ_API_KEY=your_groq_api_key_here" .env; then
    echo "❌ Error: GROQ_API_KEY not configured in .env file!"
    echo "Please add your actual Groq API key to the .env file."
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Check if installation was successful
if [ $? -ne 0 ]; then
    echo "❌ Error: Failed to install dependencies!"
    exit 1
fi

# Start the server
echo "🌟 Starting server..."
npm start 