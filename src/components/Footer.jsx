import { GitBranch, Briefcase, Code2, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-slate-800 bg-[#020617]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="text-slate-400 font-medium">© {new Date().getFullYear()} Anchit Raj. All rights reserved.</p>
          <p className="text-slate-500 text-sm mt-1">Built with React & Tailwind CSS</p>
        </div>
        
        <div className="flex items-center gap-4">
          <a href="https://github.com/anchitraj07" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-slate-800 rounded-full">
            <GitBranch className="w-5 h-5" />
          </a>
          <a href="https://leetcode.com/u/ANCHITKASHYAP07/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-slate-800 rounded-full">
            <Code2 className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-slate-800 rounded-full">
            <Briefcase className="w-5 h-5" />
          </a>
          <a href="mailto:anchit.raj.07@gmail.com" className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-slate-800 rounded-full">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
