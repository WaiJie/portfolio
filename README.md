# Data Science Portfolio

A single-page portfolio showcasing data science and analytics projects. Features a light/dark theme with a beige "e-book" light mode and a cyan nebula dark mode, filterable project grid with search, animated hero section with a rotating featured project slideshow, and responsive design across all screen sizes.

## Credits

- Initially built with [bolt.diy](https://bolt.diy)
- Modified and maintained with [Opencode](https://opencode.ai)

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Framer Motion
- React Router
- Lucide React (icons)

## Portfolio Content Structure

This site is organized to clearly present data science projects and related documentation.

-   **`src/pages`**: Contains the main page components, such as `Home.tsx` and `ProjectDetail.tsx`, defining the layout and routing for different views of the portfolio.
-   **`src/sections`**: Houses reusable UI sections like `HeroSection`, `ProjectsSection`, `AboutMeComprehensiveSection`, and `ContactSection`, which compose the content of the main pages.
-   **`src/content/projects`**: This directory is where all project-specific data is stored. Each project is defined with detailed descriptions, images, tags, and external links (including PDF documents), making it easy to manage and update portfolio entries.
-   **`src`**: The overall application's source code resides within this directory, encompassing all components, contexts, and utility functions.
-   **`portfolio`**: As indicated by the `basename` in `App.tsx` and deployment settings, this serves as the base path for the deployed application, ensuring all assets and routes are correctly resolved.

