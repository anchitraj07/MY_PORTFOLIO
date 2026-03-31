import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Code2, 
  Database, 
  Server, 
  Layers, 
  Wrench, 
  GraduationCap, 
  Briefcase, 
  ChevronRight,
  Globe
} from 'lucide-react';

const App = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const experience = [
    {
      company: "Tech Mahindra",
      role: "Software Engineer",
      period: "March 2024 – August 2025",
      location: "Noida, India",
      points: [
        "Architected a Digital Signage Migration Platform, eliminating manual migration effort from 15 days to 2 days (80% improvement).",
        "Designed and streamlined scalable REST APIs for Visitor Management System (VMS), reducing manual effort by 70% and improving turnaround time by 60%.",
        "Built a production-grade OTP Authentication Service with rate limiting, retry control, expiration handling, and SMS cost optimization, reducing redundant OTP requests by 35%.",
        "Established centralized input validation and data sanitization layer preventing XSS/script injection attacks and reducing unwanted SMS/email triggers by 30%.",
        "Enabled secure JWT-based authentication and role-based authorization using Spring Security, supporting scalable stateless session management.",
        "Optimized database queries and API performance, improving API response time by 40% under high traffic load."
      ],
      stack: ["Java 17", "Spring Boot", "Microservices", "Spring Security (JWT)", "Hibernate/JPA", "MySQL", "REST APIs"]
    },
    {
      company: "Incture Technologies",
      role: "Software Engineer",
      period: "Jun 2022 – Aug 2023",
      location: "Bengaluru, India",
      points: [
        "Developed RESTful web services using Spring Boot and managed MySQL databases.",
        "Troubleshot and resolved production issues reported by customers and support teams.",
        "Wrote unit tests using JUnit 5 and Mockito to improve code quality.",
        "Participated in Agile development and production debugging."
      ],
      stack: ["Java 8/11", "Spring Boot", "MySQL", "PostgreSQL", "SAP", "ReactJS", "JUnit", "Git"]
    }
  ];

  const skills = [
    {
      category: "Backend",
      icon: <Server className="w-6 h-6 text-blue-400" />,
      items: ["Java (8/11/17)", "Spring Boot", "Spring Security", "Microservices", "REST APIs", "Hibernate/JPA"]
    },
    {
      category: "Architecture",
      icon: <Layers className="w-6 h-6 text-purple-400" />,
      items: ["Microservices", "Distributed Systems", "API Design", "Clean Architecture", "System Design"]
    },
    {
      category: "Database",
      icon: <Database className="w-6 h-6 text-green-400" />,
      items: ["MySQL", "SQL", "PostgreSQL", "Query Optimization"]
    },
    {
      category: "Concepts",
      icon: <Code2 className="w-6 h-6 text-yellow-400" />,
      items: ["OOPs", "Design Patterns", "Multithreading", "DSA"]
    },
    {
      category: "Tools",
      icon: <Wrench className="w-6 h-6 text-red-400" />,
      items: ["Git", "Bitbucket", "Docker (Basic)", "Jenkins", "Kafka", "Postman", "Jira", "Linux", "JasperReports", "MySQL Workbench"]
    },
    {
      category: "Frontend",
      icon: <Globe className="w-6 h-6 text-cyan-400" />,
      items: ["React.js (Basic)", "JavaScript (ES6+)", "HTML5", "CSS3", "Ext.js"]
    }
  ];

  const projects = [
    {
      title: "Smart-Sync",
      description: "Distributed Data Migration & Sync Engine built with Java 17, Spring Boot, and Kafka. Designed for high-volume, asynchronous data transfers between MySQL and PostgreSQL.",
      tech: ["Java 17", "Spring Boot", "Kafka", "JPA", "MySQL"],
      link: "#", // Replace with real GitHub link once pushed
      icon: <Layers className="w-6 h-6 text-blue-400" />
    },
    {
      title: "Secure-Pass",
      description: "Multi-tenant Visitor Management System focusing on security and scalability. Features JWT-based RBAC, API rate limiting with Redis, and automated visitor workflows.",
      tech: ["Java 17", "Spring Security", "JWT", "Redis", "PostgreSQL"],
      link: "#",
      icon: <Server className="w-6 h-6 text-purple-400" />
    }
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-300 font-sans selection:bg-blue-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0f172a]/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            AR.
          </span>
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
            <a href="#education" className="hover:text-blue-400 transition-colors">Education</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        {/* Hero Section */}
        <motion.section 
          id="about"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mb-32"
        >
          <div className="max-w-3xl">
            <motion.h1 
              className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight"
            >
              Anchit Raj
            </motion.h1>
            <h2 className="text-xl md:text-2xl text-blue-400 font-semibold mb-8">
              Java Backend Engineer
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-slate-400 mb-10">
              Backend Engineer with 3+ years of experience building scalable systems using Java, Spring Boot, and 
              Microservices architecture. Specialized in designing REST APIs, event-driven systems with Kafka, 
              and optimizing database performance.
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <a href="mailto:anchit.raj.07@gmail.com" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all shadow-lg shadow-blue-600/20">
                <Mail className="w-4 h-4" /> Say Hello
              </a>
              <div className="flex items-center gap-4 px-2">
                <a href="#" className="p-2 hover:text-white transition-colors"><Globe className="w-6 h-6" /></a>
                <a href="#" className="p-2 hover:text-white transition-colors"><ExternalLink className="w-6 h-6" /></a>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-3 text-slate-400">
                <MapPin className="w-4 h-4 text-blue-400" /> Delhi-NCR, India
              </div>
              <div className="flex items-center gap-3 text-slate-400">
                <Phone className="w-4 h-4 text-blue-400" /> +91-8873744208
              </div>
            </div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <section id="projects" className="mb-32">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
              <Layers className="w-8 h-8 text-blue-400" /> Key Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, idx) => (
                <div key={idx} className="p-8 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all group relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    {project.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                  <p className="text-slate-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((tech, tIdx) => (
                      <span key={tIdx} className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full border border-blue-500/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a href={project.link} className="inline-flex items-center gap-2 text-blue-400 font-bold hover:text-white transition-colors">
                    View Project <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-32">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
              <Briefcase className="w-8 h-8 text-blue-400" /> Work Experience
            </h2>
            <div className="space-y-12">
              {experience.map((exp, idx) => (
                <div key={idx} className="relative pl-8 border-l-2 border-slate-800">
                  <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                  <div className="mb-2 flex flex-wrap justify-between items-baseline gap-2">
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <span className="text-sm font-medium text-slate-500">{exp.period}</span>
                  </div>
                  <div className="mb-4 text-blue-400 font-medium flex items-center gap-2">
                    {exp.company} <span className="text-slate-600">•</span> {exp.location}
                  </div>
                  <ul className="space-y-3 mb-6">
                    {exp.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex gap-3 text-slate-400">
                        <ChevronRight className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.stack.map((tech, tIdx) => (
                      <span key={tIdx} className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full border border-blue-500/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-32">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
              <Code2 className="w-8 h-8 text-blue-400" /> Technical Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, idx) => (
                <div key={idx} className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-all group">
                  <div className="mb-4 flex items-center gap-3">
                    {skill.icon}
                    <h3 className="text-lg font-bold text-white">{skill.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, iIdx) => (
                      <span key={iIdx} className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors">
                        {item}{iIdx < skill.items.length - 1 ? ' •' : ''}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Education Section */}
        <section id="education" className="mb-32">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
              <GraduationCap className="w-8 h-8 text-blue-400" /> Education
            </h2>
            <div className="p-8 bg-slate-800/50 rounded-2xl border border-slate-700/50">
              <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Birla Institute of Technology, Mesra</h3>
                  <p className="text-blue-400 font-medium">B.Tech in Information Technology</p>
                </div>
                <div className="text-right">
                  <span className="text-slate-500 text-sm font-medium">2018 – 2022</span>
                  <div className="mt-1 text-white font-bold">CGPA: 7.27</div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center py-20 px-8 bg-gradient-to-b from-blue-600/10 to-transparent rounded-3xl border border-blue-500/10"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Let's build something amazing together</h2>
            <p className="text-slate-400 mb-10 max-w-xl mx-auto">
              I'm always looking for new opportunities and collaborations. Whether you have a question or just want to say hi, my inbox is always open!
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="mailto:anchit.raj.07@gmail.com" className="flex items-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-all">
                <Mail className="w-5 h-5" /> Email Me
              </a>
              <a href="tel:+918873744208" className="flex items-center gap-3 bg-slate-800 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-700 transition-all border border-slate-700">
                <Phone className="w-5 h-5" /> +91-8873744208
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="py-10 text-center border-t border-slate-800 text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} Anchit Raj</p>
      </footer>
    </div>
  );
};

export default App;
