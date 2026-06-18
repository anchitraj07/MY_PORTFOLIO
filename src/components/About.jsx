import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-8 md:p-12 glass-panel rounded-3xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] pointer-events-none"></div>
          
          <h2 className="text-3xl font-bold text-white mb-6">Summary</h2>
          <p className="text-lg text-slate-300 leading-relaxed max-w-4xl">
            Fullstack Engineer (3+ years) specializing in building high-performance, scalable web applications with <span className="text-white font-semibold">Node.js, GraphQL, and AWS</span>. 
            Expert in developing composition layer APIs using GraphQL and AWS AppSync, building backend services with <span className="text-white font-semibold">Java/Spring Boot</span> and Node.js, 
            and implementing CI/CD pipelines for continuous deployment. Proven track record optimizing applications for performance, scalability, 
            and user experience in Agile teams.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
