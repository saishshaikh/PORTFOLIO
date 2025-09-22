// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';
import matplotlibLogo from './assets/tech_logo/Matplotlib.png';
import numpyLogo from './assets/tech_logo/NumPy.png';
import pandasLogo from './assets/tech_logo/Pandas.png';


// Experience Section Logo's
import cloudCounselageLogo from './assets/company_logo/cloudcounselage_logo.png';
import acmLogo from './assets/company_logo/acm_logo.png';
import sarvpriyeLogo from './assets/company_logo/sarvpriyefoundation_logo.png';

// Education Section Logo's
import glaLogo from './assets/education_logo/gla_logo.png';
import bsaLogo from './assets/education_logo/bsa_logo.png';
import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Section Logo's
import stockLogo from './assets/work_logo/Stock_predictor.png';
import dataanalystLogo from './assets/work_logo/Data_analyst.png';
import skyportLogo from './assets/work_logo/SkyPort.png';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
      { name: 'Matplotlib', logo: matplotlibLogo },
      { name: 'Numpy', logo: numpyLogo },
      { name: 'Pandas', logo: pandasLogo },
      
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    
    {
      id: 0,
      img: cloudCounselageLogo,
      role: "Data Analyst",
      company: "Cloud Counselage Pvt. Ltd.",
      date: "Sep 2025 - Present",
      desc: "Data Analyst Intern at Cloud Counselage Pvt. Ltd., focusing on data cleaning, analysis, and visualization to extract insights and support decision-making",
      skills: [
        "Python", 
        "Excel",
        "Pandas",
        "NumPy",
        "Matplotlib, ,  )",
        "Seaborn",
        "SQL",
        "Power",
        "BI/Tableau"
      ],
    },
    {
      id: 1,
      img: sarvpriyeLogo,
      role: "FullStack Developer ",
      company: "Sarvpriye Foundation",
      date: "May 2025 - Present",
      desc: "Full-Stack Developer Intern at Sarvpriye Foundation, contributing to the design and development of web applications using the MERN stack. Focused on building scalable, user-friendly solutions by integrating front-end interfaces with efficient back-end systems.",
      skills: [
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap",
        "React.js",
        "Next.js",
        "Tailwind.css",
        "Express.js",
        "MongoDB",
        "MySQL",
        "Git/GitHub"
      ],
    },
    {
      id: 2,
      img: acmLogo,
      role: "Event Management",
      company: "Association for Computing Machinery",
      date: "Aug 2024 - Present",
      desc: "Assisted in organizing and managing college-level technical and cultural events, ensuring smooth coordination and execution.",
      skills: [
        "Event Planning & Coordination",
        "Team Collaboration",
        "Time Management",
        "Communication & Networking",
        "Leadership in Student Activities",
        "Resource & Task Management"
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: glaLogo,
      school: "GLA University, Mathura",
      date: "Sept 2022 - July 2024",
      grade: "7.81 CGPA",
      desc: "I have completed my Master's degree (MCA) in Computer Applications from GLA University, Mathura. During my time at GLA, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at GLA University has been instrumental in shaping my technical abilities and professional growth.",
      degree: "Master of Computer Applications - MCA",
    },
    {
      id: 1,
      img: bsaLogo,
      school: "BSA College, Mathura",
      date: "Sept 2018 - Aug 2021",
      grade: "73.2%",
      desc: "I completed my Bachelor's degree in Computer Science (B.Sc.) from BSA College, Mathura. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at BSA College allowed me to work on projects that applied theoretical concepts to real-world problems.",
      degree: "Bachelor of Science - BSC (Computer Science)",
    },
    {
      id: 2,
      img: vpsLogo,
      school: "Vatsalya Public School Govardhan, Mathura",
      date: "Apr 2017 - March 2018",
      grade: "78%",
      desc: "I completed my class 12 education from Vatsalya Public School, Govardhan, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
      degree: "CBSE(XII) - PCM with Computer Science",
    },
    {
      id: 3,
      img: vpsLogo,
      school: "Vatsalya Public School Govardhan, Mathura",
      date: "Apr 2015 - March 2016",
      grade: "87.5%",
      desc: "I completed my class 10 education from Vatsalya Public School, Govardhan, under the CBSE board, where I studied Science with Computer.",
      degree: "CBSE(X), Science with Computer Application",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Real-Time Stock Tracker",
      description:
        "Real-Time Stock Tracker, A Python-based web app that fetches and displays live stock prices with auto-refresh, built using Python, HTML, and CSS for real-time market insights.",
      image: stockLogo,
      tags: [ "HTML", "CSS","MongoDB","Python","Flask"],
      github: "https://github.com/Arshan18/Real-Time-Stock-Tracker.git",
      
    },
    {
      id: 1,
      title: "Academic Equity Insights",
      description:
        "Absence of Insights for the Relationship Between Student's Economic Background, Academic Performance, Competence & Expected Salary",
      image: dataanalystLogo,
      tags: [ "Jupyter", "Python", "Matplotlib", "Seaborn", "Pandas" ],
      github: "https://github.com/Arshan18/Absence-of-Insights-for-the-Relationship-Between-Student-s-Economic-Background-Academic-Performance..git",
    },
    {
      id: 2,
      title: "SkyPort",
      description:
        "SkyPort – Airline Operations and Customer Management System: A Java Swing desktop application designed to ensure secure airline workflows, streamline real-time flight reservations, and manage customer data seamlessly with MySQL integration.",
      image: skyportLogo,
      tags: ["Java", "Java Swing", "MySQL", "JDBC"],
      github: "https://github.com/Arshan18/SkyPort---Flight-and-Customer-Management-System-Java-Swing-MySQL.git"
    }
    
  ];  