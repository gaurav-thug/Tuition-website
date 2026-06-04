import React from "react";
import NavBar from "../components/NavBar";
import MapSection from "../components/MapSection";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import CoursesSection from "../components/CoursesSection";
import NotesSection from "../components/NotesSection";
import FacultySection from "../components/FacultySection";
import WhyChooseUs from "../components/WhyChooseUs";
import AchieversSection from "../components/AchieversSection";
import ResultsSection from "../components/ResultsSection";
import AchievementsSection from "../components/AchievementsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import GallerySection from "../components/GallerySection";
import BranchesSection from "../components/BranchesSection";
import FAQSection from "../components/FAQSection";
import ContactSection from "../components/ContactSection";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1">
        <MapSection />
        <HeroSection />
        <AboutSection />
        <CoursesSection />
        <NotesSection />
        <FacultySection />
        <WhyChooseUs />
        <AchieversSection />
        <ResultsSection />
        <AchievementsSection />
        <TestimonialsSection />
        <GallerySection />
        <BranchesSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
