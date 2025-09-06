import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SubjectsSection from "@/components/SubjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ISROSection from "@/components/ISROSection";
import HallOfFame from "@/components/HallOfFame";
import Gallery from "@/components/Gallery";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ISROModal from "@/components/ISROModal";

const Index = () => {
  const [showISROModal, setShowISROModal] = useState(false);

  useEffect(() => {
    // Show ISRO modal after a delay when page loads
    const timer = setTimeout(() => {
      setShowISROModal(true);
    }, 3000); // Show after 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <SubjectsSection />
      <TestimonialsSection />
      <ISROSection onOpenModal={() => setShowISROModal(true)} />
      <HallOfFame />
      <Gallery />
      <ContactSection />
      <Footer />
      <ISROModal 
        isOpen={showISROModal} 
        onClose={() => setShowISROModal(false)} 
      />
    </div>
  );
};

export default Index;
