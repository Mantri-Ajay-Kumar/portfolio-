import {
  PersonalInfo,
  AboutData,
  Skill,
  Experience,
  Education,
  // Certification,
} from "../types";

export const personalInfo: PersonalInfo = {
  name: "Mantri Ajay Kumar",
  title: "System Engineer 2 | .NET 8 & AWS Cloud Architect",
  subtitle:
    "Results-driven System Engineer 2 with 6+ years of experience in modern .NET development, AWS cloud architecture, and high-performance native applications. Expert in .NET 8, AOT compilation, React.js, AWS serverless, and cloud-native microservices.",
  email: "kumar.ajaykumar7981@gmail.com",
  phone: "+91 7981218106",
  location: "Hyderabad, India",
  linkedin: "https://www.linkedin.com/in/kumarajay95/",
  github: "https://github.com/Mantri-Ajay-Kumar",
  resume: "/resume.pdf", // Add your resume in public folder
  profileImage: "/profile.png", // Add your profile image in public folder
};

export const aboutData: AboutData = {
  description: [
    "Accomplished System Engineer 2 with 6+ years of expertise in cutting-edge .NET development, AWS cloud architecture, and high-performance native applications. Expert in .NET 8 with AOT compilation, React.js, TypeScript, C# 12, and modern AWS services including Lambda, EC2, S3, RDS, and EKS.",
    "Currently serving as System Engineer 2 at Creditsafe Technologies, architecting cloud-native solutions using .NET 8 minimal APIs, AOT compilation for faster startup times, and leading development of ultra-fast financial technology platforms. Consistently delivering all projects within deadlines with 99.9% uptime and 60% performance improvement through native AOT optimization.",
    "Specialized in modern .NET 8 features: Native AOT compilation, minimal APIs, source generators, record types, and pattern matching. Combined with AWS cloud technologies: serverless computing (Lambda), infrastructure as code (Terraform .tf files, YAML configurations), and event-driven architectures. Expert in building sub-millisecond response applications.",
  ],
  yearsOfExperience: 6,
  projectsCompleted: 30,
  technologies: 25,
  certifications: 0, // Currently working on certifications
};

export const skills: Skill[] = [
  {
    category: "Frontend Technologies",
    items: [
      { name: "React.js", level: 92 },
      { name: "TypeScript", level: 88 },
      { name: "JavaScript (ES6+)", level: 95 },
      { name: "Material-UI (MUI)", level: 85 },
      { name: "HTML5/CSS3", level: 90 },
      { name: "Redux/Context API", level: 82 },
      { name: "Responsive Web Design", level: 90 },
      { name: "jQuery", level: 85 },
    ],
  },
  {
    category: "Modern .NET & Backend Technologies",
    items: [
      { name: ".NET 8 with AOT Compilation", level: 92 },
      { name: "C# 12 & Latest Features", level: 95 },
      { name: ".NET Minimal APIs", level: 90 },
      { name: "Native AOT & Performance", level: 88 },
      { name: "ASP.NET Core Web API", level: 92 },
      { name: "Entity Framework Core 8", level: 88 },
      { name: "Source Generators", level: 85 },
      { name: "RESTful API Design", level: 90 },
    ],
  },
  {
    category: "AWS Cloud & Database Technologies",
    items: [
      { name: "AWS Lambda & Serverless", level: 90 },
      { name: "AWS EC2 & Auto Scaling", level: 88 },
      { name: "AWS S3 & CloudFront CDN", level: 92 },
      { name: "AWS RDS & DynamoDB", level: 85 },
      { name: "Docker Containerization", level: 82 },
      { name: "Terraform Infrastructure (.tf)", level: 80 },
      { name: "Microsoft SQL Server", level: 92 },
      { name: "PostgreSQL Database", level: 88 },
    ],
  },
  {
    category: "Modern Cloud Architecture",
    items: [
      { name: "AWS EventBridge & SQS", level: 85 },
      { name: "AWS API Gateway", level: 88 },
      { name: "AWS CloudWatch & X-Ray", level: 82 },
      { name: "AWS CodePipeline CI/CD", level: 80 },
      { name: "Microservices Architecture", level: 88 },
      { name: "Event-Driven Architecture", level: 85 },
      { name: "Infrastructure as Code (Terraform)", level: 82 },
      { name: "YAML Configuration Management", level: 80 },
    ],
  },
  {
    category: "Development Tools & Methodologies",
    items: [
      { name: "Visual Studio 2022 IDE", level: 95 },
      { name: "Visual Studio Code", level: 92 },
      { name: "Git Version Control", level: 90 },
      { name: "SQL Server Management Studio", level: 90 },
      { name: "Agile/Scrum Methodology", level: 88 },
      { name: "Unit Testing Frameworks", level: 82 },
      { name: "API Testing (Postman/SoapUI)", level: 80 },
      { name: "Performance Monitoring", level: 85 },
    ],
  },
];

export const experiences: Experience[] = [
  {
    id: "exp1",
    title: "System Engineer 2",
    company: "Creditsafe Technologies",
    location: "Hyderabad, India",
    period: "Jan 2024 - Present",
    current: true,
    description: [
      "Architect and lead development of high-performance financial technology solutions using .NET 8 with AOT compilation, React.js, TypeScript, and AWS services, achieving sub-50ms response times for 15,000+ daily active users",
      "Implement cutting-edge .NET 8 minimal APIs with Native AOT compilation, reducing application startup time by 80% and memory footprint by 60% in containerized AWS Lambda environments",
      "Design and deploy serverless architectures using AWS Lambda with .NET 8 AOT, API Gateway, and EventBridge, achieving 40% cost reduction and 70% performance improvement while processing 1M+ daily transactions",
      "Build ultra-fast microservices using .NET 8 source generators, record types, and pattern matching, combined with AWS SQS, SNS, and DynamoDB for millisecond-level response times",
      "Optimize cloud infrastructure using .NET 8 native images in AWS containers (ECS), S3, CloudFront CDN, and RDS with read replicas, reducing cold start latency by 90%",
      "Implement comprehensive monitoring using AWS CloudWatch, X-Ray, and .NET 8 built-in telemetry, achieving 99.9% system visibility and proactive performance optimization",
      "Lead migration of legacy .NET Framework applications to .NET 8 with AOT compilation on AWS, resulting in 35% infrastructure cost savings and 300% performance improvement",
      "Mentor development teams on .NET 8 best practices, AOT compilation strategies, and cloud-native patterns, improving code performance by 50% and reducing deployment issues by 40%",
    ],
    technologies: [
      ".NET 8",
      "AOT Compilation",
      "C# 12",
      "Minimal APIs",
      "Source Generators",
      "React.js",
      "TypeScript",
      "AWS Lambda",
      "AWS EC2",
      "AWS S3",
      "AWS RDS",
      "Terraform",
      "YAML Configuration",
      "AWS API Gateway",
      "AWS EventBridge",
      "Docker",
      "Native Performance",
    ],
    projects: [
      {
        name: "Serverless Microservices Platform",
        description: "Built scalable serverless applications using AWS Lambdas",
        technologies: ["AWS Lambda", ".NET Core", "React.js", "CloudWatch"],
        achievements: [
          "Optimized cost-efficiency and performance",
          "Reduced front-end development time by 30%",
          "Implemented secure authentication protocols",
        ],
      },
    ],
  },
  {
    id: "exp2",
    title: "Software Engineer",
    company: "Bizgaze Limited",
    location: "Hyderabad, India",
    period: "Mar 2021 - Jan 2023",
    current: false,
    description: [
      "Designed and developed dynamic Doctype and Form builders, enabling flexible table, column, and relationship creation with validations and exception handling",
      "Developed widgets, dashboards, and dashboard groups using .NET Core, TypeScript, and PgSQL; implemented Import/Export functionality using XML, increasing efficiency by 80%",
      "Created and deployed a Digital Signature feature with Itext7 and Reflection, automating PDF text, image insertion, and timestamps",
      "Designed and developed a custom File System (UniDrive) as an alternative to Amazon EFS, supporting 1000+ daily users",
      "Improved application performance by 30% through Gzip Compression for API calls and addressed Thread Pool Exhaustion issues using asynchronous programming",
    ],
    technologies: [
      "C#",
      ".NET Core",
      "TypeScript",
      "PostgreSQL",
      "LINQ",
      "jQuery",
      "Itext7",
    ],
    projects: [
      {
        name: "UniDrive File System",
        description:
          "Custom file system supporting 1000+ daily users for document uploads",
        technologies: ["C#", "JavaScript", "Syncfusion", "PostgreSQL"],
        achievements: [
          "Increased efficiency by 80%",
          "Improved application performance by 30%",
          "Supported 1000+ daily users",
        ],
      },
    ],
  },
  {
    id: "exp3",
    title: "Customer Support Engineer",
    company: "Net Connect Global",
    location: "Hyderabad, India",
    period: "Jan 2014 - Dec 2014",
    current: false,
    description: [
      "Troubleshot technology issues and maintained software installations",
      "Patched software and installed new versions to eliminate security problems and protect data",
      "Removed malware, ransomware and other threats from laptops and desktop systems",
      "Tested, installed and set up application programs on user workstations",
      "Resolved tickets assigned through project management systems",
    ],
    technologies: ["Windows", "Linux", "Security Tools", "Remote Diagnostics"],
  },
];

export const education: Education[] = [
  {
    id: "edu1",
    degree: "Bachelor of Technology, Electrical and Electronics Engineering",
    institution: "Vidya Jyothi Institute of Technology (VJIT)",
    location: "Hyderabad, India",
    period: "2013 - 2017",
    grade: "66%",
  },
  {
    id: "edu2",
    degree: "Intermediate [+2], MPC",
    institution: "Sri Chaitanya Junior College",
    location: "Hyderabad, India",
    period: "2011 - 2013",
    grade: "73%",
  },
  {
    id: "edu3",
    degree: "SSC",
    institution: "Mahatma Gandhi Memorial High School",
    location: "Hyderabad, India",
    period: "2011",
    grade: "69%",
  },
];

// export const certifications: Certification[] = [
//   {
//     name: "AWS Cloud Practitioner",
//     issuer: "Amazon Web Services",
//     date: "2023",
//     credentialId: "AWS-CP-2023",
//   },
//   {
//     name: "Azure DevOps",
//     issuer: "Microsoft",
//     date: "2023",
//     credentialId: "AZ-400",
//   },
//   {
//     name: ".NET Framework Certifications",
//     issuer: "Microsoft",
//     date: "2022",
//     credentialId: "NET-3.0-6.0",
//   },
// };
