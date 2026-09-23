export const personalInfo = {
  name: "Dharun S.J",
  shortName: "Dharun",
  department: "Electronics and Communication Engineering (ECE)",
  institution: "V.S.B. Engineering College, Karur",
  cgpa: "8.40 / 10",
  expectedGraduation: "2028",
  role: "ECE Student | Developer | Technology Enthusiast",
  tagline: "Motivated and disciplined ECE student with hands-on exposure to programming, electronics fundamentals, embedded systems, and AI workflows.",
  location: "Modakurichi, Erode, Tamil Nadu, India",
  address: "82, Chettikuttai Valasu, P.K. Valasu, Modakurichi, Erode – 638104",
  email: "dharunjaganathan1@gmail.com",
  phone: "7904139957",
  status: "Available for Internships & Developer Roles 🟢",
  objective: "Motivated and disciplined Electronics & Communication Engineering student with hands-on exposure to programming, electronics fundamentals, and embedded/VLSI basics through certifications and in-plant training. Eager to bring discipline, a strong work ethic, and a continuous learning mindset to an entry-level internship or developer role.",
  languages: ["Tamil (Native)", "English (Professional)"],
  softSkills: ["Time Management", "Discipline", "Strong Work Ethic", "Continuous Learning"],
  socials: {
    github: "https://github.com/Dharun-07-byte/VSBEC.git",
    githubProfile: "https://github.com/Dharun-07-byte",
    linkedin: "https://www.linkedin.com/in/dharun-jaganathan-b8ab43379",
    leetcode: "https://leetcode.com/u/dharun_02082006/",
    email: "mailto:dharunjaganathan1@gmail.com"
  }
};

export const statsData = [
  { label: "B.E. ECE CGPA", value: "8.40 / 10", color: "#00f2fe" },
  { label: "Certifications", value: "7 Verified", color: "#7928ca" },
  { label: "HSC Score", value: "81%", color: "#00f5a0" },
  { label: "SSLC Score", value: "83%", color: "#ff007f" }
];

export const projectCategories = ["All", "AI & Web Dev", "ECE & Embedded", "Software & Tools"];

export const projectsData = [
  {
    id: "ai-food-booking-agent",
    title: "AI Food Booking Agent",
    category: "AI & Web Dev",
    image: "/assets/project_ai_studio.png",
    shortDesc: "AI-powered automated food ordering assistant with location-based outlet selection and autopay integration.",
    fullDesc: "Built an AI-powered food ordering assistant that lets a user pre-order their meal ahead of time. Once the order is placed, the AI agent takes over automatically — it places the order at the appropriate outlet based on the user's current location and completes the payment on its own through an autopay option, so the user doesn't have to step in again once the order is set up. Developed the frontend with HTML and CSS and the backend logic with JavaScript.",
    tech: ["JavaScript", "HTML5", "CSS3", "AI Agent Logic", "Autopay Engine"],
    githubUrl: "https://github.com/Dharun-07-byte/VSBEC.git",
    liveUrl: "https://example.com",
    architecture: [
      "Location-aware outlet dispatch algorithm",
      "Automated order payload generation & state machine",
      "Autopay integration for seamless order completion",
      "Responsive HTML/CSS frontend dashboard"
    ]
  },
  {
    id: "ece-iot-monitor",
    title: "IoT Environmental Telemetry Node",
    category: "ECE & Embedded",
    image: "/assets/project_cloud_dash.png",
    shortDesc: "Real-time microcontroller sensor telemetry dashboard for monitoring temperature and signal metrics.",
    fullDesc: "An integrated ECE project featuring microcontroller sensor nodes transmitting environmental metrics over wireless protocols to a web monitoring dashboard.",
    tech: ["C++", "Arduino / ESP32", "WebSockets", "HTML/CSS"],
    githubUrl: "https://github.com/Dharun-07-byte/VSBEC.git",
    liveUrl: "https://example.com",
    architecture: ["Sensor data sampling & ADC conversion", "Wireless packet transmission", "Real-time telemetry frontend"]
  }
];

export const skillCategories = [
  {
    name: "Programming Languages",
    iconKey: "code",
    skills: [
      { name: "C / C++", desc: "Core system programming & hardware logic", tag: "Primary" },
      { name: "Python", desc: "Scripting, logic & certification foundation", tag: "Primary" },
      { name: "Java", desc: "Object-oriented programming principles", tag: "Core" },
      { name: "JavaScript", desc: "Web logic & AI agent implementation", tag: "Web" }
    ]
  },
  {
    name: "Web Development",
    iconKey: "layout",
    skills: [
      { name: "HTML5", desc: "Semantic structure & page markup", tag: "Frontend" },
      { name: "CSS3", desc: "Styling, flexbox/grid & responsive design", tag: "Frontend" },
      { name: "React", desc: "Component architecture & modern web UIs", tag: "Framework" },
      { name: "Tailwind CSS", desc: "Utility-first modern styling framework", tag: "Styling" }
    ]
  },
  {
    name: "Engineering & Electronics",
    iconKey: "cpu",
    skills: [
      { name: "Electronic Fundamentals", desc: "Circuit analysis, semiconductors & signals", tag: "ECE Core" },
      { name: "VLSI Fundamentals", desc: "NIELIT certified VLSI logic design basics", tag: "NIELIT" },
      { name: "Embedded Systems", desc: "NIELIT certified embedded microcontroller logic", tag: "NIELIT" },
      { name: "IoT & Digital Transformation", desc: "CISCO certified IoT architecture", tag: "CISCO" }
    ]
  },
  {
    name: "Interests & Soft Skills",
    iconKey: "globe",
    skills: [
      { name: "Web Development", desc: "Designing responsive & functional applications", tag: "Interest" },
      { name: "Cybersecurity", desc: "Network security & threat prevention concepts", tag: "Interest" },
      { name: "Time Management", desc: "Disciplined project delivery & scheduling", tag: "Soft Skill" },
      { name: "Discipline & Ethics", desc: "Consistent work ethic & continuous learning", tag: "Soft Skill" }
    ]
  }
];

export const educationData = [
  {
    period: "2024 - 2028 (Expected)",
    degree: "B.E. Electronics and Communication Engineering",
    institution: "V.S.B. Engineering College, Karur",
    location: "Karur, Tamil Nadu",
    desc: "Currently pursuing B.E. in ECE with an outstanding CGPA of 8.40 / 10. Focusing on Programming, Electronic Fundamentals, Embedded Systems, VLSI, and Web Technologies.",
    achievements: [
      "Current Academic CGPA: 8.40 / 10",
      "Completed certified courses in Python, VLSI, and Embedded Systems from NIELIT"
    ]
  },
  {
    period: "2022 - 2024",
    degree: "Higher Secondary Certificate (HSC - Class XII)",
    institution: "P.K.P. Swamy Matriculation Higher Secondary School, Kalyanipuram",
    location: "Kalyanipuram, Tamil Nadu",
    desc: "Completed High School Education with high academic distinction.",
    achievements: [
      "Secured 81% in Higher Secondary Examinations"
    ]
  },
  {
    period: "2020 - 2022",
    degree: "Secondary School Leaving Certificate (SSLC - Class X)",
    institution: "P.K.P. Swamy Matriculation Higher Secondary School, Kalyanipuram",
    location: "Kalyanipuram, Tamil Nadu",
    desc: "Completed Secondary School Education.",
    achievements: [
      "Secured 83% in SSLC Examinations"
    ]
  }
];

export const experienceData = [
  {
    role: "In-Plant Training",
    company: "BSNL, Nagercoil",
    location: "Nagercoil, Tamil Nadu",
    desc: "Underwent hands-on in-plant training at Bharat Sanchar Nigam Limited (BSNL), gaining practical exposure to telecommunication networks, switching systems, and digital transmission protocols."
  },
  {
    role: "Engineering Internship",
    company: "Coral Engineering Works India Pvt. Ltd., Erode",
    location: "Erode, Tamil Nadu",
    desc: "Completed internship training focusing on industrial engineering operations, component manufacturing workflows, and equipment maintenance."
  }
];

export const certificationsData = [
  {
    id: "cert-1",
    title: "Python for Beginners",
    issuer: "NIELIT (National Institute of Electronics & Information Technology)",
    date: "Verified",
    credentialId: "NIELIT-PY-2024",
    credentialUrl: "/resume.pdf",
    skills: ["Python", "Programming Logic", "Data Basics"]
  },
  {
    id: "cert-2",
    title: "VLSI for Beginners",
    issuer: "NIELIT",
    date: "Verified",
    credentialId: "NIELIT-VLSI-2024",
    credentialUrl: "/resume.pdf",
    skills: ["VLSI Design", "Digital Circuits", "Semiconductor Basics"]
  },
  {
    id: "cert-3",
    title: "Embedded Systems for Beginners",
    issuer: "NIELIT",
    date: "Verified",
    credentialId: "NIELIT-EMB-2024",
    credentialUrl: "/resume.pdf",
    skills: ["Embedded Systems", "Microcontrollers", "C/C++"]
  },
  {
    id: "cert-4",
    title: "Introduction to IoT and Digital Transformation",
    issuer: "CISCO Networking Academy",
    date: "Verified",
    credentialId: "CISCO-IOT-2024",
    credentialUrl: "/resume.pdf",
    skills: ["IoT", "Digital Transformation", "Sensor Networks"]
  },
  {
    id: "cert-5",
    title: "Python Foundation Certificate",
    issuer: "Infosys Springboard",
    date: "Verified",
    credentialId: "INFOSYS-PY-2024",
    credentialUrl: "/resume.pdf",
    skills: ["Python OOP", "Data Structures", "Problem Solving"]
  },
  {
    id: "cert-6",
    title: "Becoming an Agentforce Champion",
    issuer: "Salesforce / FutureSkills Prime",
    date: "Verified",
    credentialId: "SALESFORCE-AGY-2024",
    credentialUrl: "/resume.pdf",
    skills: ["Agentic AI", "Salesforce Ecosystem", "Automation"]
  },
  {
    id: "cert-7",
    title: "Resume Writing and Job Interviewing",
    issuer: "HP Foundation",
    date: "Verified",
    credentialId: "HP-CAREER-2024",
    credentialUrl: "/resume.pdf",
    skills: ["Professional Ethics", "Communication", "Interview Skills"]
  }
];

export const extraCurricularData = [
  { event: "Circuitrix Competition", year: "2024", type: "Technical Competition" },
  { event: "National Science Day Quiz Competition", year: "2025", type: "Academic Quiz" },
  { event: "World Nature Conservation Day Quiz Competition", year: "2025", type: "Environmental Quiz" },
  { event: "TATA Crucible Campus Quiz", year: "2025", type: "National Campus Quiz" },
  { event: "Junior Red Cross Society Volunteer (7 Years)", year: "2017–2024", type: "Community Service" },
  { event: "Yoga for Youth Empowerment Program (Aliyar)", year: "Completed", type: "Wellness & Discipline" },
  { event: "Runner-up, Handball & Throwball", year: "School Level", type: "Sports Achievement" },
  { event: "UCO Exam", year: "2019", type: "Olympiad / Competition" }
];

export const terminalHelpText = `
Available Commands:
  about         - View Dharun S.J's objective, college CGPA, and contact info
  education     - View V.S.B. Engineering College degree & school scores
  experience    - Display BSNL & Coral Engineering Works training details
  projects      - Display AI Food Booking Agent project architecture
  skills        - List C/C++, Python, Java, and Electronics competencies
  certs         - View 7 verified certifications (NIELIT, CISCO, Infosys, HP)
  leetcode      - View LeetCode problem solving profile & link
  activities    - View quiz competitions, Junior Red Cross & sports highlights
  contact       - Get direct phone, email, and location details
  clear         - Clear terminal console output
`;
