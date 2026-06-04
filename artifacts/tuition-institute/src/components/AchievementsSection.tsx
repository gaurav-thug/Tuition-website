import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

function useCountUp(end: number, duration: number = 1500) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  
  useEffect(() => {
    if (!inView) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeProgress * end));
      if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  }, [end, duration, inView]);

  return { count, ref };
}

const TOPPERS = [
  { name: "Aarav Sharma", score: "99.2%", subject: "CBSE Class 12 Science", year: "2023" },
  { name: "Diya Patel", score: "98.8%", subject: "ICSE Class 10", year: "2023" },
  { name: "Kabir Singh", score: "99.0%", subject: "CBSE Class 12 Commerce", year: "2023" },
  { name: "Ananya Reddy", score: "97.5%", subject: "State Board Class 10", year: "2023" }
];

export default function AchievementsSection() {
  const studentsCount = useCountUp(5000);
  const passRate = useCountUp(98);
  const toppers = useCountUp(300);
  const years = useCountUp(15);

  return (
    <section id="board-results" className="py-24 bg-[#0F1C3F] relative overflow-hidden">
      {/* Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm20 20h20v20H20V20zM0 20h20v20H0V20z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '20px 20px'
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#93C5FD] uppercase tracking-[0.08em] font-bold text-[13px] mb-4 block">
            OUR TRACK RECORD
          </span>
          <h2 className="font-serif text-white text-4xl md:text-5xl font-bold mb-6">
            Board Results & Statistics
          </h2>
        </div>

        {/* Counter Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20">
          {[
            { ref: studentsCount.ref, val: studentsCount.count, suffix: "+", label: "Happy Students" },
            { ref: passRate.ref, val: passRate.count, suffix: "%", label: "Pass Rate" },
            { ref: toppers.ref, val: toppers.count, suffix: "+", label: "District Toppers" },
            { ref: years.ref, val: years.count, suffix: "+", label: "Years Excellence" }
          ].map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center"
            >
              <div ref={stat.ref} className="font-number text-4xl md:text-5xl font-bold text-[#F97316] mb-2">
                {stat.val}{stat.suffix}
              </div>
              <div className="text-blue-100 text-sm md:text-base font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Toppers Highlights */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Meet Our Star Achievers</h3>
          <div className="flex overflow-x-auto pb-8 hide-scrollbar gap-6 snap-x">
            {TOPPERS.map((topper, idx) => (
              <motion.div 
                key={idx}
                className="snap-center shrink-0 w-[280px] md:w-[320px] bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-2xl p-6 relative overflow-hidden"
              >
                <div className="absolute -top-4 -right-4 text-white/5">
                  <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                
                <div className="w-12 h-12 bg-[#F59E0B]/20 rounded-full flex items-center justify-center mb-4 text-[#F59E0B]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
                    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
                    <path d="M4 22h16"/>
                    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
                    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
                    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
                  </svg>
                </div>
                
                <h4 className="text-xl font-bold text-white mb-1">{topper.name}</h4>
                <div className="font-number text-4xl font-bold text-[#F97316] mb-4">{topper.score}</div>
                <div className="text-blue-200 text-sm font-medium">{topper.subject}</div>
                <div className="text-white/50 text-xs mt-1">Batch of {topper.year}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Board Results Table */}
        <div className="bg-white rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
          <div className="bg-[#EFF6FF] px-6 py-4 border-b border-blue-100">
            <h4 className="text-lg font-bold text-[#0F1C3F]">Overall Board Results 2023</h4>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-50 text-gray-600 text-sm uppercase tracking-wider">
                  <th className="px-6 py-4 font-semibold">Board</th>
                  <th className="px-6 py-4 font-semibold">Appeared</th>
                  <th className="px-6 py-4 font-semibold">Passed</th>
                  <th className="px-6 py-4 font-semibold">Distinction</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { board: "CBSE Class 12", appeared: 450, passed: "100%", dist: "85%" },
                  { board: "CBSE Class 10", appeared: 520, passed: "100%", dist: "88%" },
                  { board: "ICSE Class 10", appeared: 280, passed: "100%", dist: "92%" },
                  { board: "State Board 12", appeared: 310, passed: "98.5%", dist: "75%" }
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-bold text-[#0F1C3F]">{row.board}</td>
                    <td className="px-6 py-4 text-gray-600">{row.appeared}</td>
                    <td className="px-6 py-4 text-[#10B981] font-bold">{row.passed}</td>
                    <td className="px-6 py-4 text-[#1E40AF] font-bold">{row.dist}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
