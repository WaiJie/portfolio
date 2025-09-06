import React from 'react';
import { motion } from 'framer-motion';
import { Code, Briefcase, GraduationCap } from 'lucide-react';
import { skills, workExperience, education } from '@/content/about/config';

export default function AboutMeComprehensiveSection() {
  const categorizedSkills = skills.reduce((acc, skill) => {
    (acc[skill.category] ||= []).push(skill.name);
    return acc;
  }, {} as Record<string, string[]>);

  return (
    <section
      id="about-me-comprehensive"
      className="relative flex flex-col items-center py-8 md:py-12 container mx-auto"
    >
      {/* -------------------------------------------------- */}
      {/*  About Me Title Region  */}
      {/* -------------------------------------------------- */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="w-full flex items-center justify-center py-10 mb-4"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white whitespace-nowrap">
          About Me
        </h2>
      </motion.div>

      {/* -------------------------------------------------- */}
      {/*  Content Region  */}
      {/* -------------------------------------------------- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="w-full h-full flex flex-col p-4 sm:p-6 md:p-8 space-y-12"
      >
        {/* ------------ SKILLS SECTION ------------ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="p-1"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <Code className="h-6 w-6 mr-3 text-blue-600 dark:text-blue-400" />
            Skills
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {Object.entries(categorizedSkills).map(([category, list]) => (
              <div
                key={category}
                className="enhanced-card backdrop-blur-sm rounded-2xl shadow-lg p-5 glow-on-hover texture-overlay"
              >
                <h5 className="text-md font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                  {category}
                </h5>
                <div className="flex flex-wrap gap-2">
                  {list.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-100 text-sm font-medium rounded-full transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ------------ EXPERIENCE SECTION ------------ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="p-1"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <Briefcase className="h-6 w-6 mr-3 text-blue-600 dark:text-blue-400" />
            Experience
          </h3>
          <div className="space-y-6">
            {workExperience.map((job) => (
              <div
                key={job.id}
                className="enhanced-card backdrop-blur-sm rounded-2xl shadow-lg p-5 glow-on-hover texture-overlay"
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {job.title}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                  {job.company}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">{job.duration}</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {job.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* ------------ EDUCATION SECTION ------------ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-1"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <GraduationCap className="h-6 w-6 mr-3 text-blue-600 dark:text-blue-400" />
            Education
          </h3>
          <div className="space-y-6">
            {education.map((edu, i) => (
              <div
                key={i}
                className="enhanced-card backdrop-blur-sm rounded-2xl shadow-lg p-5 glow-on-hover texture-overlay"
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                  {edu.degree}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                  {edu.institution}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">{edu.year}</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {edu.details}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
