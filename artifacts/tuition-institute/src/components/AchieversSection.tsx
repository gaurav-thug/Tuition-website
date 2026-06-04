import { motion } from "framer-motion";

const ACHIEVERS = [
  {
    name: "Arjun Mehta",
    role: "IIT Bombay — Computer Science",
    achievement: "JEE Advanced AIR 284",
    description: "Studied with us for 2 years. Cracked JEE Advanced in first attempt.",
    year: "Batch 2022",
    tag: "IIT",
    tagColor: "#1E40AF"
  },
  {
    name: "Priya Gupta",
    role: "MBBS — AIIMS Delhi",
    achievement: "NEET AIR 412",
    description: "Started NEET prep with Educare in Class 11. Secured AIIMS Delhi.",
    year: "Batch 2023",
    tag: "NEET",
    tagColor: "#10B981"
  },
  {
    name: "Rohit Sharma",
    role: "Software Engineer — Google",
    achievement: "Placed at Google India",
    description: "Our Class 12 topper who went on to complete B.Tech and join Google.",
    year: "Batch 2018",
    tag: "Alumni",
    tagColor: "#F97316"
  },
  {
    name: "Sneha Agarwal",
    role: "Chartered Accountant",
    achievement: "CA Final — All India Rank 18",
    description: "Foundation built in our Commerce batch led to this remarkable achievement.",
    year: "Batch 2019",
    tag: "Commerce",
    tagColor: "#8B5CF6"
  },
  {
    name: "Vivek Mishra",
    role: "IPS Officer — Maharashtra Cadre",
    achievement: "UPSC CSE 2023 — Rank 89",
    description: "Strong academics from school gave him the foundation for civil services.",
    year: "Batch 2015",
    tag: "UPSC",
    tagColor: "#F59E0B"
  },
  {
    name: "Kavya Reddy",
    role: "Doctor — Lady Hardinge Medical College",
    achievement: "NEET AIR 820",
    description: "Quiet, hardworking student who secured a top government medical seat.",
    year: "Batch 2021",
    tag: "NEET",
    tagColor: "#10B981"
  }
];

export default function AchieversSection() {
  return (
    <section id="achievers" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#F97316] uppercase tracking-[0.08em] font-bold text-[13px] mb-4 block">
            OUR PRIDE
          </span>
          <h2 className="font-serif text-[#0F1C3F] text-4xl md:text-5xl font-bold mb-6">
            Students Who Made It Big
          </h2>
          <p className="text-gray-600 text-lg">
            Our alumni have gone on to achieve incredible things. Their success is our greatest reward.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ACHIEVERS.map((achiever, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-white rounded-2xl border border-gray-100 shadow-md p-6 relative group hover:-translate-y-[6px] hover:shadow-xl transition-all duration-300 ease-out"
            >
              {/* Top Section */}
              <div className="flex items-center gap-4 mb-6">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center shrink-0 border-2 border-white shadow-sm"
                  style={{ backgroundColor: `${achiever.tagColor}33`, color: achiever.tagColor }}
                >
                  <span className="text-2xl font-bold font-serif">{achiever.name.charAt(0)}</span>
                </div>
                <div>
                  <h3 className="font-bold text-[#0F1C3F] text-lg">{achiever.name}</h3>
                  <p className="text-[#64748B] text-sm font-medium">{achiever.role}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{achiever.year}</p>
                </div>
              </div>

              {/* Middle */}
              <div 
                className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 w-full text-center"
                style={{ backgroundColor: `${achiever.tagColor}1A`, color: achiever.tagColor }}
              >
                🏆 {achiever.achievement}
              </div>

              {/* Bottom */}
              <p className="text-[#64748B] text-sm italic leading-relaxed mb-4">
                "{achiever.description}"
              </p>

              {/* Corner Tag */}
              <div 
                className="absolute bottom-4 right-4 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
                style={{ backgroundColor: achiever.tagColor, color: "white" }}
              >
                {achiever.tag}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}