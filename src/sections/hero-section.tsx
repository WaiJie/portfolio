import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, MapPin, ChevronDown } from 'lucide-react';
import { portfolioConfig } from '../content/home/portfolio';
import { sortedProjects } from '../content/projects/config';

const SCROLL_OFFSET = 90;

export default function HeroSection() {
  const { name, jobTitle, location, shortDescription, socialLinks, fieldsOfInterest } = portfolioConfig.hero;
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const projectTeasers = sortedProjects.slice(0, 3);
  const currentProject = projectTeasers[currentProjectIndex];

  useEffect(() => {
    if (!projectTeasers.length) return;
    const interval = setInterval(() => {
      setCurrentProjectIndex((prev) => (prev + 1) % projectTeasers.length);
    }, 8000); // slower slideshow, 8 seconds
    return () => clearInterval(interval);
  }, [projectTeasers.length]);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (!element) return;
    const top = element.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  const fadeUp = { hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-16 md:py-24 container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="text-center lg:text-left space-y-6">
            <h1 className="text-4xl sm:text-5xl font-bold text-[var(--text)]">{name}</h1>
            <p className="text-lg font-medium" style={{ color: 'var(--accent)' }}>{jobTitle}</p>
            <div className="flex items-center justify-center lg:justify-start text-[var(--text-muted)]">
              <MapPin className="h-5 w-5 mr-2" />
              <span>{location}</span>
            </div>
            <p className="leading-relaxed" style={{ color: 'var(--text-muted)' }}>{shortDescription}</p>

            <div className="flex justify-center lg:justify-start space-x-4">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--accent)] transition-all duration-300 hover:scale-105 text-[var(--text-muted)]"
              >
                <Github className="h-6 w-6 sm:h-7 sm:w-7" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--accent)] transition-all duration-300 hover:scale-105 text-[var(--text-muted)]"
              >
                <Linkedin className="h-6 w-6 sm:h-7 sm:w-7" />
              </a>
            </div>

            {fieldsOfInterest?.length > 0 && (
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 mt-4">
                {fieldsOfInterest.map((spec, idx) => (
                  <div
                    key={idx}
                    className="group hero-pill flex items-center px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium shadow-md transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg cursor-default"
                  >
                    <span className="mr-1.5">{spec.emoji}</span>
                    <span>{spec.title}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Column – Featured Project */}
          <div className="flex flex-col items-center w-full">
            <h3 className="text-lg md:text-xl font-semibold mb-4 text-center text-[var(--text)]">
              Featured Projects
            </h3>

            {currentProject && (
              <motion.div
                key={currentProject.id}
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                transition={{ duration: 0.5 }}
                className="w-[90%] md:w-[80%] project-card texture-overlay rounded-2xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={scrollToProjects}
              >
                {/* Project Image */}
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={currentProject.image}
                    alt={currentProject.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                {/* Title & Description */}
                <div className="p-4 flex flex-col items-start">
                  <h3 className="text-lg font-semibold" style={{ color: 'var(--text)' }}>{currentProject.title}</h3>
                  <p className="text-sm line-clamp-3 mt-1" style={{ color: 'var(--text-muted)' }}>
                    {currentProject.shortDescription}
                  </p>
                </div>
              </motion.div>
            )}

            {/* Scroll Down */}
            <div className="flex flex-col items-center mt-6">
              <p className="text-sm font-medium text-[var(--text-muted)]">Explore My Work below!</p>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ChevronDown className="h-5 w-5 text-[var(--accent)]" />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
