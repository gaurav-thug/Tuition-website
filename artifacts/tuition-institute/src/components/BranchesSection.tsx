import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";

const BRANCHES = [
  {
    name: "Main Branch",
    address: "42 Knowledge Park, Sector 18, City Center",
    phone: "+91 98765 43210",
    timings: "Mon-Sat: 8:00 AM - 8:00 PM",
    color: "#1E40AF",
    bg: "#EFF6FF"
  },
  {
    name: "Branch 2",
    address: "7 Education Hub, MG Road, North District",
    phone: "+91 98765 43211",
    timings: "Mon-Sat: 9:00 AM - 7:00 PM",
    color: "#10B981",
    bg: "#ECFDF5"
  },
  {
    name: "Branch 3",
    address: "15 Learning Lane, Civil Lines, South City",
    phone: "+91 98765 43212",
    timings: "Mon-Sat: 9:00 AM - 7:00 PM",
    color: "#F59E0B",
    bg: "#FFFBEB"
  }
];

export default function BranchesSection() {
  return (
    <section id="branches" className="py-24 bg-[#F4F7FE]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#1E40AF] uppercase tracking-[0.08em] font-bold text-[13px] mb-4 block">
            FIND US
          </span>
          <h2 className="font-serif text-[#0F1C3F] text-4xl md:text-5xl font-bold mb-6">
            Multiple Branches — Convenient to You
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map Placeholder */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-4 rounded-[24px] shadow-sm border border-gray-100 h-full min-h-[400px] flex flex-col items-center justify-center relative overflow-hidden"
          >
            {/* Grid pattern background to simulate map */}
            <div className="absolute inset-0 bg-[#F8FAFC] opacity-50" 
                 style={{ backgroundImage: 'linear-gradient(#E2E8F0 1px, transparent 1px), linear-gradient(90deg, #E2E8F0 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                 
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-16 h-16 bg-[#EFF6FF] text-[#1E40AF] rounded-full flex items-center justify-center mb-4 shadow-lg">
                <MapPin size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#0F1C3F] mb-2">Interactive Map</h3>
              <p className="text-gray-500 font-medium">Showing 3 Locations</p>
              
              <div className="mt-8 flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-[#1E40AF] shadow-[0_0_0_4px_rgba(30,64,175,0.2)] mb-2" />
                  <span className="text-xs font-bold text-gray-500">Main</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-[#10B981] shadow-[0_0_0_4px_rgba(16,185,129,0.2)] mb-2" />
                  <span className="text-xs font-bold text-gray-500">Branch 2</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-[#F59E0B] shadow-[0_0_0_4px_rgba(245,158,11,0.2)] mb-2" />
                  <span className="text-xs font-bold text-gray-500">Branch 3</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Branch Cards */}
          <div className="space-y-6">
            {BRANCHES.map((branch, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 md:p-8 rounded-[24px] shadow-sm hover:shadow-md transition-shadow border border-gray-100"
              >
                <div className="flex justify-between items-start mb-4">
                  <span 
                    className="px-4 py-1.5 rounded-full text-xs font-bold"
                    style={{ backgroundColor: branch.bg, color: branch.color }}
                  >
                    {branch.name}
                  </span>
                </div>
                
                <p className="text-[#0F1C3F] font-medium text-lg mb-6 leading-relaxed">
                  {branch.address}
                </p>
                
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <a href={`tel:${branch.phone.replace(/[^0-9+]/g, '')}`} className="flex items-center gap-3 text-gray-600 hover:text-[#1E40AF] transition-colors">
                    <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center">
                      <Phone size={16} />
                    </div>
                    <span className="text-sm font-medium">{branch.phone}</span>
                  </a>
                  <div className="flex items-center gap-3 text-gray-600">
                    <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center">
                      <Clock size={16} />
                    </div>
                    <span className="text-sm font-medium text-nowrap">{branch.timings}</span>
                  </div>
                </div>
                
                <div className="flex gap-3 pt-4 border-t border-gray-100">
                  <button className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-gray-200 text-[#0F1C3F] font-semibold text-sm hover:bg-gray-50 transition-colors">
                    <Navigation size={16} /> Get Directions
                  </button>
                  <a href={`tel:${branch.phone.replace(/[^0-9+]/g, '')}`} className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#0F1C3F] text-white font-semibold text-sm hover:bg-[#1E40AF] transition-colors">
                    <Phone size={16} /> Call Branch
                  </a>
                </div>
              </motion.div>
            ))}
            
            <p className="text-center text-sm text-gray-500 italic mt-6">
              *All branches are fully air-conditioned and equipped with smart boards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
