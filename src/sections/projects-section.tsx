import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { sortedProjects } from '../content/projects/config';
import { ArrowRight } from 'lucide-react';

export default function ProjectsSection() {
  const fadeUp = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="projects"
      className="relative py-16 md:py-24 container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16"
    >
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4 }}
        className="w-full flex items-center justify-center py-10 mb-8"
      >
        <h2 className="text-3xl md:text-4xl font-bold whitespace-nowrap" style={{ color: 'var(--text)' }}>
          Projects
        </h2>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {sortedProjects.map((project, index) => (
          <motion.div
            key={project.slug}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            transition={{ duration: 0.35, delay: index * 0.05 }}
            className="relative rounded-xl overflow-hidden group enhanced-card project-card texture-overlay"
          >
            <Link to={`/projects/${project.slug}`} className="block h-full">
              {/* Project Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {project.date && (
                  <span
                    className="absolute top-2 right-2 text-sm px-2 py-0.5 rounded"
                    style={{ backgroundColor: 'var(--card-bg)', color: 'var(--text-muted)' }}
                  >
                    {new Date(project.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                    })}
                  </span>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--text)' }}>
                    {project.title}
                  </h3>
                  <p className="text-base mb-4 line-clamp-3" style={{ color: 'var(--text-muted)' }}>
                    {project.shortDescription}
                  </p>
                </div>

                {/* View Project */}
                <div className="flex items-center font-semibold mt-auto" style={{ color: 'var(--link)' }}>
                  <span className="group-hover:underline transition-all text-base">View Project</span>
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
