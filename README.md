# Modern Portfolio Website

A beautiful, responsive portfolio website built with React, TypeScript, and Material-UI. Features smooth animations, dark mode support, and a modern design.

## 🌟 Features

- **Modern Design**: Clean, professional layout with gradient effects and smooth animations
- **Dark Mode**: Toggle between light and dark themes
- **Fully Responsive**: Looks great on all devices
- **Animated Sections**: Smooth scroll animations using Framer Motion and AOS
- **Interactive Components**: Progress bars for skills, timeline for experience
- **Contact Form**: Functional contact form with validation
- **Performance Optimized**: Fast loading and smooth interactions

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open in your browser at `http://localhost:3000`

## 📝 Customization

### Update Your Information

1. **Personal Information**: Edit `src/data/portfolioData.ts` to update:
   - Name, title, and contact details
   - About section content
   - Skills and proficiency levels
   - Work experience
   - Education details
   - Certifications

2. **Profile Image**: Add your profile image to the `public` folder and update the path in `portfolioData.ts`

3. **Resume**: Add your resume PDF to the `public` folder and update the path

4. **Theme Colors**: Customize colors in `src/theme/theme.ts`

### Example Update

```typescript
// In src/data/portfolioData.ts
export const personalInfo: PersonalInfo = {
  name: "John Doe",
  title: "Full Stack Developer",
  subtitle: "Building amazing web experiences",
  email: "john.doe@example.com",
  phone: "+1 234 567 8900",
  location: "San Francisco, CA",
  linkedin: "https://linkedin.com/in/johndoe",
  github: "https://github.com/johndoe",
  resume: "/john-doe-resume.pdf",
  profileImage: "/john-profile.jpg"
};
```

## 🌐 Deployment

### Deploy to GitHub Pages

1. Update the homepage URL in `package.json`:
```json
"homepage": "https://yourusername.github.io/portfolio"
```

2. Build and deploy:
```bash
npm run deploy
```

This will build the project and push it to the `gh-pages` branch of your repository.

### Deploy to Other Platforms

#### Netlify
1. Build the project: `npm run build`
2. Drag and drop the `build` folder to Netlify

#### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`

#### Custom Domain
After deployment, you can configure a custom domain in your hosting platform's settings.

## 🛠️ Technologies Used

- **React 18** - UI Framework
- **TypeScript** - Type Safety
- **Material-UI v5** - Component Library
- **Framer Motion** - Animations
- **AOS** - Scroll Animations
- **React Typed** - Typing Animation
- **React Intersection Observer** - Viewport Detection

## 📂 Project Structure

```
portfolio/
├── public/
│   ├── index.html
│   └── (add your resume.pdf and profile image here)
├── src/
│   ├── components/
│   │   ├── Navbar/
│   │   ├── Hero/
│   │   ├── About/
│   │   ├── Skills/
│   │   ├── Experience/
│   │   ├── Education/
│   │   ├── Contact/
│   │   └── Footer/
│   ├── data/
│   │   └── portfolioData.ts
│   ├── theme/
│   │   └── theme.ts
│   ├── types/
│   │   └── index.ts
│   ├── App.tsx
│   └── index.tsx
└── package.json
```

## 📱 Sections

1. **Hero Section** - Eye-catching introduction with animated text
2. **About** - Personal introduction and statistics
3. **Skills** - Technical skills with progress bars
4. **Experience** - Work history timeline
5. **Education** - Academic background and certifications
6. **Contact** - Contact form and social links
7. **Footer** - Social links and copyright

## 🎨 Customization Tips

- **Colors**: Edit the theme in `src/theme/theme.ts`
- **Fonts**: Change typography settings in the theme file
- **Animations**: Adjust animation delays and effects in components
- **Layout**: Modify grid layouts and spacing in components

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👨‍💻 Author

**Your Name**

- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourprofile)

---

⭐ Star this repo if you find it helpful!