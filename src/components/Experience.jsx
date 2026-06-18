import { motion } from 'framer-motion';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "Tech Mahindra",
      role: "Software Engineer — Java Backend",
      period: "March 2024 – August 2025",
      location: "Noida, India",
      points: [
        "Built a Digital Signage migration tool in Java 17 + Spring Boot that cut migration time from 15 days to 2 days — 80% reduction in manual effort.",
        "Wrote REST APIs for a Visitor Management System covering check-in, check-out, and bulk flows using Spring MVC + Microservices; reduced manual processing by 70% and turnaround by 60%.",
        "Wired up JWT + OAuth2 auth with RBAC via Spring Security; sessions are stateless and hold up under concurrent load thanks to multi-threaded request handling.",
        "Built an OTP service with rate limiting, retry control, and expiry logic — cut redundant requests by 35%; added input validation to block injection vectors, reducing bad SMS/email triggers by 30%.",
        "Tuned MySQL/PostgreSQL queries with indexing, PL-SQL rewrites, and Hibernate/JPA fixes under traffic — API response time dropped 40%.",
        "Managed builds and releases with Maven + Git in a CI/CD pipeline; worked through Agile sprints with dev and QA, zero critical incidents post-release."
      ],
      stack: ["Java 17", "Spring Boot", "Spring MVC", "Microservices", "Spring Security (JWT/OAuth2)", "Hibernate/JPA", "MySQL", "PostgreSQL", "PL-SQL", "Maven", "Git", "Docker"]
    },
    {
      company: "Incture Technologies",
      role: "Software Engineer — Java Backend",
      period: "June 2022 – August 2023",
      location: "Bengaluru, India",
      points: [
        "Wrote Spring Boot REST APIs backed by MySQL and PostgreSQL for enterprise SAP-connected workflows.",
        "Wrote complex SQL/PL-SQL queries and optimised slow data-retrieval and reporting modules.",
        "Fixed production bugs across environments reported by customers and support — reduced mean time to resolution.",
        "Wrote JUnit 5 + Mockito tests to keep regression coverage solid; used Git + Maven in Agile sprints with regular code reviews."
      ],
      stack: ["Java 8/11", "Spring Boot", "Spring MVC", "MySQL", "PostgreSQL", "PL-SQL", "JUnit 5", "Mockito", "Git", "Maven"]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
            <Briefcase className="w-8 h-8 text-blue-500" /> Work Experience
          </h2>

          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div key={idx} className="relative pl-8 border-l border-slate-700/50">
                <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[8px] top-2 shadow-[0_0_15px_rgba(59,130,246,0.6)]" />
                
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                    <div className="text-blue-400 font-semibold text-lg flex items-center gap-2">
                      {exp.company} <span className="text-slate-600 hidden md:inline">•</span> <span className="text-slate-400 font-normal text-sm">{exp.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400 bg-slate-800/50 px-4 py-2 rounded-full text-sm font-medium border border-slate-700">
                    <Calendar className="w-4 h-4" /> {exp.period}
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {exp.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex gap-4 text-slate-300 items-start">
                      <ChevronRight className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                      <span dangerouslySetInnerHTML={{ __html: point.replace(/(Java 17|Spring Boot|Spring MVC|Microservices|JWT \+ OAuth2|Spring Security|MySQL|PostgreSQL|PL-SQL|Hibernate\/JPA|Maven \+ Git|JUnit 5 \+ Mockito|Git \+ Maven)/g, '<strong class="text-white font-semibold">$1</strong>') }} />
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.stack.map((tech, tIdx) => (
                    <span key={tIdx} className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs rounded-full border border-blue-500/20 font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
