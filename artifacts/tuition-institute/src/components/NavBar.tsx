import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Courses", href: "#courses" },
    { name: "Faculty", href: "#faculty" },
    { name: "Results", href: "#results" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-[20px] shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
      data-testid="navbar"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex flex-col" data-testid="link-logo">
            <span
              className={`font-serif text-2xl font-bold ${
                scrolled ? "text-[#0D1B3E]" : "text-white"
              }`}
            >
              BrightMinds Academy
            </span>
            <span
              className={`text-[10px] uppercase tracking-wider ${
                scrolled ? "text-[#1A56DB]" : "text-blue-200"
              }`}
            >
              Excellence in Education
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium hover:text-[#1A56DB] transition-colors ${
                  scrolled ? "text-[#64748B]" : "text-white/90"
                }`}
                data-testid={`nav-link-${link.name.toLowerCase()}`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+919876543210"
              className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition-all ${
                scrolled
                  ? "border-[#0D1B3E] text-[#0D1B3E] hover:bg-[#0D1B3E] hover:text-white"
                  : "border-white text-white hover:bg-white hover:text-[#0D1B3E]"
              }`}
              data-testid="nav-call-btn"
            >
              Call Now
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold bg-[#25D366] text-white hover:bg-[#20bd5a] transition-all"
              data-testid="nav-whatsapp-btn"
            >
              <FaWhatsapp className="text-lg" />
              WhatsApp Us
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`lg:hidden p-2 rounded-md ${
              scrolled ? "text-[#0D1B3E]" : "text-white"
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="mobile-menu-toggle"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t p-4 flex flex-col gap-4"
          data-testid="mobile-menu"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[#0D1B3E] font-medium py-2 border-b border-gray-100"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="flex flex-col gap-3 mt-2">
            <a
              href="tel:+919876543210"
              className="text-center px-5 py-3 rounded-full text-sm font-semibold border border-[#0D1B3E] text-[#0D1B3E]"
            >
              Call Now
            </a>
            <a
              href="https://wa.me/919876543210"
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-semibold bg-[#25D366] text-white"
            >
              <FaWhatsapp className="text-lg" />
              WhatsApp Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
