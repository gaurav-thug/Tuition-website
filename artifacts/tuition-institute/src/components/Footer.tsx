import { Link } from "wouter";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0F1C3F] text-white pt-20 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Col */}
          <div className="space-y-6">
            <Link href="/" className="flex flex-col inline-block">
              <span className="font-serif text-3xl font-bold text-white">
                Educare
              </span>
              <span className="text-xs uppercase tracking-[0.2em] text-[#93C5FD]">
                Academy
              </span>
            </Link>
            <p className="text-[#94A3B8] text-sm leading-relaxed max-w-sm">
              Shaping bright futures through personalized education, expert faculty, and a proven track record of excellence since 2009.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#1E40AF] hover:border-[#1E40AF] transition-all">
                <FaInstagram size={16} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#1E40AF] hover:border-[#1E40AF] transition-all">
                <FaFacebookF size={16} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#1E40AF] hover:border-[#1E40AF] transition-all">
                <FaYoutube size={16} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#1E40AF] hover:border-[#1E40AF] transition-all">
                <SiGooglemaps size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#about" className="text-[#94A3B8] hover:text-white transition-colors text-sm font-medium">About Us</a></li>
              <li><a href="#faculty" className="text-[#94A3B8] hover:text-white transition-colors text-sm font-medium">Meet the Faculty</a></li>
              <li><a href="#results" className="text-[#94A3B8] hover:text-white transition-colors text-sm font-medium">Our Results</a></li>
              <li><a href="#gallery" className="text-[#94A3B8] hover:text-white transition-colors text-sm font-medium">Life at Educare</a></li>
              <li><a href="#faq" className="text-[#94A3B8] hover:text-white transition-colors text-sm font-medium">Admissions FAQ</a></li>
              <li><a href="#branches" className="text-[#94A3B8] hover:text-white transition-colors text-sm font-medium">Locate a Branch</a></li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-bold text-white text-lg mb-6">Our Courses</h4>
            <ul className="space-y-3">
              <li><a href="#courses" className="text-[#94A3B8] hover:text-white transition-colors text-sm font-medium">Foundation (Class 6-8)</a></li>
              <li><a href="#courses" className="text-[#94A3B8] hover:text-white transition-colors text-sm font-medium">Boards Prep (Class 9-10)</a></li>
              <li><a href="#courses" className="text-[#94A3B8] hover:text-white transition-colors text-sm font-medium">Science Stream (Class 11-12)</a></li>
              <li><a href="#courses" className="text-[#94A3B8] hover:text-white transition-colors text-sm font-medium">Commerce Stream (Class 11-12)</a></li>
              <li><a href="#courses" className="text-[#94A3B8] hover:text-white transition-colors text-sm font-medium">JEE Preparation</a></li>
              <li><a href="#courses" className="text-[#94A3B8] hover:text-white transition-colors text-sm font-medium">NEET Preparation</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-[#94A3B8] text-sm">
                <span className="text-[#93C5FD] mt-1">📍</span>
                <span>Main Branch: 42 Knowledge Park,<br/>Sector 18, City Center</span>
              </li>
              <li className="flex items-center gap-3 text-[#94A3B8] text-sm">
                <span className="text-[#93C5FD]">📞</span>
                <a href="tel:+919876543210" className="hover:text-white transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex items-center gap-3 text-[#94A3B8] text-sm">
                <span className="text-[#93C5FD]">✉️</span>
                <a href="mailto:admissions@educare.edu.in" className="hover:text-white transition-colors">admissions@educare.edu.in</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#94A3B8] text-sm">
            © {currentYear} Educare Academy. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-[#94A3B8] hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-[#94A3B8] hover:text-white text-sm transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
