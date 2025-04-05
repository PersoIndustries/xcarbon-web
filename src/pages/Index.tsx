
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import AISection from "@/components/AISection";
import CarbonCredits from "@/components/CarbonCredits";
import Mission from "@/components/Mission";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Features />
      <AISection />
      <CarbonCredits />
      <Mission />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
