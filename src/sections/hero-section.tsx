import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, MapPin, ChevronDown } from 'lucide-react';
import { portfolioConfig } from '../content/home/portfolio';
import { sortedProjects } from '../content/projects/config';

const SCROLL_OFFSET = 90;

export default function HeroSection() {
  const { name, jobTitle, location, shortDescription, socialLinks, fieldsOfInterest } = portfolioConfig.hero;
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const projectTeasers = sortedProjects.slice(0, 3);

  useEffect(() => {
    if (projectTeasers.length > 0) {
      const interval = setInterval(() => {
        setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projectTeasers.length);
      }, 5000); // Change project every 5 seconds
      return () => clearInterval(interval);
    }
  }, [projectTeasers.length]);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - SCROLL_OFFSET;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const currentProject = projectTeasers[currentProjectIndex];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="py-16 md:py-24 container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Header Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >            
              <motion.h1  
                className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-5xl font-bold text-gray-900 dark:text-white mb-4 text-left"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {name}
              </motion.h1>

              <motion.p  
                className="text-sm sm:text-base md:text-lg lg:text-lg xl:text-lg 2xl:text-xl text-blue-600 dark:text-blue-400 font-medium mb-6 text-left"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                {jobTitle}
              </motion.p>

              <motion.div  
                className="flex items-center justify-start text-gray-600 dark:text-gray-400 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <MapPin className="h-5 w-5 mr-2" />
                <span className="text-xs sm:text-sm md:text-base lg:text-base xl:text-base 2xl:text-base">{location}</span>
              </motion.div>
            </motion.div>

            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mb-8"
          >
            <p className="text-base md:text-lg 2xl:text-xl text-gray-700 dark:text-gray-300 leading-relaxed 2xl:leading-loose font-light text-left">
              {shortDescription}
            </p>
            </motion.div>

            {/* Social Links - Moved above Fields of Interest */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex justify-center lg:justify-start space-x-4 sm:space-x-6 md:space-x-8 mb-8"
            >
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110"
              >
                <Github className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />
              </a>
              
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8" />
              </a>
            </motion.div>

            {/* Fields of Interest as hoverable pills */}
            {fieldsOfInterest && fieldsOfInterest.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="mb-8"
              >
                <h4 className="text-base sm:text-lg md:text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4 text-center lg:text-left">
                  Fields of Interest
                </h4>
                <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3 md:gap-4">
                  {fieldsOfInterest.map((spec, index) => (
                    <div
                      key={index}
                      className={`group flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm md:text-sm font-medium text-white shadow-md transition-all duration-300 ease-in-out 
                                bg-gradient-to-br ${spec.bgColor} hover:scale-105 hover:shadow-lg cursor-default`}
                    >
                      <span className="mr-1.5 sm:mr-2 text-base sm:text-lg">{spec.emoji}</span>
                      <span>{spec.title}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* Right Column: Project Teaser with "Explore My Work" prompt */}
          <div className="flex flex-col items-center">
            {/* "Featured" label */}
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4 text-center"
            >
              Featured Projects
            </motion.h3>

            <motion.a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToProjects();
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="relative w-full flex flex-col items-center justify-center cursor-pointer group"
            >
              <div className="relative w-[90%] md:w-[80%] lg:w-[90%] xl:w-[80%] flex items-center justify-center mb-8">
                <AnimatePresence mode="wait">
                  {currentProject && (
                    <motion.div
                      key={currentProject.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="absolute w-full h-full enhanced-card backdrop-blur-sm rounded-2xl shadow-lg glow-on-hover texture-overlay flex flex-col overflow-hidden"
                    >
                      {/* Project Card Image with Title Overlay */}
                      <div className="relative h-48 w-full overflow-hidden">
                        <img
                          src={currentProject.image}
                          alt={currentProject.title}
                          className="w-full h-full object-cover rounded-t-2xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-4">
                          <h3 className="text-xl font-bold text-white">{currentProject.title}</h3>
                        </div>
                      </div>
                      {/* Project Card Description */}
                      <div className="p-5">
                        <p className="text-base text-gray-700 dark:text-gray-300">
                          {currentProject.shortDescription}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Scroll indicator - now inside the clickable area, below the teaser */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="flex flex-col items-center"
              >
                <p className="text-gray-600 dark:text-gray-400 mb-2 text-sm font-medium">Explore My Work</p>
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ChevronDown className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </motion.div>
              </motion.div>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
