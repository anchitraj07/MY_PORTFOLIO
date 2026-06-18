import { motion } from 'framer-motion';
import { GraduationCap, MapPin } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-4">
            <GraduationCap className="w-8 h-8 text-blue-500" /> Education
          </h2>

          <div className="p-8 glass-panel rounded-3xl border border-slate-700/50 hover:border-blue-500/30 transition-all">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Birla Institute of Technology, Mesra</h3>
                <p className="text-blue-400 font-semibold text-lg">B.Tech — Information Technology</p>
              </div>
              <div className="text-left md:text-right">
                <span className="text-slate-400 font-medium bg-slate-800/50 px-4 py-2 rounded-full inline-block mb-2">2018 – 2022</span>
                <div className="text-white font-bold text-lg">CGPA: 7.27</div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-slate-400 mt-4">
              <MapPin className="w-4 h-4 text-slate-500" /> Ranchi, Jharkhand
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
