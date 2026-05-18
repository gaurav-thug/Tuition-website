import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useSubmitInquiry } from "@workspace/api-client-react";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { FaInstagram, FaFacebookF, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";

const inquirySchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  studentClass: z.string().min(1, "Please select a class"),
  subject: z.string().min(1, "Please select a subject"),
  branch: z.string().optional(),
  message: z.string().optional(),
});

type InquiryFormValues = z.infer<typeof inquirySchema>;

export default function ContactSection() {
  const { toast } = useToast();
  const submitInquiry = useSubmitInquiry();

  const form = useForm<InquiryFormValues>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      fullName: "",
      phone: "",
      studentClass: "",
      subject: "",
      branch: "",
      message: "",
    },
  });

  const onSubmit = (data: InquiryFormValues) => {
    submitInquiry.mutate(
      { data },
      {
        onSuccess: () => {
          toast({
            title: "Success!",
            description: "Thank you! We'll contact you within 24 hours.",
            variant: "default",
          });
          form.reset();
        },
        onError: () => {
          toast({
            title: "Error",
            description: "Failed to submit inquiry. Please try again or call us.",
            variant: "destructive",
          });
        },
      }
    );
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div 
        className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#EFF6FF] to-transparent rounded-full blur-3xl opacity-50 -z-10 pointer-events-none"
        style={{ transform: "translate(30%, -30%)" }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#1A56DB] uppercase tracking-[0.08em] font-bold text-[13px] mb-4 block">
            GET IN TOUCH
          </span>
          <h2 className="font-serif text-[#0D1B3E] text-4xl md:text-5xl font-bold mb-6">
            Start Your Child's Success Journey Today
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-start max-w-6xl mx-auto">
          
          {/* Left Form */}
          <div className="bg-white rounded-[24px] p-8 md:p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-gray-100 relative">
            <h3 className="text-2xl font-bold text-[#0D1B3E] mb-6">Book a Free Demo Class</h3>
            
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5" data-testid="contact-form">
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#0D1B3E]">Full Name <span className="text-red-500">*</span></label>
                  <input 
                    {...form.register("fullName")}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:border-[#1A56DB] focus:ring-2 focus:ring-[#1A56DB]/20 outline-none transition-all"
                    placeholder="Enter parent or student name"
                  />
                  {form.formState.errors.fullName && (
                    <p className="text-red-500 text-xs mt-1">{form.formState.errors.fullName.message}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#0D1B3E]">Phone Number <span className="text-red-500">*</span></label>
                  <input 
                    {...form.register("phone")}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:border-[#1A56DB] focus:ring-2 focus:ring-[#1A56DB]/20 outline-none transition-all"
                    placeholder="10-digit mobile number"
                  />
                  {form.formState.errors.phone && (
                    <p className="text-red-500 text-xs mt-1">{form.formState.errors.phone.message}</p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#0D1B3E]">Student Class <span className="text-red-500">*</span></label>
                  <select 
                    {...form.register("studentClass")}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:border-[#1A56DB] focus:ring-2 focus:ring-[#1A56DB]/20 outline-none transition-all appearance-none"
                  >
                    <option value="" disabled>Select Class</option>
                    <option value="Class 6">Class 6</option>
                    <option value="Class 7">Class 7</option>
                    <option value="Class 8">Class 8</option>
                    <option value="Class 9">Class 9</option>
                    <option value="Class 10">Class 10</option>
                    <option value="Class 11">Class 11</option>
                    <option value="Class 12">Class 12</option>
                  </select>
                  {form.formState.errors.studentClass && (
                    <p className="text-red-500 text-xs mt-1">{form.formState.errors.studentClass.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#0D1B3E]">Subject / Course <span className="text-red-500">*</span></label>
                  <select 
                    {...form.register("subject")}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:border-[#1A56DB] focus:ring-2 focus:ring-[#1A56DB]/20 outline-none transition-all appearance-none"
                  >
                    <option value="" disabled>Select Subject</option>
                    <option value="Mathematics">Mathematics</option>
                    <option value="Science (PCB)">Science (PCB)</option>
                    <option value="English">English</option>
                    <option value="Social Studies">Social Studies</option>
                    <option value="Commerce">Commerce</option>
                    <option value="Competitive Exam">Competitive Exam Prep</option>
                  </select>
                  {form.formState.errors.subject && (
                    <p className="text-red-500 text-xs mt-1">{form.formState.errors.subject.message}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-[#0D1B3E]">Preferred Branch</label>
                <select 
                  {...form.register("branch")}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:border-[#1A56DB] focus:ring-2 focus:ring-[#1A56DB]/20 outline-none transition-all appearance-none"
                >
                  <option value="">Select Branch (Optional)</option>
                  <option value="Main Branch">Main Branch - Sector 18</option>
                  <option value="Branch 2">Branch 2 - MG Road</option>
                  <option value="Branch 3">Branch 3 - Civil Lines</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-[#0D1B3E]">Message</label>
                <textarea 
                  {...form.register("message")}
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-transparent focus:bg-white focus:border-[#1A56DB] focus:ring-2 focus:ring-[#1A56DB]/20 outline-none transition-all resize-none"
                  placeholder="Any specific requirements or questions?"
                />
              </div>

              <button 
                type="submit" 
                disabled={submitInquiry.isPending}
                className="w-full h-14 rounded-xl bg-[#1A56DB] text-white font-bold flex items-center justify-center gap-2 hover:bg-[#0D1B3E] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                data-testid="button-submit-inquiry"
              >
                {submitInquiry.isPending ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  <>Submit Inquiry <ArrowRight size={18} /></>
                )}
              </button>
            </form>
          </div>

          {/* Right Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-[#0D1B3E] mb-6">Contact Information</h3>
              <p className="text-gray-600 mb-8">
                Reach out to us directly or visit any of our branches. Our counselors are available Monday to Saturday.
              </p>
            </div>

            <div className="space-y-6">
              <a href="tel:+919876543210" className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-[#F4F7FE] text-[#1A56DB] flex items-center justify-center group-hover:bg-[#1A56DB] group-hover:text-white transition-colors shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Phone</p>
                  <p className="text-[#0D1B3E] font-bold text-lg">+91 98765 43210</p>
                </div>
              </a>

              <a href="mailto:admissions@brightminds.edu.in" className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-full bg-[#F4F7FE] text-[#1A56DB] flex items-center justify-center group-hover:bg-[#1A56DB] group-hover:text-white transition-colors shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Email</p>
                  <p className="text-[#0D1B3E] font-bold">admissions@brightminds.edu.in</p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#F4F7FE] text-[#1A56DB] flex items-center justify-center shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Main Branch</p>
                  <p className="text-[#0D1B3E] font-medium leading-relaxed">42 Knowledge Park, Sector 18<br/>City Center, 123456</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#F4F7FE] text-[#1A56DB] flex items-center justify-center shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Working Hours</p>
                  <p className="text-[#0D1B3E] font-medium">Monday – Saturday<br/>8:00 AM – 7:00 PM</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-100">
              <p className="text-sm font-bold text-[#0D1B3E] mb-4">Follow Us on Social Media</p>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 rounded-full bg-[#0D1B3E] text-white flex items-center justify-center hover:bg-[#1A56DB] transition-colors">
                  <FaInstagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[#0D1B3E] text-white flex items-center justify-center hover:bg-[#1A56DB] transition-colors">
                  <FaFacebookF size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[#0D1B3E] text-white flex items-center justify-center hover:bg-[#1A56DB] transition-colors">
                  <FaYoutube size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-[#0D1B3E] text-white flex items-center justify-center hover:bg-[#1A56DB] transition-colors">
                  <SiGooglemaps size={18} />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
