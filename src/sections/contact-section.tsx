import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { Button } from '../components/ui/button';

export default function ContactSection() {
  return (
    <section id="contact" className="flex items-center justify-center py-8 md:py-12">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900 dark:text-white">Get In Touch</h2>
          <p className="text-base text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Feel free to reach out via email.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col sm:flex-row justify-center gap-6"
          >
            <Button 
              variant="outline" 
              size="md" 
              className="px-6 py-3 text-base flex-1 sm:flex-none min-w-[180px]"
              asChild
            >
              <a href="mailto:waijiechua@gmail.com">
                <Mail className="h-4 w-4 mr-2" />
                Send Email
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
