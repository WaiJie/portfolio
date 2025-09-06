import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import HeroSection from '../sections/hero-section';
import ProjectsSection from '../sections/projects-section';
import AboutMeComprehensiveSection from '../sections/about-me-comprehensive-section';
import ContactSection from '../sections/contact-section';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ProjectsSection />
        <AboutMeComprehensiveSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
