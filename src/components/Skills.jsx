import { motion } from 'framer-motion';
import { Server, Layers, Cloud, Layout, Database, Settings, ShieldCheck, Zap, Users } from 'lucide-react';

const Skills = () => {
  const categories = [
    {
      title: "Backend (Primary)",
      icon: <Server className="w-6 h-6 text-blue-400" />,
      skills: ["Node.js", "JavaScript/TypeScript", "Java", "Spring Boot", "Express.js"]
    },
    {
      title: "API Architecture",
      icon: <Layers className="w-6 h-6 text-purple-400" />,
      skills: ["GraphQL", "REST APIs", "AWS AppSync", "Microservices", "Serverless", "Domain-Driven Design"]
    },
    {
      title: "Cloud AWS",
      icon: <Cloud className="w-6 h-6 text-sky-400" />,
      skills: ["AWS (AppSync, EC2, S3, Lambda)", "Docker", "CI/CD Pipelines"]
    },
    {
      title: "Database",
      icon: <Database className="w-6 h-6 text-green-400" />,
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Data Modeling", "Query Optimization"]
    },
    {
      title: "Frontend",
      icon: <Layout className="w-6 h-6 text-pink-400" />,
      skills: ["React.js", "HTML5", "JavaScript (ES6+)", "Design Systems"]
    },
    {
      title: "DevOps & Build",
      icon: <Settings className="w-6 h-6 text-orange-400" />,
      skills: ["Git", "Maven", "npm/yarn", "Deployment Automation", "Linux"]
    },
    {
      title: "Testing",
      icon: <ShieldCheck className="w-6 h-6 text-teal-400" />,
      skills: ["JUnit 5", "Mockito", "Unit/Integration Testing", "Code Reviews"]
    },
    {
      title: "Performance",
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      skills: ["Data compression", "Caching", "Network optimization", "Scalability tuning"]
    },
    {
      title: "Agile",
      icon: <Users className="w-6 h-6 text-indigo-400" />,
      skills: ["Scrum", "Kanban", "Cross-functional Collaboration"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-[#0a0f1c]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
            <Zap className="w-8 h-8 text-blue-500" /> Technical Arsenal
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="p-6 glass-panel rounded-2xl hover:border-blue-500/30 transition-all group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-slate-800/50 rounded-lg group-hover:bg-slate-800 transition-colors">
                    {cat.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="px-3 py-1 bg-slate-800/80 text-slate-300 text-xs rounded-full border border-slate-700/50">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
