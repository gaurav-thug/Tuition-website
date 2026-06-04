import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const NOTES_DATA = [
  {
    id: "cbse",
    label: "CBSE",
    color: "#1E40AF",
    icon: "📚",
    classes: [
      {
        label: "Class 9",
        subjects: [
          {
            name: "Mathematics",
            items: [
              { title: "Chapter-wise Notes", link: "#" },
              { title: "Chapter-wise Questions", link: "#" }
            ]
          },
          {
            name: "Science",
            items: [
              { title: "Chapter-wise Notes", link: "#" },
              { title: "Chapter-wise Questions", link: "#" }
            ]
          }
        ]
      },
      {
        label: "Class 10",
        subjects: [
          {
            name: "Mathematics",
            items: [
              { title: "Chapter-wise Notes", link: "#" },
              { title: "Chapter-wise Questions", link: "#" }
            ]
          },
          {
            name: "Science",
            items: [
              { title: "Chapter-wise Notes", link: "#" },
              { title: "Chapter-wise Questions", link: "#" }
            ]
          }
        ]
      },
      {
        label: "Class 11",
        subjects: [
          { name: "Physics", items: [{ title: "Chapter-wise Notes", link: "#" }, { title: "Chapter-wise Questions", link: "#" }] },
          { name: "Chemistry", items: [{ title: "Chapter-wise Notes", link: "#" }, { title: "Chapter-wise Questions", link: "#" }] },
          { name: "Mathematics", items: [{ title: "Chapter-wise Notes", link: "#" }, { title: "Chapter-wise Questions", link: "#" }] },
          { name: "Biology", items: [{ title: "Chapter-wise Notes", link: "#" }, { title: "Chapter-wise Questions", link: "#" }] }
        ]
      },
      {
        label: "Class 12",
        subjects: [
          { name: "Physics", items: [{ title: "Chapter-wise Notes", link: "#" }, { title: "Chapter-wise Questions", link: "#" }] },
          { name: "Chemistry", items: [{ title: "Chapter-wise Notes", link: "#" }, { title: "Chapter-wise Questions", link: "#" }] },
          { name: "Mathematics", items: [{ title: "Chapter-wise Notes", link: "#" }, { title: "Chapter-wise Questions", link: "#" }] },
          { name: "Biology", items: [{ title: "Chapter-wise Notes", link: "#" }, { title: "Chapter-wise Questions", link: "#" }] }
        ]
      }
    ]
  },
  {
    id: "jee",
    label: "JEE",
    color: "#F97316",
    icon: "🎯",
    classes: [
      {
        label: "JEE Mains & Advanced",
        subjects: [
          { name: "Physics", items: [{ title: "Chapter-wise Notes", link: "#" }, { title: "Chapter-wise Questions", link: "#" }] },
          { name: "Chemistry", items: [{ title: "Chapter-wise Notes", link: "#" }, { title: "Chapter-wise Questions", link: "#" }] },
          { name: "Mathematics", items: [{ title: "Chapter-wise Notes", link: "#" }, { title: "Chapter-wise Questions", link: "#" }] }
        ]
      }
    ]
  },
  {
    id: "neet",
    label: "NEET",
    color: "#10B981",
    icon: "🏥",
    classes: [
      {
        label: "NEET UG",
        subjects: [
          { name: "Physics", items: [{ title: "Chapter-wise Notes", link: "#" }, { title: "Chapter-wise Questions", link: "#" }] },
          { name: "Chemistry", items: [{ title: "Chapter-wise Notes", link: "#" }, { title: "Chapter-wise Questions", link: "#" }] },
          { name: "Biology", items: [{ title: "Chapter-wise Notes", link: "#" }, { title: "Chapter-wise Questions", link: "#" }] }
        ]
      }
    ]
  }
];

const getSubjectIcon = (name: string) => {
  if (name.includes("Math")) return "📐";
  if (name.includes("Science") || name.includes("Physics") || name.includes("Chemistry")) return "🔬";
  if (name.includes("Biology")) return "📗";
  return "📘";
};

export default function NotesSection() {
  const [activeTab, setActiveTab] = useState(NOTES_DATA[0].id);
  const activeCategory = NOTES_DATA.find(cat => cat.id === activeTab) || NOTES_DATA[0];

  return (
    <section id="notes" className="py-24 bg-[#F8FAFF]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-[#F97316] uppercase tracking-[0.08em] font-bold text-[13px] mb-4 block">
            STUDY MATERIALS
          </span>
          <h2 className="font-serif text-[#0F1C3F] text-4xl md:text-5xl font-bold mb-6">
            Chapter-wise Notes & Practice Questions
          </h2>
          <p className="text-gray-600 text-lg">
            Download free chapter-wise notes and practice questions. PDF links will be updated regularly.
          </p>
        </motion.div>

        {/* Top Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {NOTES_DATA.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className="flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-lg transition-all"
              style={{
                backgroundColor: activeTab === cat.id ? cat.color : "#ffffff",
                color: activeTab === cat.id ? "#ffffff" : "#64748B",
                border: activeTab === cat.id ? `2px solid ${cat.color}` : "2px solid #E2E8F0",
                boxShadow: activeTab === cat.id ? `0 10px 25px -5px ${cat.color}40` : "none"
              }}
            >
              <span>{cat.icon}</span>
              {cat.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="max-w-5xl mx-auto bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <Accordion type="multiple" defaultValue={[activeCategory.classes[0].label]} className="space-y-4">
                {activeCategory.classes.map((cls, idx) => (
                  <AccordionItem 
                    key={idx} 
                    value={cls.label}
                    className="border border-gray-100 rounded-2xl px-6 data-[state=open]:bg-gray-50/50 transition-colors"
                  >
                    <AccordionTrigger className="text-xl font-bold text-[#0F1C3F] hover:no-underline py-6">
                      {cls.label}
                    </AccordionTrigger>
                    <AccordionContent className="pb-8">
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
                        {cls.subjects.map((subject, sIdx) => (
                          <div key={sIdx} className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition-shadow">
                            <h4 className="font-bold text-[#0F1C3F] text-lg mb-4 flex items-center gap-2">
                              <span>{getSubjectIcon(subject.name)}</span>
                              {subject.name}
                            </h4>
                            <div className="flex flex-col gap-3">
                              {subject.items.map((item, iIdx) => (
                                <a
                                  key={iIdx}
                                  href={item.link}
                                  className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-full border border-[#1E40AF]/20 text-[#1E40AF] text-sm font-semibold hover:bg-[#1E40AF] hover:text-white transition-colors"
                                >
                                  <Download size={16} />
                                  {item.title}
                                </a>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-12 text-center text-gray-500 italic text-sm">
          💡 PDF links are updated regularly. Bookmark this page for latest materials.
        </div>
      </div>
    </section>
  );
}