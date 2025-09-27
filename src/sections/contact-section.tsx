import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { Button } from '../components/ui/button';

export default function ContactSection() {
  return (
    <section id="contact" className="flex items-center justify-center py-8 md:py-12">
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-center mb-12"
        >
          <h2
            className="text-2xl md:text-3xl font-bold mb-3"
            style={{ color: 'var(--text)' }}
          >
            Get In Touch
          </h2>
          <p
            className="text-base max-w-2xl mx-auto"
            style={{ color: 'var(--text-muted)' }}
          >
            Feel free to reach out via email.
          </p>
        </motion.div>

        {/* Button */}
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.05 }}
            className="flex flex-col sm:flex-row justify-center gap-6"
          >
            <Button
              variant="outline"
              size="md"
              className="px-6 py-3 text-base flex-1 sm:flex-none min-w-[180px]"
              asChild
              style={{ color: 'var(--accent)', borderColor: 'var(--accent)' }}
            >
              <a href="mailto:waijiechua@gmail.com" className="flex items-center justify-center">
                <Mail className="h-4 w-4 mr-2 text-[var(--accent)]" />
                Send Email
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
