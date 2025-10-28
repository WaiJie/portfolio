import React from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from './contexts/theme-context';
import Header from './components/Header'; // Assuming you have a Header component

function App() {
  return (
    <ThemeProvider>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 nebula-background transition-colors">
        <Outlet />
      </main>
    </ThemeProvider>
  );
}

export default App;
