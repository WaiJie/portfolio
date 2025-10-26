import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Code, Briefcase, GraduationCap } from 'lucide-react';
import { skills, workExperience, education } from '@/content/about/config';

export default function AboutMeComprehensiveSection() {
  const categorizedSkills = useMemo(() => {
    return skills.reduce((acc, skill) => {
      (acc[skill.category] ||= []).push(skill.name);
      return acc;
    }, {} as Record<string, string[]>);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="about-me-comprehensive"
      className="relative flex flex-col items-center py-8 md:py-12 container mx-auto"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.35 }}
        className="text-3xl md:text-4xl font-bold mb-12 text-center"
        style={{ color: 'var(--text)' }}
      >
        About Me
      </motion.h2>

      <div className="w-full flex flex-col p-4 sm:p-6 md:p-8 space-y-12">

        {/* Skills Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          <motion.h3
            initial={fadeUp.hidden}
            whileInView={fadeUp.visible}
            viewport={{ once: true, amount: 0.2 }}
            className="text-[1.2rem] font-semibold mb-6 flex items-center"
            style={{ color: 'var(--text)' }}
          >
            <Code className="h-5 w-5 mr-3 text-[var(--accent)]" />
            Skills
          </motion.h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {Object.entries(categorizedSkills).map(([category, list]) => (
              <motion.div
                key={category}
                initial={fadeUp.hidden}
                whileInView={fadeUp.visible}
                viewport={{ once: true, amount: 0.2 }}
                className="about-card p-4 texture-overlay hover:translate-y-[-2px] hover:scale-[1.01] transition-transform duration-200 ease-in-out"
              >
                <h5 className="text-[1.2rem] font-semibold mb-2" style={{ color: 'var(--text)' }}>
                  {category}
                </h5>
                <div className="flex flex-wrap gap-2">
                  {list.map((skill) => (
                    <span
                      key={skill}
                      className="pill px-2 py-1 text-[0.9rem] font-medium rounded-full cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          <motion.h3
            initial={fadeUp.hidden}
            whileInView={fadeUp.visible}
            viewport={{ once: true, amount: 0.2 }}
            className="text-[1.2rem] font-semibold mb-6 flex items-center"
            style={{ color: 'var(--text)' }}
          >
            <Briefcase className="h-5 w-5 mr-3 text-[var(--accent)]" />
            Experience
          </motion.h3>
          <div className="space-y-6">
            {workExperience.map((job) => (
              <motion.div
                key={job.id}
                initial={fadeUp.hidden}
                whileInView={fadeUp.visible}
                viewport={{ once: true, amount: 0.2 }}
                className="about-card p-4 texture-overlay hover:translate-y-[-2px] hover:scale-[1.01] transition-transform duration-200 ease-in-out"
              >
                <h4 className="text-[1.2rem] font-semibold" style={{ color: 'var(--text)' }}>
                  {job.title}
                </h4>
                <p className="text-[0.9rem] font-medium" style={{ color: 'var(--accent)' }}>
                  {job.company}
                </p>
                <p className="text-[0.9rem] mb-1" style={{ color: 'var(--text-muted)' }}>
                  {job.duration}
                </p>
                <p className="text-[0.9rem]" style={{ color: 'var(--text-muted)' }}>
                  {job.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          <motion.h3
            initial={fadeUp.hidden}
            whileInView={fadeUp.visible}
            viewport={{ once: true, amount: 0.2 }}
            className="text-[1.2rem] font-semibold mb-6 flex items-center"
            style={{ color: 'var(--text)' }}
          >
            <GraduationCap className="h-5 w-5 mr-3 text-[var(--accent)]" />
            Education
          </motion.h3>
          <div className="space-y-6">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                initial={fadeUp.hidden}
                whileInView={fadeUp.visible}
                viewport={{ once: true, amount: 0.2 }}
                className="about-card p-4 texture-overlay hover:translate-y-[-2px] hover:scale-[1.01] transition-transform duration-200 ease-in-out"
              >
                <h4 className="text-[1.2rem] font-semibold" style={{ color: 'var(--text)' }}>
                  {edu.degree}
                </h4>
                <p className="text-[0.9rem] font-medium" style={{ color: 'var(--accent)' }}>
                  {edu.institution}
                </p>
                <p className="text-[0.9rem] mb-1" style={{ color: 'var(--text-muted)' }}>
                  {edu.year}
                </p>
                <p className="text-[0.9rem]" style={{ color: 'var(--text-muted)' }}>
                  {edu.details}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
