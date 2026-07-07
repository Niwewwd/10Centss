import React from "react";
import EmberParticles from "@/components/brasa/EmberParticles";
import Navbar from "@/components/brasa/Navbar";
import HeroSection from "@/components/brasa/HeroSection";
import FeaturedSection from "@/components/brasa/FeaturedSection";
import MenuSection from "@/components/brasa/MenuSection";
import AboutSection from "@/components/brasa/AboutSection";
import ContactSection from "@/components/brasa/ContactSection";
import Footer from "@/components/brasa/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-obsidian text-rice">
      <EmberParticles />
      <Navbar />
      <HeroSection />
      <FeaturedSection />
      <MenuSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}