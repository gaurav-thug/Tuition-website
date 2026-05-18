import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FaWhatsapp } from "react-icons/fa";

const FAQS = [
  {
    question: "What is the batch size?",
    answer: "We strictly maintain a maximum batch size of 12-15 students. This ensures that our faculty can provide personalized attention to every student and effectively monitor their individual progress."
  },
  {
    question: "Do you provide study materials?",
    answer: "Yes, we provide comprehensive, expertly crafted study materials for all subjects. These include detailed notes, formula sheets, chapter-wise question banks, and previous years' papers."
  },
  {
    question: "How do I enroll my child?",
    answer: "You can start by booking a free demo class through our website or calling us directly. After the demo, our academic counselor will guide you through the simple enrollment and fee payment process."
  },
  {
    question: "What boards do you cover?",
    answer: "We provide specialized coaching for CBSE, ICSE, and major State Boards, ensuring that the curriculum strictly aligns with the respective board's syllabus and examination pattern."
  },
  {
    question: "Are demo classes available?",
    answer: "Yes, we offer one free demo class for every subject before enrollment. This helps the student understand our teaching methodology and get comfortable with the faculty."
  },
  {
    question: "How do you track student progress?",
    answer: "We conduct weekly topic-wise tests and monthly full-syllabus mock exams. Detailed performance analytics and personalized feedback reports are shared with parents regularly."
  },
  {
    question: "What are the fee payment options?",
    answer: "Fees can be paid monthly, quarterly, or annually. We accept all major payment methods including UPI, Credit/Debit Cards, Net Banking, and Cheques. Special discounts apply for annual upfront payments."
  },
  {
    question: "Do you offer online doubt support?",
    answer: "Absolutely. Along with in-person doubt clearing sessions, students get access to our dedicated WhatsApp doubt-solving group where teachers respond to queries beyond classroom hours."
  }
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20">
          
          {/* Left Column */}
          <div>
            <div className="sticky top-32">
              <span className="text-[#1A56DB] uppercase tracking-[0.08em] font-bold text-[13px] mb-4 block">
                COMMON QUESTIONS
              </span>
              <h2 className="font-serif text-[#0D1B3E] text-4xl md:text-5xl font-bold mb-6">
                Everything You Need to Know
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Find answers to the most commonly asked questions about our teaching methodology, admissions, and facilities.
              </p>
              
              <div className="bg-[#F4F7FE] p-8 rounded-2xl border border-blue-100">
                <h3 className="font-bold text-[#0D1B3E] text-xl mb-2">Still have questions?</h3>
                <p className="text-gray-600 mb-6 text-sm">
                  Our academic counselors are ready to help you make the best decision for your child's future.
                </p>
                <a 
                  href="https://wa.me/919876543210" 
                  className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#25D366] text-white font-bold hover:bg-[#20bd5a] transition-colors"
                >
                  <FaWhatsapp className="text-xl" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Accordion */}
          <div>
            <Accordion type="single" collapsible className="w-full space-y-4">
              {FAQS.map((faq, idx) => (
                <AccordionItem 
                  key={idx} 
                  value={`item-${idx}`}
                  className="bg-white border border-gray-200 rounded-xl px-6 data-[state=open]:border-[#1A56DB] data-[state=open]:border-l-4 data-[state=open]:shadow-md transition-all duration-300"
                >
                  <AccordionTrigger className="text-left font-bold text-[#0D1B3E] text-lg hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pb-6 text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

        </div>
      </div>
    </section>
  );
}
