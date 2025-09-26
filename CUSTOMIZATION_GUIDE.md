# 🎨 Portfolio Customization Guide

## 📋 Quick Setup Checklist

Follow these steps to personalize your portfolio:

### Step 1: Update Personal Information

Edit `src/data/portfolioData.ts`:

```typescript
export const personalInfo: PersonalInfo = {
  name: "Your Full Name", // e.g., "Mohammad Hameed Khan"
  title: "Your Job Title", // e.g., "Python Developer"
  subtitle: "Your Tagline", // e.g., "Building scalable solutions"
  email: "your.email@example.com",
  phone: "+91 1234567890", // Your phone number
  location: "Your City, Country", // e.g., "Hyderabad, India"
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourusername",
  resume: "/your-resume.pdf", // Add PDF to public folder
  profileImage: "/your-photo.jpg", // Add image to public folder
};
```

### Step 2: Update About Section

In the same file, update:

```typescript
export const aboutData: AboutData = {
  description: [
    "First paragraph about yourself...",
    "Second paragraph about your experience...",
    "Third paragraph about your goals...",
  ],
  yearsOfExperience: 3, // Your years of experience
  projectsCompleted: 25, // Number of projects
  technologies: 15, // Technologies you know
  certifications: 5, // Your certifications
};
```

### Step 3: Update Skills

Modify the skills array with your technical skills:

```typescript
export const skills: Skill[] = [
  {
    category: "Programming Languages",
    items: [
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 85 },
      // Add more...
    ],
  },
  // Add more categories...
];
```

### Step 4: Add Your Experience

Update the experiences array:

```typescript
export const experiences: Experience[] = [
  {
    id: "exp1",
    title: "Associate System Engineer",
    company: "Credit Safe Technologies",
    location: "Hyderabad",
    period: "Mar 2022 - Present",
    current: true,
    description: [
      "Your responsibility 1",
      "Your responsibility 2",
      // Add more...
    ],
    technologies: ["Python", "Flask", "AWS"],
    projects: [
      {
        name: "Project Name",
        description: "Project description",
        technologies: ["Tech1", "Tech2"],
        achievements: ["Achievement 1", "Achievement 2"],
      },
    ],
  },
  // Add more experiences...
];
```

### Step 5: Add Education

Update education details:

```typescript
export const education: Education[] = [
  {
    id: "edu1",
    degree: "Masters of Computer Application",
    institution: "Your University",
    location: "City, Country",
    period: "2019 - 2021",
    grade: "Your GPA/Grade",
  },
  // Add more...
];
```

### Step 6: Add Certifications

Update certifications:

```typescript
export const certifications: Certification[] = [
  {
    name: "AWS Certified Developer",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialId: "ABC123",
    link: "https://verification-link.com",
  },
  // Add more...
];
```

## 📸 Adding Images

1. **Profile Picture**:

   - Add your photo to `public/` folder (e.g., `profile.jpg`)
   - Update path in `personalInfo.profileImage`
   - Recommended size: 400x400px

2. **Resume PDF**:
   - Add your resume to `public/` folder (e.g., `resume.pdf`)
   - Update path in `personalInfo.resume`

## 🎨 Customizing Theme

### Change Colors

Edit `src/theme/theme.ts`:

```typescript
primary: {
  main: '#1976d2',  // Change primary color
},
secondary: {
  main: '#dc004e',  // Change secondary color
},
```

### Change Fonts

In the same file:

```typescript
typography: {
  fontFamily: '"Your Font", "Roboto", sans-serif',
}
```

## 🚀 Deployment

### GitHub Pages

1. Update `package.json`:

```json
"homepage": "https://yourusername.github.io/portfolio"
```

2. Deploy:

```bash
npm run deploy
```

### Custom Domain

After deployment, add a CNAME file in the public folder:

```
yourdomain.com
```

## 💡 Tips

1. **Professional Photo**: Use a high-quality, professional headshot
2. **Concise Descriptions**: Keep descriptions clear and impactful
3. **Quantify Achievements**: Use numbers where possible (e.g., "Improved performance by 40%")
4. **Update Regularly**: Keep your portfolio current with latest projects
5. **Test Responsiveness**: Check on different devices before deploying

## 🆘 Need Help?

- Check the README.md for technical details
- Review the component files in `src/components/` for advanced customization
- Test locally with `npm start` before deploying

## 📝 Example Based on Original Portfolio

Based on the portfolio you referenced, here's how Mohammad Hameed Khan would update:

```typescript
export const personalInfo: PersonalInfo = {
  name: "Mohammad Hameed Khan",
  title: "Python Developer",
  subtitle: "3+ years specializing in Fullstack & backend development",
  email: "hameed1198@gmail.com",
  phone: "+91 8919070648",
  location: "Hyderabad, India",
  linkedin: "https://linkedin.com/in/hameed1198",
  github: "https://github.com/hameed1198",
  resume: "/hameed-resume.pdf",
  profileImage: "/hameed-photo.jpg",
};
```

Remember to:

- Add your actual profile photo
- Include your real resume
- Update all sections with your actual information
- Test everything before deploying!
