import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ExternalLink, GitBranch, Briefcase, Code2 } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-40 pb-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
              Available for remote roles
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-tight"
          >
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Anchit Raj</span>
          </motion.h1>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-3xl text-slate-300 font-semibold mb-8"
          >
            Fullstack Engineer (Node.js + Java Backend)
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <a href="mailto:anchit.raj.07@gmail.com" className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all shadow-lg shadow-blue-600/20">
              <Mail className="w-5 h-5" /> Say Hello
            </a>
            
            <div className="flex items-center gap-3 px-2">
              <a href="https://github.com/anchitraj07" target="_blank" rel="noreferrer" className="p-3 bg-slate-800/50 hover:bg-slate-700 rounded-xl text-slate-300 hover:text-white transition-all border border-slate-700">
                <GitBranch className="w-5 h-5" />
              </a>
              <a href="https://leetcode.com/u/ANCHITKASHYAP07/" target="_blank" rel="noreferrer" className="p-3 bg-slate-800/50 hover:bg-slate-700 rounded-xl text-slate-300 hover:text-white transition-all border border-slate-700" title="LeetCode">
                <Code2 className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-3 bg-slate-800/50 hover:bg-slate-700 rounded-xl text-slate-300 hover:text-white transition-all border border-slate-700">
                <Briefcase className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-medium text-slate-400"
          >
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-blue-400" /> Delhi (India)
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-purple-400" /> +91-8873744208
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
