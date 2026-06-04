import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[#F4F7FE] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Images */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="relative z-10 w-4/5 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="/about-founder.png" 
                alt="Founder of Educare Academy" 
                className="w-full h-auto object-cover aspect-[3/4]"
              />
            </div>
            <div className="absolute top-1/4 right-0 w-3/5 rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-20 translate-x-4">
              <img 
                src="/about-students.png" 
                alt="Students studying" 
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 left-12 z-30 bg-white px-6 py-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#FFFBEB] flex items-center justify-center text-[#F59E0B]">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinelinejoin="round">
                  <path d="M12 15l-2 5l9-5l-9-5l2 5Z"/>
                  <circle cx="12" cy="8" r="4"/>
                </svg>
              </div>
              <div>
                <p className="text-sm text-gray-500 font-medium">Established</p>
                <p className="text-xl font-bold text-[#0F1C3F] font-serif">2009</p>
              </div>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -left-8 -top-8 w-32 h-32 bg-[radial-gradient(#1E40AF_2px,transparent_2px)] [background-size:16px_16px] opacity-20 -z-10" />
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          >
            <span className="text-[#1E40AF] uppercase tracking-[0.08em] font-bold text-[13px] mb-4 block" data-testid="about-label">
              WHO WE ARE
            </span>
            <h2 className="font-serif text-[#0F1C3F] text-4xl md:text-5xl font-bold mb-6 leading-tight">
              15 Years of Academic Excellence
            </h2>
            
            <div className="space-y-4 text-gray-600 mb-8 text-lg leading-relaxed">
              <p>
                At Educare Academy, we believe that every student has the potential to achieve greatness when provided with the right guidance, environment, and mentorship.
              </p>
              <p>
                Founded on the principles of personalized education, we have transitioned from a single classroom setup to one of the most trusted coaching institutes in the city, consistently producing top-tier results across all major boards and competitive examinations.
              </p>
            </div>

            <div className="bg-[#EFF6FF] border-l-4 border-[#1E40AF] p-6 rounded-r-xl mb-8">
              <p className="font-serif italic text-xl text-[#0F1C3F] mb-2">
                "Our goal is not just to teach subjects, but to ignite a lifelong passion for learning."
              </p>
              <p className="text-sm font-semibold text-[#1E40AF]">
                — Founder, Educare Academy
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div>
                <p className="font-number text-2xl font-bold text-[#0F1C3F]">15+ Years</p>
                <p className="text-sm text-gray-500 font-medium">Excellence</p>
              </div>
              <div>
                <p className="font-number text-2xl font-bold text-[#0F1C3F]">5,000+</p>
                <p className="text-sm text-gray-500 font-medium">Students</p>
              </div>
              <div>
                <p className="font-number text-2xl font-bold text-[#0F1C3F]">3</p>
                <p className="text-sm text-gray-500 font-medium">Branches</p>
              </div>
            </div>

            <a 
              href="#faculty" 
              className="inline-flex items-center text-[#1E40AF] font-bold hover:text-[#0F1C3F] transition-colors group"
              data-testid="meet-faculty-link"
            >
              Meet Our Faculty 
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
