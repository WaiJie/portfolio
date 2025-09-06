import React from 'react';

export default function Footer() {
  return (
    <footer className="enhanced-card py-8 border-t border-gray-200 dark:border-gray-700 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Data Analytics Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
