import React from 'react';
import Header from '../components/header';
import HeroSection from '../sections/hero-section';
import ProjectsSection from '../sections/projects-section';
import AboutMeComprehensiveSection from '../sections/about-me-comprehensive-section';
import ContactSection from '../sections/contact-section';

export default function Home() {
  return (
    <div className="min-h-screen nebula-background">
      {/* 1.  deep-space gradient + animated particles */}
      <div className="fixed inset-0 floating-particles" />

      {/* 2.  your actual page (sits above the background) */}
      <div className="relative z-10">
        <Header />
        <main>
          <HeroSection />
          <ProjectsSection />
          <AboutMeComprehensiveSection />
          <ContactSection />
        </main>
      </div>
    </div>
  );
}