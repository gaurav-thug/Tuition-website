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

const RECENT_RESULTS = [
  { name: "Aarav Sharma", class: "Class 12 CBSE", percentage: "99.2%", subject: "Science Stream", year: "2024", highlight: true },
  { name: "Diya Patel", class: "Class 10 ICSE", percentage: "98.8%", subject: "All Subjects", year: "2024", highlight: false },
  { name: "Kabir Singh", class: "Class 12 CBSE", percentage: "99.0%", subject: "Commerce Stream", year: "2024", highlight: false },
  { name: "Ananya Reddy", class: "Class 10 State Board", percentage: "97.5%", subject: "Science & Maths", year: "2024", highlight: false },
  { name: "Riya Joshi", class: "Class 12 CBSE", percentage: "98.4%", subject: "PCM", year: "2024", highlight: false },
  { name: "Siddharth Kumar", class: "JEE Mains 2024", percentage: "98.7 percentile", subject: "Physics Chemistry Maths", year: "2024", highlight: true }
];

export default function ResultsSection() {
  const studentsCount = useCountUp(5000);
  const passRate = useCountUp(98);
  const notesCount = useCountUp(500);
  const yearsCount = useCountUp(15);

  return (
    <section id="results" className="py-24 bg-[#F8FAFF]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#1E40AF] uppercase tracking-[0.08em] font-bold text-[13px] mb-4 block">
            RECENT RESULTS
          </span>
          <h2 className="font-serif text-[#0F1C3F] text-4xl md:text-5xl font-bold mb-6">
            Academic Excellence, Year After Year
          </h2>
        </div>

        {/* Stats Bar */}
        <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-100">
            <div className="text-center px-4" ref={studentsCount.ref}>
              <div className="font-number text-4xl md:text-[48px] font-bold text-[#F97316] mb-1">
                {studentsCount.count}+
              </div>
              <div className="text-[#64748B] text-sm uppercase tracking-wider font-bold">Students Taught</div>
            </div>
            <div className="text-center px-4" ref={passRate.ref}>
              <div className="font-number text-4xl md:text-[48px] font-bold text-[#F97316] mb-1">
                {passRate.count}%
              </div>
              <div className="text-[#64748B] text-sm uppercase tracking-wider font-bold">Success Rate</div>
            </div>
            <div className="text-center px-4" ref={notesCount.ref}>
              <div className="font-number text-4xl md:text-[48px] font-bold text-[#F97316] mb-1">
                {notesCount.count}+
              </div>
              <div className="text-[#64748B] text-sm uppercase tracking-wider font-bold">Notes Available</div>
            </div>
            <div className="text-center px-4" ref={yearsCount.ref}>
              <div className="font-number text-4xl md:text-[48px] font-bold text-[#F97316] mb-1">
                {yearsCount.count}+
              </div>
              <div className="text-[#64748B] text-sm uppercase tracking-wider font-bold">Years Experience</div>
            </div>
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {RECENT_RESULTS.map((result, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`bg-white rounded-2xl p-8 relative hover:-translate-y-2 transition-transform duration-300 ${
                result.highlight 
                  ? "border-2 border-[#F59E0B] shadow-lg" 
                  : "border border-gray-100 shadow-sm hover:shadow-md"
              }`}
            >
              {result.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#F59E0B] text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-md">
                  ⭐ Topper
                </div>
              )}
              
              <div className="text-center mb-6">
                <div className="font-number text-[36px] font-bold text-[#1E40AF] leading-none mb-2">
                  {result.percentage.replace('%', '')}
                  {result.percentage.includes('%') && <span className="text-2xl text-[#64748B]">%</span>}
                </div>
                <h3 className="font-bold text-xl text-[#0F1C3F]">{result.name}</h3>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center bg-gray-50 px-4 py-2 rounded-lg">
                  <span className="text-xs font-bold text-gray-500 uppercase">Class</span>
                  <span className="text-sm font-semibold text-[#0F1C3F]">{result.class}</span>
                </div>
                <div className="flex justify-between items-center bg-gray-50 px-4 py-2 rounded-lg">
                  <span className="text-xs font-bold text-gray-500 uppercase">Subject</span>
                  <span className="text-sm font-semibold text-[#0F1C3F]">{result.subject}</span>
                </div>
              </div>

              <div className="absolute bottom-4 right-4">
                <span className="text-xs font-bold text-gray-400">{result.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}