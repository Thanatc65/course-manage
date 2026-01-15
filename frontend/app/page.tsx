import React from 'react';
import { 
  ArrowUpRight, 
  Play, 
  Layers, 
  Zap, 
  Globe, 
  Command, 
  Check, 
  Star,
  Plus,
  Sparkles
} from 'lucide-react';

export default function PurpleWhiteLandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden selection:bg-purple-100 selection:text-purple-700">
      
      {/* --- Ambient Background Glows --- */}
      <div className="fixed top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-100/40 rounded-full blur-[120px] -z-10" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-fuchsia-50/50 rounded-full blur-[100px] -z-10" />

      {/* --- Navigation --- */}
      <nav className="fixed top-0 w-full z-50 bg-white/60 backdrop-blur-xl border-b border-purple-50">
        <div className="w-full px-6 md:px-12 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-gradient-to-tr from-purple-600 to-fuchsia-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-200">
              <Sparkles className="text-white" size={20} />
            </div>
            <span className="font-black tracking-tighter text-2xl bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600">
              Nexus<span className="text-purple-600">.</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-10 text-sm font-semibold text-slate-500">
            <a href="#curriculum" className="hover:text-purple-600 transition-colors">Curriculum</a>
            <a href="#features" className="hover:text-purple-600 transition-colors">Features</a>
            <a href="#pricing" className="hover:text-purple-600 transition-colors">Pricing</a>
          </div>

          <button className="font-bold bg-slate-900 text-white px-6 py-2.5 rounded-full hover:bg-purple-600 transition-all active:scale-95 shadow-lg shadow-slate-200">
            Join Course
          </button>
        </div>
      </nav>

      {/* --- Hero Section --- */}
      <section className="pt-40 pb-24 px-6 md:px-12 w-full">
        <div className="w-full max-w-[1400px] mx-auto flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-100 text-xs font-bold text-purple-600 mb-10 shadow-sm animate-bounce-slow">
            <Zap size={14} className="fill-purple-600" />
            V2.0 NOW OPEN FOR ENROLLMENT
          </div>
          
          <h1 className="text-6xl md:text-[100px] font-black tracking-tight leading-[0.9] mb-10">
            Engineering for the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-500">
              modern web.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-500 mb-12 max-w-3xl leading-relaxed font-medium">
            Build production-grade systems with Next.js 15, TypeScript, and AI. The only roadmap you need to go from dev to senior engineer.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-violet-600 text-white px-12 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-purple-200 transition-all hover:-translate-y-1">
              Start Learning Now
            </button>
            <button className="w-full sm:w-auto bg-white border border-slate-200 text-slate-900 px-12 py-5 rounded-2xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-3">
              <Play size={18} fill="currentColor" className="text-purple-600" /> View Syllabus
            </button>
          </div>

          <div className="mt-20 flex items-center gap-4 text-slate-400">
             <div className="flex -space-x-3">
                {[1,2,3,4,5].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-4 border-white bg-slate-200" />
                ))}
             </div>
             <p className="text-sm font-bold tracking-wide uppercase">Join 15k+ Global Students</p>
          </div>
        </div>
      </section>

      {/* --- Full Width Bento Grid --- */}
      <section id="features" className="py-24 px-6 md:px-12 w-full bg-slate-50/50">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            
            {/* Massive Main Card */}
            <div className="md:col-span-2 md:row-span-2 p-12 rounded-[40px] bg-white border border-purple-100 flex flex-col justify-between shadow-xl shadow-purple-100/20 group overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-purple-50 rounded-full blur-3xl -mr-32 -mt-32 opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-14 h-14 bg-purple-600 rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-purple-200">
                  <Command size={28} className="text-white" />
                </div>
                <h3 className="text-4xl font-black mb-6 tracking-tight">Full-Stack <br/>Architectures</h3>
                <p className="text-slate-500 text-lg leading-relaxed max-w-sm">
                  Master the art of building scalable backends, real-time sync, and distributed databases with ease.
                </p>
              </div>
              <div className="mt-12 flex gap-3">
                 <span className="px-4 py-2 bg-purple-50 rounded-full text-xs font-bold text-purple-600">Next.js 15</span>
                 <span className="px-4 py-2 bg-purple-50 rounded-full text-xs font-bold text-purple-600">PostgreSQL</span>
              </div>
            </div>

            {/* Feature Card 2 */}
            <div className="md:col-span-2 p-12 rounded-[40px] bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-8 group">
              <div>
                <h3 className="text-3xl font-bold mb-4">The Discord Hub</h3>
                <p className="text-slate-400 mb-6">Direct access to mentors and 24/7 support from our community.</p>
                <button className="flex items-center gap-2 text-purple-400 font-bold hover:text-purple-300 transition">
                  Join Community <ArrowUpRight size={18} />
                </button>
              </div>
              <div className="w-32 h-32 bg-purple-500/20 rounded-full flex items-center justify-center border border-white/10">
                <Globe size={48} className="text-purple-400" />
              </div>
            </div>

            {/* Feature Card 3 */}
            <div className="p-10 rounded-[40px] bg-white border border-slate-100 flex flex-col justify-between hover:border-purple-300 transition-all">
               <Layers className="text-purple-600 mb-6" size={32} />
               <div>
                  <h3 className="text-xl font-bold mb-2">12 Pro Projects</h3>
                  <p className="text-slate-500 text-sm">Real codebases you can actually use for clients.</p>
               </div>
            </div>

            {/* Feature Card 4 */}
            <div className="p-10 rounded-[40px] bg-gradient-to-br from-purple-600 to-violet-700 text-white flex flex-col justify-between shadow-xl shadow-purple-200">
               <div className="flex justify-between">
                 <Zap size={32} />
                 <Star className="fill-white" size={20} />
               </div>
               <div>
                  <h3 className="text-xl font-bold mb-2 tracking-tight">Lifetime Access</h3>
                  <p className="text-purple-100 text-sm">Pay once, get every update forever.</p>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- Pricing Section --- */}
      <section id="pricing" className="py-32 px-6 w-full relative">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1">
             <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-8">One price. <br/>Infinite <span className="text-purple-600">Value.</span></h2>
             <ul className="space-y-6">
                {[
                  "Complete Curriculum (40+ Hours)",
                  "Private Discord Community Access",
                  "Weekly Live Q&A Sessions",
                  "Resume & Portfolio Review"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-4 text-xl font-semibold text-slate-600">
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                      <Check className="text-purple-600" size={18} />
                    </div>
                    {item}
                  </li>
                ))}
             </ul>
          </div>

          <div className="w-full max-w-lg bg-white border border-purple-100 rounded-[50px] p-12 shadow-2xl shadow-purple-200/40 relative">
             <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-8 py-2 rounded-full text-xs font-black uppercase tracking-widest">
                Best Seller
             </div>
             <div className="flex items-end justify-center gap-2 mb-10">
                <span className="text-8xl font-black tracking-tighter">$199</span>
                <span className="text-slate-400 font-bold text-xl mb-4">/Life</span>
             </div>
             <button className="w-full bg-purple-600 text-white py-6 rounded-3xl font-black text-xl hover:bg-purple-700 transition-all shadow-xl shadow-purple-200 active:scale-[0.98] mb-6">
                GET ACCESS NOW
             </button>
             <p className="text-center text-slate-400 font-bold text-sm">30-DAY MONEY BACK GUARANTEE</p>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="py-20 px-12 border-t border-purple-50">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-purple-600 rounded flex items-center justify-center">
              <Sparkles className="text-white" size={12} />
            </div>
            <span className="font-bold tracking-tight">Nexus Academy</span>
          </div>
          <p className="text-slate-400 text-sm font-medium">© 2026 Nexus Engineering. Built with Passion & Precision.</p>
          <div className="flex gap-8 text-sm font-black text-slate-500 uppercase tracking-tighter">
            <a href="#" className="hover:text-purple-600">Twitter</a>
            <a href="#" className="hover:text-purple-600">GitHub</a>
            <a href="#" className="hover:text-purple-600">Dribbble</a>
          </div>
        </div>
      </footer>
    </div>
  );
}