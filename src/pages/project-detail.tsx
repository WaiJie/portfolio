import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, BookOpen, X, CalendarDays } from 'lucide-react';
import { projects } from '../content/projects/config';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import Header from '../components/header';
import Footer from '../components/footer';

// Define the structure for content blocks
interface ContentBlock {
  type: 'text' | 'image' | 'code' | 'iframe' | 'external-links';
  content?: string;
  src?: string;
  caption?: string;
  align?: 'left' | 'right' | 'center';
  language?: string; // For code blocks
}

interface Project {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  image: string;
  photo_credit?: string;  // <-- optional
  tags: string[];
  externalLinks?: { url: string; label: string; description: string; isNotebook?: boolean }[];
  date: string;
  blocks?: ContentBlock[];
}

interface ExternalLinkItem {
  url: string;
  label: string;
  description: string;
  isNotebook?: boolean;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
  title: string;
  isNotebook?: boolean;
}

function Modal({ isOpen, onClose, url, title, isNotebook }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const getModalTitle = () => {
    if (isNotebook) return `${title} - Jupyter Notebook`;
    return `${title} - External Link`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-[90vw] h-[90vh] enhanced-card rounded-xl shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold truncate pr-4 text-gray-900 dark:text-white">
            {getModalTitle()}
          </h3>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              asChild
            >
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Open in New Tab
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        {/* Content */}
        <div className="flex-1 p-4">
          <iframe
            src={url}
            className="w-full h-full border border-gray-200 dark:border-gray-600 rounded-lg"
            title={getModalTitle()}
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}

// Helper component to render individual content blocks
function ContentBlockRenderer({ block, projectTitle, openExternalModal }: { block: ContentBlock; projectTitle: string; openExternalModal: (url: string, isNotebook?: boolean) => void }) {
  // Safely access properties, providing defaults or null if undefined
  const blockType = block?.type;
  const blockContent = block?.content;
  const blockSrc = block?.src;
  const blockCaption = block?.caption;
  const blockAlign = block?.align;
  const blockLanguage = block?.language;

  // Placeholder image URL if the provided src is missing or invalid
  const placeholderImage = "https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"; // Generic placeholder

  const imageClasses = `w-full h-auto rounded-lg shadow-md ${
    blockAlign === 'left' ? 'float-left mr-4 max-w-xs' :
    blockAlign === 'right' ? 'float-right ml-4 max-w-xs' :
    'mx-auto max-w-3xl' // Center alignment
  }`;

  const captionClasses = `text-center text-sm text-gray-600 dark:text-gray-400 mt-2 ${
    blockAlign === 'left' ? 'ml-4' :
    blockAlign === 'right' ? 'mr-4' :
    'mx-auto'
  }`;

  switch (blockType) {
    case 'text':
      if (!blockContent) return null; // Handle empty content

      const lines = blockContent.split('\n').filter(line => line.trim() !== ''); // Split by new line and remove empty lines

      if (lines.length > 0 && lines[0].startsWith('##')) {
        const headerText = lines[0].replace('##', '').trim();
        const paragraphContent = lines.slice(1).join('\n').trim(); // Join remaining lines for paragraph

        return (
          <React.Fragment>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              {headerText}
            </h2>
            {paragraphContent && (
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                {paragraphContent}
              </p>
            )}
          </React.Fragment>
        );
      } else {
        // Render all other text content as paragraphs
        return (
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            {blockContent}
          </p>
        );
      }
    case 'image':
      return (
        <div className={`mb-6 ${blockAlign === 'center' ? 'text-center' : ''}`}>
          <img
            src={blockSrc || placeholderImage}
            alt={blockCaption || `Image for ${projectTitle}`}
            className={imageClasses}
          />
          {blockCaption && (
            <p className={captionClasses}>
              {blockCaption}
            </p>
          )}
        </div>
      );
    case 'code':
      return (
        <pre className="bg-gray-800 text-white p-4 rounded-lg overflow-x-auto mb-6">
          <code className={`language-${blockLanguage || 'plaintext'}`}>
            {blockContent || ''}
          </code>
        </pre>
      );
    case 'iframe':
      return (
        <div className="mb-6 aspect-w-16 aspect-h-9">
          <iframe
            src={blockSrc || ''}
            title={blockCaption || `Embedded content for ${projectTitle}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-lg shadow-md"
          ></iframe>
          {blockCaption && <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-2">{blockCaption}</p>}
        </div>
      );
    case 'external-links':
      return (
        <>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">External Links</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Access additional resources and materials related to this project.
          </p>
          <div className="space-y-4">
            {block.content && JSON.parse(block.content).map((link: ExternalLinkItem, index: number) => (
              <div key={index} className="flex flex-wrap gap-4 items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600">
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                    {link.label}
                  </h4>
                  <p className="text-lg text-gray-600 dark:text-gray-400">
                    {link.description}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button 
                    variant="default"
                    onClick={() => openExternalModal(link.url, link.isNotebook)}
                  >
                    {link.isNotebook ? <BookOpen className="h-4 w-4 mr-2" /> : <ExternalLink className="h-4 w-4 mr-2" />}
                    View in Modal
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => window.open(link.url, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Open in New Tab
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </>
      );
    default:
      return (
        <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
          <p><strong>Error:</strong> Invalid or missing content block data.</p>
          <pre className="text-xs overflow-x-auto">{JSON.stringify(block, null, 2)}</pre>
        </div>
      );
  }
}

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find(p => p.slug === slug) as Project | undefined;

  const [isExternalModalOpen, setIsExternalModalOpen] = useState(false);
  const [currentModalUrl, setCurrentModalUrl] = useState('');
  const [currentModalIsNotebook, setCurrentModalIsNotebook] = useState(false);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 nebula-background">
        <div className="floating-particles"></div>
        <Header />
        <div className="min-h-screen flex items-center justify-center pt-20 relative z-10">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Project Not Found</h1>
            <Link to="/" className="text-blue-600 dark:text-blue-400 hover:underline">
              Return to Home
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const openExternalModal = (url: string, isNotebook: boolean = false) => {
    setCurrentModalUrl(url);
    setCurrentModalIsNotebook(isNotebook);
    setIsExternalModalOpen(true);
  };

  // Get all external links (including notebook, new format, and legacy format)
  const getAllExternalLinks = (): ExternalLinkItem[] => {
    const links: ExternalLinkItem[] = [];
    
    // Add new format external links
    if (project.externalLinks) {
      links.push(...project.externalLinks);
    }
    
    // Add legacy format links for backward compatibility
    if (project.githubUrl && !links.some(link => link.url === project.githubUrl)) {
      links.push({
        url: project.githubUrl,
        label: "GitHub Repository",
        description: "View the complete source code and implementation"
      });
    }
    
    if (project.liveUrl && !links.some(link => link.url === project.liveUrl)) {
      links.push({
        url: project.liveUrl,
        label: "Live Demo",
        description: "Interact with the live application or dashboard"
      });
    }

    // Add notebook URL if it exists and isn't already in externalLinks
    if (project.notebookUrl && !links.some(link => link.url === project.notebookUrl)) {
      links.push({
        url: project.notebookUrl,
        label: "Jupyter Notebook",
        description: "Explore the complete analysis, code, and visualizations",
        isNotebook: true
      });
    }
    
    return links;
  };

  const externalLinks = getAllExternalLinks();

  // Format date for display
  const formattedDate = new Date(project.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  // Ensure blocks is always an array, defaulting to empty if undefined or null
  const projectBlocks = project.blocks || [];

  // Prepare the external links block
  const externalLinksBlock: ContentBlock = {
    type: 'external-links',
    content: JSON.stringify(externalLinks), // Stringify the links array
  };

  // Combine the overview block, other blocks, and the external links block
  const allBlocks = [...projectBlocks, externalLinksBlock];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 nebula-background">
      <div className="floating-particles"></div>
      <Header />
      
      {/* Header */}
      <div className="enhanced-card shadow-sm pt-20 border-b border-gray-200 dark:border-gray-700 relative z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-start mb-4">
            <Button 
              asChild
              variant="default"
              className="mb-4"
            >
              <Link to="/#projects">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Projects
              </Link>
            </Button>
            {project.date && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-center text-sm text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1.5 rounded-full border border-gray-200 dark:border-gray-700 shadow-sm"
              >
                <CalendarDays className="h-4 w-4 mr-2 text-blue-500 dark:text-blue-400" />
                <span>{formattedDate}</span>
              </motion.div>
            )}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {project.title}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-3xl mx-auto">
              {project.shortDescription}
            </p>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6 justify-center">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Project Image (Hero Image) */}
          {project.image && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-12 text-center"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg inline-block"
              />
              {project.photo_credit && (
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  {project.photo_credit}
                </p>
              )}
            </motion.div>
          )}

          {/* Render Content Blocks */}
          {allBlocks.length > 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="enhanced-card rounded-xl p-8 shadow-sm glow-on-hover texture-overlay space-y-8"
            >
              {allBlocks.map((block, index) => (
                block ? (
                  <React.Fragment key={index}>
                    <ContentBlockRenderer block={block} projectTitle={project.title} openExternalModal={openExternalModal} />
                  </React.Fragment>
                ) : null
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="enhanced-card rounded-xl p-8 shadow-sm mb-8 glow-on-hover texture-overlay text-center"
            >
              <p className="text-lg text-gray-500 dark:text-gray-400">No detailed content blocks available for this project.</p>
            </motion.div>
          )}
        </div>
      </div>

      {/* External Link Modal (now handles notebooks too) */}
      <Modal
        isOpen={isExternalModalOpen}
        onClose={() => setIsExternalModalOpen(false)}
        url={currentModalUrl}
        title={project.title}
        isNotebook={currentModalIsNotebook}
      />
      
      <Footer />
    </div>
  );
}
