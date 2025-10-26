import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { sortedProjects } from '../content/projects/config';
import { ArrowRight, Search, Calendar } from 'lucide-react';

export default function ProjectsSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedYear, setSelectedYear] = useState('all');

  const fadeUp = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0 },
  };

  const uniqueYears = useMemo(() => {
    const years = new Set(sortedProjects.map(p => new Date(p.date).getFullYear().toString()));
    return ['all', ...Array.from(years).sort((a, b) => Number(b) - Number(a))];
  }, []);

  const filteredProjects = useMemo(() => {
    const lowercasedQuery = searchQuery.toLowerCase();
    return sortedProjects.filter(project => {
      const projectYear = new Date(project.date).getFullYear().toString();
      const matchesYear = selectedYear === 'all' || projectYear === selectedYear;
      const matchesQuery = lowercasedQuery === '' ||
        project.title.toLowerCase().includes(lowercasedQuery) ||
        project.shortDescription.toLowerCase().includes(lowercasedQuery) ||
        (project.tags && project.tags.some(tag => tag.toLowerCase().includes(lowercasedQuery)));
      
      return matchesYear && matchesQuery;
    });
  }, [searchQuery, selectedYear]);

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

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-12">
        {/* Search Bar */}
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[var(--text-muted)]" />
          <input
            type="text"
            placeholder="Search by keyword or tag..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-lg border-2 border-transparent focus:border-[var(--accent)] focus:ring-0 transition-colors duration-300"
            style={{ backgroundColor: 'var(--card-bg)', color: 'var(--text)' }}
          />
        </div>

        {/* Year Filter */}
        <div className="relative">
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="w-full sm:w-auto appearance-none pl-4 pr-10 py-2 rounded-lg border-2 border-transparent focus:border-[var(--accent)] focus:ring-0 transition-colors duration-300 cursor-pointer"
            style={{ backgroundColor: 'var(--card-bg)', color: 'var(--text)' }}
          >
            {uniqueYears.map(year => (
              <option key={year} value={year}>
                {year === 'all' ? 'All Years' : year}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
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
                    className="absolute top-2 right-2 text-sm px-2 py-1 rounded flex items-center gap-1.5"
                    style={{ backgroundColor: 'var(--card-bg)', color: 'var(--text)' }}
                  >
                    <Calendar className="h-4 w-4" />
                    <span>
                      {new Date(project.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                      })}
                    </span>
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
