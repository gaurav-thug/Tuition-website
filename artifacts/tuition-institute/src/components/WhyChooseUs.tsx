import { Users, BookOpenCheck, Target, TrendingUp, MonitorPlay, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const FEATURES = [
  {
    title: "Small Batch Sizes",
    desc: "Max 12–15 students per batch ensuring nobody is left behind.",
    icon: Users
  },
  {
    title: "Expert Faculty",
    desc: "Learn from IIT/NIT qualified and highly experienced teachers.",
    icon: BookOpenCheck
  },
  {
    title: "Personalized Attention",
    desc: "Individual progress tracking and tailored doubt-clearing sessions.",
    icon: Target
  },
  {
    title: "Proven Results",
    desc: "98%+ of our students consistently achieve their academic targets.",
    icon: TrendingUp
  },
  {
    title: "Modern Infrastructure",
    desc: "Fully air-conditioned classrooms equipped with smart boards.",
    icon: MonitorPlay
  },
  {
    title: "Parent Updates",
    desc: "Regular performance reports and transparent communication.",
    icon: MessageCircle
  }
];

export default function WhyChooseUs() {
  return (
    <section id="why" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#1A56DB] uppercase tracking-[0.08em] font-bold text-[13px] mb-4 block">
            OUR ADVANTAGE
          </span>
          <h2 className="font-serif text-[#0D1B3E] text-4xl md:text-5xl font-bold mb-6">
            The Smart Choice for Your Child's Academic Success
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-[32px] overflow-hidden shadow-2xl relative">
              <img 
                src="/why-classroom.png" 
                alt="Modern Classroom Facility" 
                className="w-full h-auto aspect-square md:aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0D1B3E]/40 to-transparent" />
            </div>

            {/* Floating Award Badge */}
            <div className="absolute -bottom-6 -right-6 md:right-8 bg-white/80 backdrop-blur-xl border border-white p-6 rounded-2xl shadow-xl max-w-[240px]">
              <div className="w-12 h-12 bg-gradient-to-br from-[#F59E0B] to-yellow-300 rounded-full flex items-center justify-center mb-3 shadow-lg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
                  <path d="M4 22h16"/>
                  <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
                  <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
                  <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
                </svg>
              </div>
              <h4 className="text-[#0D1B3E] font-bold leading-tight">Top Coaching Institute</h4>
              <p className="text-sm text-gray-500 mt-1 font-medium">City Award 2023</p>
            </div>
          </motion.div>

          {/* Right Features */}
          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
            {FEATURES.map((feature, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                <div className="w-14 h-14 rounded-2xl bg-[#EFF6FF] text-[#1A56DB] flex items-center justify-center mb-5 shadow-sm">
                  <feature.icon size={28} strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-[#0D1B3E] mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
