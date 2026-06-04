import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

function useCountUp(end: number, duration: number = 1500, startOnView: boolean = true) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  
  useEffect(() => {
    if (startOnView && !inView) return;
    
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // easeOutExpo
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeProgress * end));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration, inView, startOnView]);

  return { count, ref };
}

export default function HeroSection() {
  const studentsCount = useCountUp(5000);
  const yearsCount = useCountUp(15);
  const resultsCount = useCountUp(98);
  const facultyCount = useCountUp(12);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center bg-[#0F1C3F] overflow-hidden"
    >
      {/* Background gradients and patterns */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 80% 20%, rgba(30,64,175,0.4) 0%, transparent 60%)",
        }}
      />
      <div 
        className="absolute inset-0 z-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1'/%3E%3C/g%3E%3C/svg%3E")`
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10 flex-1 flex flex-col justify-center">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center mb-16">
          
          {/* Left Content */}
          <motion.div 
            className="lg:col-span-7"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-medium">
                🏆 Trusted by 5,000+ Families
              </span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="font-serif text-white text-5xl md:text-6xl lg:text-[72px] leading-[1.1] font-bold mb-6"
            >
              Unlock Your Child's Academic Potential at Educare Academy
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-[#93C5FD] text-lg md:text-xl font-medium mb-8 max-w-2xl"
            >
              Expert coaching for Classes 6–12, JEE, and NEET | CBSE | ICSE | State Board. Small batches. Big results.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white text-sm">
                <span className="text-[#10B981]">✓</span> Experienced Faculty
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white text-sm">
                <span className="text-[#10B981]">✓</span> Small Batches (Max 15)
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white text-sm">
                <span className="text-[#10B981]">✓</span> Result-Focused Learning
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white text-sm">
                <span className="text-[#10B981]">✓</span> Free Notes Provided
              </span>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-4">
              <a href="tel:+919876543210" className="px-8 py-4 rounded-full bg-white text-[#0F1C3F] font-bold hover:bg-gray-100 transition-colors flex items-center gap-2">
                📞 Call Now
              </a>
              <a href="https://wa.me/919876543210" className="px-8 py-4 rounded-full bg-[#25D366] text-white font-bold hover:bg-[#20bd5a] transition-colors flex items-center gap-2">
                💬 WhatsApp Us
              </a>
              <a href="#contact" className="px-8 py-4 rounded-full border-2 border-white text-white font-bold hover:bg-white/10 transition-colors flex items-center gap-2">
                📅 Book Free Demo
              </a>
            </motion.div>
            
            <motion.p variants={itemVariants} className="text-[#93C5FD] text-sm">
              No registration fee for demo class • Limited seats
            </motion.p>
          </motion.div>

          {/* Right Visual */}
          <motion.div 
            className="lg:col-span-5 relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative rounded-[24px] overflow-hidden shadow-2xl border border-white/10">
              <img 
                src="/hero-classroom.png" 
                alt="Educare Academy Classroom" 
                className="w-full h-auto object-cover aspect-[4/5] md:aspect-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1C3F]/60 to-transparent mix-blend-multiply" />
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-xl">
              <p className="text-white font-bold">98% Parent Satisfaction ⭐</p>
            </div>
            
            <div className="absolute -top-4 -right-4 bg-[#1E40AF] text-white px-6 py-2 rounded-full shadow-lg font-medium border border-white/20">
              Science | Math | English
            </div>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div 
          className="w-full bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-xl mt-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
            <div className="text-center px-4" ref={studentsCount.ref}>
              <div className="font-number text-4xl md:text-[48px] font-bold text-[#F97316] mb-1">
                {studentsCount.count}+
              </div>
              <div className="text-[#94A3B8] text-sm uppercase tracking-wider font-semibold">Students</div>
            </div>
            <div className="text-center px-4" ref={yearsCount.ref}>
              <div className="font-number text-4xl md:text-[48px] font-bold text-[#F97316] mb-1">
                {yearsCount.count}+
              </div>
              <div className="text-[#94A3B8] text-sm uppercase tracking-wider font-semibold">Years</div>
            </div>
            <div className="text-center px-4" ref={resultsCount.ref}>
              <div className="font-number text-4xl md:text-[48px] font-bold text-[#F97316] mb-1">
                {resultsCount.count}%
              </div>
              <div className="text-[#94A3B8] text-sm uppercase tracking-wider font-semibold">Results</div>
            </div>
            <div className="text-center px-4" ref={facultyCount.ref}>
              <div className="font-number text-4xl md:text-[48px] font-bold text-[#F97316] mb-1">
                {facultyCount.count}+
              </div>
              <div className="text-[#94A3B8] text-sm uppercase tracking-wider font-semibold">Faculty</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
