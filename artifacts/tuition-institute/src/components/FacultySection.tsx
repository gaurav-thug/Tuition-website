import { motion } from "framer-motion";

const FACULTY = [
  {
    id: 1,
    name: "Mr. Rajesh Kumar",
    subject: "Mathematics",
    qualification: "M.Sc. Mathematics, B.Ed",
    experience: "15+ Years Experience",
    bio: "Expert in simplifying complex algebraic and calculus concepts for competitive exams.",
    image: "/faculty-math.png",
    color: "#1A56DB"
  },
  {
    id: 2,
    name: "Dr. Priya Sharma",
    subject: "Physics",
    qualification: "Ph.D. in Physics",
    experience: "12+ Years Experience",
    bio: "Passionate about practical applications of physics in everyday life and technology.",
    image: "/faculty-science.png",
    color: "#10B981"
  },
  {
    id: 3,
    name: "Ms. Anita Verma",
    subject: "English",
    qualification: "M.A. English Literature",
    experience: "10+ Years Experience",
    bio: "Focuses on comprehensive grammar mastery and advanced writing skills.",
    image: "/faculty-english.png",
    color: "#F59E0B"
  },
  {
    id: 4,
    name: "Mr. Sandeep Singh",
    subject: "Commerce",
    qualification: "M.Com, CA Inter",
    experience: "8+ Years Experience",
    bio: "Specializes in Accountancy and Business Studies with real-world corporate insights.",
    image: "/faculty-commerce.png",
    color: "#EC4899"
  },
  {
    id: 5,
    name: "Ms. Neha Gupta",
    subject: "Biology",
    qualification: "M.Sc. Zoology",
    experience: "9+ Years Experience",
    bio: "Brings biology to life with detailed diagrams and concept-mapping techniques.",
    image: "/faculty-biology.png",
    color: "#8B5CF6"
  },
  {
    id: 6,
    name: "Mr. Arun Mehta",
    subject: "Social Studies",
    qualification: "M.A. History, B.Ed",
    experience: "14+ Years Experience",
    bio: "Transforms history and geography into engaging storytelling sessions.",
    image: "/faculty-sst.png",
    color: "#EF4444"
  }
];

export default function FacultySection() {
  return (
    <section id="faculty" className="py-24 bg-[#F4F7FE]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#1A56DB] uppercase tracking-[0.08em] font-bold text-[13px] mb-4 block">
            MEET THE TEAM
          </span>
          <h2 className="font-serif text-[#0D1B3E] text-4xl md:text-5xl font-bold mb-6">
            Learn from the Best — Experienced, Passionate Educators
          </h2>
          <p className="text-gray-600 text-lg">
            Our faculty consists of highly qualified professionals dedicated to student success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FACULTY.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group"
              style={{
                borderBottom: `4px solid ${member.color}`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div className="p-8 text-center relative overflow-hidden">
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                  style={{ backgroundColor: member.color }}
                />
                
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <div 
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-20 transition-all duration-300 scale-110"
                    style={{ backgroundColor: member.color }}
                  />
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full border-4 border-white shadow-md relative z-10"
                  />
                </div>
                
                <h3 className="text-xl font-bold text-[#0D1B3E] mb-2">{member.name}</h3>
                
                <span 
                  className="inline-block px-3 py-1 rounded-full text-xs font-bold mb-4"
                  style={{ backgroundColor: `${member.color}15`, color: member.color }}
                >
                  {member.subject}
                </span>
                
                <div className="text-sm text-gray-500 font-medium mb-1">{member.qualification}</div>
                <div className="text-sm text-[#1A56DB] font-bold mb-4">{member.experience}</div>
                
                <p className="text-sm text-gray-600 line-clamp-2">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
