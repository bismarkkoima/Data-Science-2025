#!/bin/bash
# Deploy Dashboard to Vercel

echo "🚀 Deploying Data Science Dashboard to Vercel..."

# Update dashboard data
python3 ../update_dashboard.py

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI not found. Install with: npm i -g vercel"
    exit 1
fi

# Deploy to Vercel
cd "$(dirname "$0")"
vercel --prod

echo "✅ Deployment complete!"
echo "🌐 Your dashboard is now live!"
