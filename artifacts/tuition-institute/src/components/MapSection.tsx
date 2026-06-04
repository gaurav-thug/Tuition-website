import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function MapSection() {
  return (
    <section id="map-section" className="pt-24 md:pt-28 bg-white border-b-2 border-[#E2E8F0] w-full">
      {/* Top Map Placeholder */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full min-h-[300px] md:min-h-[400px] bg-[#EFF6FF] relative flex flex-col items-center justify-center overflow-hidden"
      >
        <div 
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm20 20h20v20H20V20zM0 20h20v20H0V20z' fill='%231E40AF' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            backgroundSize: '20px 20px'
          }}
        />
        <div className="relative z-10 flex flex-col items-center justify-center bg-white/60 backdrop-blur-sm p-8 rounded-2xl border border-white/50 shadow-sm">
          <div className="relative mb-4">
            <MapPin size={48} className="text-[#1E40AF] relative z-10" />
            <div className="absolute inset-0 bg-[#1E40AF] rounded-full animate-ping opacity-30 z-0 scale-150" />
          </div>
          <p className="text-[#64748B] font-bold text-lg">Interactive Map — Find Our 3 Branches</p>
        </div>
      </motion.div>

      {/* Bottom Strip */}
      <div className="bg-white py-4 w-full">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h3 className="text-[#0F1C3F] font-bold text-lg md:text-xl flex items-center justify-center md:justify-start gap-2">
                <span>📍</span> Educare Academy — 3 Convenient Locations Across the City
              </h3>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-3 w-full md:w-auto">
              <a 
                href="#branches" 
                className="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-2.5 bg-[#1E40AF] text-white font-semibold rounded-full hover:bg-[#0F1C3F] transition-colors whitespace-nowrap"
              >
                <MapPin size={18} />
                Get Directions
              </a>
              <a 
                href="tel:+919876543210" 
                className="flex-1 md:flex-none flex items-center justify-center gap-2 px-5 py-2.5 border-2 border-[#1E40AF] text-[#1E40AF] font-semibold rounded-full hover:bg-[#1E40AF] hover:text-white transition-colors whitespace-nowrap"
              >
                📞 Call Now
              </a>
              <a 
                href="https://wa.me/919876543210" 
                target="_blank"
                rel="noreferrer"
                className="w-full md:w-auto flex items-center justify-center gap-2 px-5 py-2.5 bg-[#25D366] text-white font-semibold rounded-full hover:bg-[#20bd5a] transition-colors whitespace-nowrap"
              >
                <FaWhatsapp className="text-xl" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}