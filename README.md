# Data Science Portfolio

A responsive portfolio site built with **React**, **TypeScript**, and **Tailwind CSS**, designed to showcase data science projects with support for embedding **Jupyter Notebooks**.

---

## 🚀 Features

- Responsive, mobile-first design  
- Fast loading with Vite  
- Project pages with notebook embedding  
- Smooth animations via Framer Motion  
- SEO optimized  

---

## 🛠 Getting Started

### Prerequisites

- Node.js v16+
- npm or yarn

### Setup

```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
npm install
npm run dev
```

Visit: [http://localhost:5173](http://localhost:5173)

---

## 📦 Deployment (GitHub Pages)

1. Set `homepage` in `package.json`:

```json
"homepage": "https://yourusername.github.io/portfolio"
```

2. Set `base` in `vite.config.ts`:

```ts
base: '/portfolio/'
```

3. Set `basename` in `src/App.tsx`:

```tsx
<Router basename="/portfolio">
```

4. Deploy:

```bash
npm run deploy
```

---

## ⚙️ Customization

### Add Projects

Edit `src/lib/data.ts`:

```ts
export const projects = [
  {
    id: "project-id",
    title: "Project Title",
    slug: "project-slug",
    shortDescription: "Brief summary",
    fullDescription: "Detailed write-up",
    image: "https://link-to-image.com",
    tags: ["Tag1", "Tag2"],
    githubUrl: "...",
    liveUrl: "...",
    notebookUrl: "...",
    technologies: ["Python", "Pandas"],
    challenges: ["Challenge 1"],
    outcomes: ["Outcome 1"]
  }
];
```

### Embed Notebooks

1. Upload notebook to GitHub
2. Use nbviewer URL:
   `https://nbviewer.org/github/username/repo/blob/main/notebook.ipynb`
3. Add the link to `notebookUrl`

### Update Personal Info

* `src/sections/hero-section.tsx` – basic info and links
* `src/sections/about-me-comprehensive-section.tsx` – bio and education
* `src/lib/data.ts` – skills and experience

---

## 🧱 Tech Stack

* React 18
* TypeScript
* Tailwind CSS
* Vite
* Framer Motion
* React Router
* Lucide React (icons)

---

## 📄 License

MIT License

---

## ⚠️ Disclaimer

This portfolio was built with the assistance of AI tools, including code generation and documentation support.

