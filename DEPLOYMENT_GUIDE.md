# 🚀 Portfolio Deployment Guide

## 📋 Overview

This guide will help you deploy your portfolio to GitHub Pages with `/portfolio` as the default route while keeping your source code private (if desired).

## 🛠️ Setup Instructions

### 1. Create GitHub Repository

```bash
# Navigate to your project directory
cd "c:\Dev\personal\Portfoilos\portfolio"

# Initialize Git repository (if not already done)
git init

# Add all files
git add .

# Commit files
git commit -m "Initial portfolio setup with professional branding"

# Add your GitHub repository as remote
git remote add origin https://github.com/Mantri-Ajay-Kumar/portfolio.git

# Push to GitHub
git push -u origin main
```

### 2. GitHub Pages Configuration

#### Option A: Public Repository (Recommended for Portfolio)

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. The workflow will automatically deploy when you push changes

#### Option B: Private Repository (Premium GitHub required)

1. Go to your repository → **Settings**
2. Make repository private if desired
3. Under **Pages**, select **GitHub Actions**
4. Configure as above

### 3. Custom Domain (Optional)

If you want a custom domain like `ajaykumar.dev`:

1. Buy domain from registrar
2. Add CNAME file to public folder with your domain
3. Configure DNS settings with your domain provider

## 🔧 Project Configuration

### Package.json Settings

- ✅ Homepage: `https://mantri-ajay-kumar.github.io/portfolio`
- ✅ Deploy scripts configured
- ✅ gh-pages package installed

### GitHub Actions Workflow

- ✅ Automatic deployment on push to main/master
- ✅ Node.js 18 environment
- ✅ Legacy peer deps for MUI compatibility
- ✅ Build optimization

## 🌐 URLs After Deployment

### Your Portfolio URLs:

- **Main URL**: `https://mantri-ajay-kumar.github.io/portfolio/`
- **Direct Access**: Same URL works as default page
- **Professional Branding**: Tab shows "Mantri Ajay Kumar - System Engineer 2"

### Route Structure:

- `/portfolio/` - Home page (Hero section)
- `/portfolio/#about` - About section
- `/portfolio/#experience` - Experience section
- `/portfolio/#skills` - Skills section
- `/portfolio/#education` - Education section
- `/portfolio/#contact` - Contact section

## 🔒 Privacy & Security

### What's Public:

- ✅ Built website (HTML, CSS, JS)
- ✅ Static assets (images, icons)
- ✅ Portfolio content

### What Stays Private (if private repo):

- 🔒 Source code (.tsx, .ts files)
- 🔒 Component structure
- 🔒 Development dependencies
- 🔒 Build configuration

## 📱 Mobile & SEO Ready

### Already Configured:

- ✅ Professional favicon (AK logo)
- ✅ SEO meta tags
- ✅ Open Graph tags for social sharing
- ✅ Mobile-responsive design
- ✅ Professional color scheme

## 🚀 Deployment Commands

### Manual Deployment (if needed):

```bash
# Build the project
npm run build

# Deploy to GitHub Pages
npm run deploy
```

### Automatic Deployment:

- ✅ Deploys automatically on every push to main
- ✅ No manual intervention needed
- ✅ GitHub Actions handles everything

## 📈 Professional Features

### ATS-Friendly:

- ✅ System Engineer 2 position highlighted
- ✅ .NET 8 & AWS expertise showcased
- ✅ Quantifiable achievements
- ✅ Modern tech stack keywords

### Recruiter-Friendly:

- ✅ Download resume button
- ✅ Professional contact methods
- ✅ Skills visualization
- ✅ Clean, modern design

## 🔍 Testing Your Deployment

1. **Local Testing**: `npm start`
2. **Build Testing**: `npm run build` → test build folder
3. **Live Testing**: Visit your GitHub Pages URL after deployment

## 🎯 Next Steps

After deployment, your portfolio will be available at:
**https://mantri-ajay-kumar.github.io/portfolio/**

This URL serves as your professional online presence that you can:

- Share with recruiters
- Add to your resume
- Include in LinkedIn profile
- Use in job applications

## 📞 Support

If you encounter any issues:

1. Check GitHub Actions logs
2. Verify package.json homepage URL
3. Ensure all commits are pushed to main branch
4. Check GitHub Pages settings in repository

---

**Your portfolio is now ready for professional deployment! 🎉**
