import { motion } from "framer-motion";
import { Star, CheckCircle } from "lucide-react";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Vikram Sharma",
    role: "Parent of Class 10 Student",
    text: "The structured approach and regular parent-teacher interactions gave us complete peace of mind. My son's confidence in Math has improved tremendously.",
    image: "/testimonial-1.png",
    rating: 5
  },
  {
    id: 2,
    name: "Riya Patel",
    role: "Class 12 CBSE Topper",
    text: "The faculty here doesn't just teach from the textbook. They explain concepts with real-world examples which made Physics my favorite subject.",
    image: "/testimonial-2.png",
    rating: 5
  },
  {
    id: 3,
    name: "Sanjay Gupta",
    role: "Parent of Class 8 Student",
    text: "Enrolling our daughter at BrightMinds was the best decision. The small batch size ensures she gets the attention she needs to clarify all her doubts.",
    image: "/testimonial-1.png",
    rating: 5
  },
  {
    id: 4,
    name: "Aditya Singh",
    role: "JEE Aspirant",
    text: "The competitive exam coaching is top-notch. The mock tests and detailed analysis helped me identify my weak areas and improve my speed significantly.",
    image: "/testimonial-2.png",
    rating: 5
  },
  {
    id: 5,
    name: "Meera Reddy",
    role: "Class 10 State Board",
    text: "I used to dread Social Studies, but the way it's taught here makes it so interesting. I actually look forward to the classes now!",
    image: "/testimonial-2.png",
    rating: 5
  }
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-[#F8FAFF]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#1E40AF] uppercase tracking-[0.08em] font-bold text-[13px] mb-4 block">
            WHAT THEY SAY
          </span>
          <h2 className="font-serif text-[#0F1C3F] text-4xl md:text-5xl font-bold mb-6">
            Trusted by 5,000+ Students and Their Families
          </h2>
          
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
            <span className="font-bold text-[#0F1C3F]">4.9/5</span>
            <div className="flex text-[#F59E0B]">
              <Star size={16} fill="currentColor" stroke="none" />
              <Star size={16} fill="currentColor" stroke="none" />
              <Star size={16} fill="currentColor" stroke="none" />
              <Star size={16} fill="currentColor" stroke="none" />
              <Star size={16} fill="currentColor" stroke="none" />
            </div>
            <span className="text-sm text-gray-500 font-medium ml-2">Google Reviews</span>
          </div>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {/* Video Testimonial Placeholder */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="break-inside-avoid relative rounded-[20px] overflow-hidden shadow-lg aspect-square md:aspect-[4/5] bg-gray-900 group cursor-pointer"
          >
            <img 
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=800" 
              alt="Video Testimonial" 
              className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mb-4 border border-white/40 group-hover:scale-110 transition-transform duration-300">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <h3 className="text-white font-bold text-lg">Watch Success Story</h3>
              <p className="text-white/80 text-sm mt-1">Journey from 60% to 95%</p>
            </div>
          </motion.div>

          {TESTIMONIALS.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="break-inside-avoid bg-white p-8 rounded-[20px] shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300 relative"
            >
              <div className="absolute top-6 right-6 text-[#1E40AF]/10">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              
              <div className="flex text-[#F59E0B] mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" stroke="none" />
                ))}
              </div>
              
              <p className="font-serif italic text-gray-700 text-lg leading-relaxed mb-6 relative z-10">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-100">
                  {/* using unsplash placeholder as fallback since generate_image limit reached */}
                  <img src={testimonial.image} onError={(e) => { e.currentTarget.src = "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=100&q=80" }} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0F1C3F] flex items-center gap-1">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs text-gray-500 font-medium flex items-center gap-1">
                    {testimonial.role} <CheckCircle size={12} className="text-[#10B981]" />
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
