# Deployment Guide - GitHub & Netlify

## Step 1: Prepare for GitHub

### Files Already Configured:
- ✅ `.gitignore` - Excludes unnecessary files (node_modules, .next, etc.)
- ✅ `netlify.toml` - Netlify build configuration
- ✅ `README.md` - Project documentation
- ✅ `package.json` - Dependencies and scripts

### Unnecessary Files (Already in .gitignore):
- `.next/` - Build output (will be regenerated)
- `node_modules/` - Dependencies (will be installed via npm install)
- `.env*.local` - Local environment files

## Step 2: Initialize Git and Push to GitHub

### In Command Prompt (cmd), run these commands:

```cmd
cd D:\Protfolio\portfolio-nextjs

# Initialize git repository
git init

# Add all files (gitignore will exclude unnecessary files automatically)
git add .

# Commit the files
git commit -m "Initial commit: Professional portfolio website"

# Create a new repository on GitHub (go to github.com and create a new repo)
# Then connect your local repo to GitHub (replace YOUR_USERNAME and YOUR_REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 3: Deploy to Netlify

### Option A: Deploy via Netlify Dashboard (Recommended)

1. **Go to Netlify**: Visit [https://app.netlify.com](https://app.netlify.com)

2. **Sign up/Login**: Create an account or login with GitHub

3. **Import from Git**:
   - Click "Add new site" → "Import an existing project"
   - Choose "GitHub" and authorize Netlify
   - Select your repository from the list
   - Netlify will auto-detect the settings from `netlify.toml`

4. **Build Settings** (Auto-detected):
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Base directory: (leave empty)

5. **Deploy**:
   - Click "Deploy site"
   - Wait for the build to complete (usually 2-3 minutes)

6. **Access Your Site**:
   - Once deployed, you'll get a URL like: `https://your-site-name.netlify.app`
   - You can customize the domain name in Site settings → Domain settings

### Option B: Deploy via Netlify CLI

```cmd
# Install Netlify CLI globally
npm install -g netlify-cli

# Login to Netlify
netlify login

# Initialize and deploy
cd D:\Protfolio\portfolio-nextjs
netlify init

# Deploy
netlify deploy --prod
```

## Step 4: Environment Variables (if needed)

If you need to add environment variables:
1. Go to Netlify Dashboard → Your Site → Site settings → Environment variables
2. Add any required variables (e.g., API keys)

## Step 5: Custom Domain (Optional)

1. Go to Site settings → Domain settings
2. Click "Add custom domain"
3. Follow the instructions to configure your domain

## Troubleshooting

### Build Fails on Netlify:
- Check the build logs in Netlify dashboard
- Ensure `package.json` has all dependencies listed
- Make sure Node.js version is 18+ (specified in netlify.toml)

### Images Not Loading:
- Check that `images: { unoptimized: true }` is in `next.config.js` (already configured)

### 404 Errors:
- Ensure your site is using Next.js App Router (already configured)
- Check that all routes are properly set up

## Post-Deployment

- ✅ Your portfolio is now live!
- ✅ Any push to the `main` branch will trigger automatic redeployment
- ✅ You can preview deployments before making them live
- ✅ Netlify provides free SSL certificates

## Continuous Deployment

Netlify automatically deploys on every push to your main branch:
- Push changes to GitHub
- Netlify detects the change
- Automatically rebuilds and redeploys your site

Enjoy your live portfolio! 🚀

