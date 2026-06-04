import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2 } from "lucide-react";

const CATEGORIES = ["All", "Classrooms", "Events", "Infrastructure", "Activities", "Achievements"];

// Fallback images since limit was reached
const GALLERY = [
  { id: 1, category: "Classrooms", title: "Interactive Smart Class", img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80" },
  { id: 2, category: "Activities", title: "Group Discussion", img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80" },
  { id: 3, category: "Infrastructure", title: "Modern Science Lab", img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=800&q=80" },
  { id: 4, category: "Events", title: "Annual Prize Distribution", img: "https://images.unsplash.com/photo-1523580846011-d3a5ce25ab07?auto=format&fit=crop&w=800&q=80" },
  { id: 5, category: "Activities", title: "Library Reading Session", img: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=800&q=80" },
  { id: 6, category: "Events", title: "Parent Teacher Meeting", img: "https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80" },
  { id: 7, category: "Achievements", title: "Board Toppers Felicitation", img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80" },
  { id: 8, category: "Infrastructure", title: "Main Campus Building", img: "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=800&q=80" }
];

export default function GallerySection() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredImages = GALLERY.filter(img => 
    activeTab === "All" ? true : img.category === activeTab
  );

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#1E40AF] uppercase tracking-[0.08em] font-bold text-[13px] mb-4 block">
            LIFE AT EDUCARE ACADEMY
          </span>
          <h2 className="font-serif text-[#0F1C3F] text-4xl md:text-5xl font-bold mb-6">
            A Glimpse Inside Our Learning Community
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex overflow-x-auto pb-4 mb-8 hide-scrollbar justify-start md:justify-center gap-2">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                activeTab === category
                  ? "bg-[#0F1C3F] text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <motion.div layout className="columns-1 sm:columns-2 lg:columns-4 gap-4 space-y-4">
          <AnimatePresence>
            {filteredImages.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                className="break-inside-avoid relative group rounded-[16px] overflow-hidden cursor-pointer"
              >
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1C3F]/80 via-[#0F1C3F]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2 rounded-full text-white opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-100">
                    <Maximize2 size={18} />
                  </div>
                  
                  <span className="text-[#93C5FD] text-xs font-bold uppercase tracking-wider mb-1 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-100">
                    {item.category}
                  </span>
                  <h4 className="text-white font-bold text-lg opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-200">
                    {item.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        <div className="mt-12 text-center">
          <button className="px-8 py-3 rounded-full border-2 border-[#1E40AF] text-[#1E40AF] font-bold hover:bg-[#1E40AF] hover:text-white transition-colors">
            Load More
          </button>
        </div>
      </div>
    </section>
  );
}
