import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './pages/home';
import ProjectDetail from './pages/project-detail';

const AppRouter = () => (
  <BrowserRouter basename="/portfolio">
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="projects/:slug" element={<ProjectDetail />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default AppRouter;