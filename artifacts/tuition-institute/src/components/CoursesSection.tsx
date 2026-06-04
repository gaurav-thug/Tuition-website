import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, FlaskConical, BookOpen, Globe2, Briefcase, Award } from "lucide-react";

const CATEGORIES = ["All", "Classes 6–8", "Classes 9–10", "Classes 11–12", "Competitive Exams", "Foundation"];

const COURSES = [
  {
    id: 1,
    subject: "Mathematics",
    categories: ["All", "Classes 6–8", "Classes 9–10", "Classes 11–12", "Foundation"],
    boards: ["CBSE", "ICSE", "State Board"],
    classes: "Classes 6 to 12",
    icon: Calculator,
    color: "#1E40AF",
    bgColor: "#EFF6FF",
    highlights: ["Concept-based teaching", "Weekly assessments", "Previous year papers"]
  },
  {
    id: 2,
    subject: "Science (PCB)",
    categories: ["All", "Classes 9–10", "Classes 11–12", "Foundation"],
    boards: ["CBSE", "ICSE", "State Board"],
    classes: "Classes 9 to 12",
    icon: FlaskConical,
    color: "#10B981",
    bgColor: "#ECFDF5",
    highlights: ["Practical demonstrations", "Detailed notes", "Doubt clearing sessions"]
  },
  {
    id: 3,
    subject: "English",
    categories: ["All", "Classes 6–8", "Classes 9–10", "Classes 11–12"],
    boards: ["CBSE", "ICSE", "State Board"],
    classes: "Classes 6 to 12",
    icon: BookOpen,
    color: "#F59E0B",
    bgColor: "#FFFBEB",
    highlights: ["Grammar focus", "Writing skills", "Literature analysis"]
  },
  {
    id: 4,
    subject: "Social Studies",
    categories: ["All", "Classes 6–8", "Classes 9–10"],
    boards: ["CBSE", "ICSE", "State Board"],
    classes: "Classes 6 to 10",
    icon: Globe2,
    color: "#8B5CF6",
    bgColor: "#F5F3FF",
    highlights: ["Map work practice", "Timeline mastery", "Answer writing techniques"]
  },
  {
    id: 5,
    subject: "Commerce",
    categories: ["All", "Classes 11–12"],
    boards: ["CBSE", "State Board"],
    classes: "Classes 11 to 12",
    icon: Briefcase,
    color: "#EC4899",
    bgColor: "#FDF2F8",
    highlights: ["Accounts & Economics", "Business Studies", "Real-world case studies"]
  },
  {
    id: 6,
    subject: "Competitive Exam Prep",
    categories: ["All", "Competitive Exams"],
    boards: ["JEE", "NEET", "Olympiads"],
    classes: "Classes 9 to 12",
    icon: Award,
    color: "#EF4444",
    bgColor: "#FEF2F2",
    highlights: ["Advanced problem solving", "Mock test series", "Time management strategies"]
  }
];

export default function CoursesSection() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredCourses = COURSES.filter(course => 
    course.categories.includes(activeTab)
  );

  return (
    <section id="courses" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#1E40AF] uppercase tracking-[0.08em] font-bold text-[13px] mb-4 block">
            WHAT WE TEACH
          </span>
          <h2 className="font-serif text-[#0F1C3F] text-4xl md:text-5xl font-bold mb-6">
            Comprehensive Coaching Across All Subjects & Boards
          </h2>
          <p className="text-gray-600 text-lg">
            Structured curriculums designed to help students master core concepts and excel in their academics.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex overflow-x-auto pb-4 mb-8 hide-scrollbar justify-start md:justify-center gap-2">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                activeTab === category
                  ? "bg-[#0F1C3F] text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
              data-testid={`tab-${category.replace(/\s+/g, '-').toLowerCase()}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredCourses.map(course => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={course.id}
                className="group relative bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300"
                style={{
                  transform: "translateY(0)",
                  borderTop: `4px solid ${course.color}`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px) scale(1.01)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                }}
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: course.bgColor, color: course.color }}
                >
                  <course.icon size={24} />
                </div>
                
                <h3 className="text-2xl font-bold text-[#0F1C3F] mb-3">{course.subject}</h3>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-bold rounded-md">
                    {course.classes}
                  </span>
                  {course.boards.map(board => (
                    <span key={board} className="px-3 py-1 bg-blue-50 text-[#1E40AF] text-xs font-bold rounded-md">
                      {board}
                    </span>
                  ))}
                </div>

                <ul className="space-y-3 mb-8">
                  {course.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-600">
                      <svg className="w-5 h-5 text-[#10B981] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {highlight}
                    </li>
                  ))}
                </ul>

                <a 
                  href="#contact" 
                  className="inline-flex items-center text-sm font-bold transition-colors"
                  style={{ color: course.color }}
                >
                  View Details
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
