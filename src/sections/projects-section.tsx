import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { sortedProjects } from '../content/projects/config'; // Corrected import path
import { ArrowRight } from 'lucide-react';

interface ProjectsSectionProps {
  scrollToProjects: () => void;
}

export default function ProjectsSection({ scrollToProjects }: ProjectsSectionProps) {
  return (
    <section
      id="projects"
      className="relative py-16 md:py-24 container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16"
    >
      {/* -------------------------------------------------- */}
      {/*  Projects Title Region  */}
      {/* -------------------------------------------------- */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="w-full flex items-center justify-center py-10 mb-8"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white whitespace-nowrap">
          Projects
        </h2>
      </motion.div>

      {/* -------------------------------------------------- */}
      {/*  Projects Grid  */}
      {/* -------------------------------------------------- */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sortedProjects.map((project) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative rounded-2xl shadow-xl overflow-hidden group enhanced-card glow-on-hover texture-overlay bg-gray-100 dark:bg-gray-800"
          >
            <Link to={`/projects/${project.slug}`} className="block h-full">
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Date overlay on image */}
                {project.date && (
                  <span className="absolute top-2 right-2 text-sm text-white bg-gray-800/50 px-2 py-0.5 rounded">
                    {new Date(project.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                    })}
                  </span>
                )}
              </div>

              <div className="p-6">
                {/* Title below the image */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                  {project.shortDescription}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-100 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center text-blue-600 dark:text-blue-400 font-semibold group-hover:underline">
                  View Project
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
