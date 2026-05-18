import { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingWhatsApp() {
  const [showLabel, setShowLabel] = useState(false);

  useEffect(() => {
    // Show label after 3 seconds
    const showTimer = setTimeout(() => {
      setShowLabel(true);
    }, 3000);

    // Hide label after 4 more seconds
    const hideTimer = setTimeout(() => {
      setShowLabel(false);
    }, 7000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex items-center gap-3">
      {/* Label Pill */}
      <div 
        className={`bg-white px-4 py-2 rounded-full shadow-lg border border-gray-100 font-bold text-sm text-[#0D1B3E] transition-all duration-500 origin-right ${
          showLabel ? "opacity-100 scale-100 translate-x-0" : "opacity-0 scale-95 translate-x-4 pointer-events-none"
        }`}
      >
        💬 Chat with Us
      </div>

      {/* Button */}
      <a 
        href="https://wa.me/919876543210?text=Hi%2C%20I%27m%20interested%20in%20admissions"
        target="_blank"
        rel="noreferrer"
        className="relative group block"
        data-testid="floating-whatsapp"
      >
        {/* Pulse Animation Rings */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" />
        
        {/* Main Button */}
        <div className="relative w-[60px] h-[60px] bg-[#25D366] rounded-full flex items-center justify-center shadow-xl group-hover:scale-108 transition-transform duration-300">
          <FaWhatsapp className="text-white text-[30px]" />
        </div>
      </a>
      
      {/* Inline styles for ping animation since tw-animate-css might not have this exact configuration */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes ping {
          75%, 100% {
            transform: scale(1.8);
            opacity: 0;
          }
        }
      `}} />
    </div>
  );
}
