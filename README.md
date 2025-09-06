# Data Science Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features individual project pages with Jupyter notebook embedding capabilities.

## Features

- 🎨 Modern, responsive design
- 📱 Mobile-first approach
- 🚀 Fast loading with Vite
- 📊 Project showcase with detailed pages
- 📓 Jupyter notebook embedding
- 🎭 Smooth animations with Framer Motion
- 🔍 SEO optimized

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## Deployment to GitHub Pages

1. Update the `homepage` field in `package.json` with your GitHub Pages URL:
```json
"homepage": "https://yourusername.github.io/portfolio"
```

2. Update the `base` field in `vite.config.ts`:
```typescript
base: '/portfolio/'
```

3. Update the `basename` in `src/App.tsx`:
```typescript
<Router basename="/portfolio">
```

4. Build and deploy:
```bash
npm run deploy
```

## Customization

### Adding Projects

Edit `src/lib/data.ts` to add your projects:

```typescript
export const projects: ProjectType[] = [
  {
    id: "unique-id",
    title: "Your Project Title",
    slug: "your-project-slug",
    shortDescription: "Brief description",
    fullDescription: "Detailed description",
    image: "https://your-image-url.com/image.jpg",
    tags: ["Tag1", "Tag2"],
    githubUrl: "https://github.com/yourusername/project",
    liveUrl: "https://your-live-demo.com",
    notebookUrl: "https://nbviewer.org/github/yourusername/project/blob/main/notebook.ipynb",
    technologies: ["Python", "Pandas"],
    challenges: ["Challenge 1", "Challenge 2"],
    outcomes: ["Outcome 1", "Outcome 2"]
  }
];
```

### Embedding Jupyter Notebooks

To embed Jupyter notebooks:

1. Upload your notebook to GitHub
2. Get the nbviewer URL: `https://nbviewer.org/github/username/repo/blob/main/notebook.ipynb`
3. Add the URL to your project's `notebookUrl` field

### Updating Personal Information

Update the following files:
- `src/sections/hero-section.tsx` - Personal info, links, interests
- `src/sections/about-me-comprehensive-section.tsx` - About section, education
- `src/lib/data.ts` - Skills, work experience

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- React Router
- Vite
- Lucide React (icons)

## License

MIT License - feel free to use this template for your own portfolio!
