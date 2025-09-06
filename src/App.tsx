import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/theme-context';
import Home from './pages/home';
import ProjectDetail from './pages/project-detail';

function App() {
  return (
    <ThemeProvider>
      <Router basename="/portfolio">
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 nebula-background transition-colors">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:slug" element={<ProjectDetail />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
