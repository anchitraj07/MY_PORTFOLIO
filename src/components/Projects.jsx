import { motion } from 'framer-motion';
import { Layers, Activity, ExternalLink, GitBranch } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "GraphQL Composition Layer with AWS AppSync",
      type: "Personal Project",
      year: "2025",
      icon: <Layers className="w-8 h-8 text-blue-400" />,
      description: "Built a highly scalable serverless backend using Node.js and GraphQL, integrated via AWS AppSync for seamless data aggregation.",
      points: [
        "Implemented serverless architecture using AWS Lambda for scalable, cost-efficient processing.",
        "Applied domain-driven design principles for clean module separation and maintainability.",
        "Optimized data transmission with compression (gzip) and caching — reduced payload size by 50%.",
        "Set up CI/CD pipeline with automated testing and deployment to AWS."
      ],
      tech: ["Node.js", "GraphQL", "AWS AppSync", "AWS Lambda", "CI/CD"],
      github: "https://github.com/anchitraj07",
    },
    {
      title: "Real-Time Dashboard",
      type: "Personal Project",
      year: "2024",
      icon: <Activity className="w-8 h-8 text-purple-400" />,
      description: "A comprehensive dashboard for real-time data visualization featuring a modern user interface and efficient data fetching.",
      points: [
        "Developed user-facing React.js frontend with Node.js backend for real-time data visualization.",
        "Integrated GraphQL queries for efficient data fetching — reduced API calls by 60%.",
        "Implemented design system components for consistent UI across the application."
      ],
      tech: ["React.js", "Node.js", "GraphQL", "Design Systems"],
      github: "https://github.com/anchitraj07",
    }
  ];

  return (
    <section id="projects" className="py-20 bg-[#0a0f1c]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
            <Layers className="w-8 h-8 text-purple-500" /> Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-8 glass-panel rounded-3xl border border-slate-700/50 hover:border-purple-500/50 transition-all group relative overflow-hidden flex flex-col h-full"
              >
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity duration-500 transform group-hover:scale-110">
                  {project.icon}
                </div>
                
                <div className="flex justify-between items-start mb-4">
                  <span className="text-sm font-semibold text-purple-400 tracking-wider uppercase">{project.type} • {project.year}</span>
                  <a href={project.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors z-10">
                    <GitBranch className="w-6 h-6" />
                  </a>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 leading-tight">{project.title}</h3>
                <p className="text-slate-300 mb-6 flex-grow">
                  {project.description}
                </p>

                <ul className="space-y-2 mb-8 text-sm text-slate-400">
                  {project.points.map((point, pIdx) => (
                    <li key={pIdx} className="flex gap-2 items-start">
                      <span className="text-purple-500 mt-1">•</span>
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tech.map((tech, tIdx) => (
                    <span key={tIdx} className="px-3 py-1 bg-purple-500/10 text-purple-400 text-xs rounded-full border border-purple-500/20 font-medium">
                      {tech}
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

export default Projects;
