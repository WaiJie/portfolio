import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { projects } from '../content/projects/config';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import Header from '../components/header';

interface ContentBlock {
  type: 'text' | 'image' | 'code';
  content?: string;
  src?: string;
  caption?: string;
  align?: 'left' | 'right' | 'center';
  language?: string;
}

interface Project {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  image: string;
  photo_credit?: string;
  tags: string[];
  externalLinks?: { url: string; label: string; description: string }[];
  date: string;
  blocks?: ContentBlock[];
}

function ContentBlockRenderer({ block, projectTitle }: { block: ContentBlock; projectTitle: string }) {
  const { type, content, src, caption, align, language } = block || {};
  const placeholderImage =
    'https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';

  const imageClasses = `w-full h-auto rounded-lg ${
    align === 'left'
      ? 'float-left mr-4 max-w-xs'
      : align === 'right'
      ? 'float-right ml-4 max-w-xs'
      : 'mx-auto max-w-3xl'
  }`;

  const captionClasses = `text-center text-sm mt-2 ${
    align === 'left' ? 'ml-4' : align === 'right' ? 'mr-4' : 'mx-auto'
  }`;

  switch (type) {
    case 'text':
      if (!content) return null;

      const lines = content.split('\n').filter((l) => l.trim() !== '');
      if (lines[0]?.startsWith('##')) {
        const headerText = lines[0].replace('##', '').trim();
        const paragraphContent = lines.slice(1).join('\n').trim();
        return (
          <>
            <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--text)' }}>
              {headerText}
            </h2>
            {paragraphContent && (
              <p className="text-lg mb-6" style={{ color: 'var(--text-muted)', textAlign: 'left' }}>
                {paragraphContent}
              </p>
            )}
          </>
        );
      }
      return (
        <p className="text-lg mb-6" style={{ color: 'var(--text-muted)', textAlign: 'left' }}>
          {content}
        </p>
      );

    case 'image':
      return (
        <div className={`mb-6 ${align === 'center' ? 'text-center' : ''}`}>
          <img src={src || placeholderImage} alt={caption || `Image for ${projectTitle}`} className={imageClasses} />
          {caption && (
            <p className={captionClasses} style={{ color: 'var(--text-muted)' }}>
              {caption}
            </p>
          )}
        </div>
      );

    case 'code':
      return (
        <pre
          className="p-4 rounded-lg overflow-x-auto mb-6"
          style={{ background: 'var(--bg-soft)', color: 'var(--text)', textAlign: 'left' }}
        >
          <code className={`language-${language || 'plaintext'}`}>{content || ''}</code>
        </pre>
      );

    default:
      return null;
  }
}

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) return <p>Project not found</p>;

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg)] dark:bg-[var(--bg-soft)]">
      <Header />

      <div className="container mx-auto px-4 pt-28 pb-12 relative z-10 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          {/* Title & Description */}
          <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text)' }}>
            {project.title}
          </h1>
          <p className="text-xl mb-6 max-w-3xl mx-auto text-left" style={{ color: 'var(--text-muted)' }}>
            {project.shortDescription}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6 justify-center">
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                style={{ color: 'var(--tag-text)', borderColor: 'var(--accent-soft)' }}
              >
                {tag}
              </Badge>
            ))}
          </div>

          {/* Main Project Image */}
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
                className="w-full h-64 md:h-96 object-cover rounded-xl shadow-none"
              />
              {project.photo_credit && (
                <p className="text-sm mt-2 text-center" style={{ color: 'var(--text-muted)' }}>
                  {project.photo_credit}
                </p>
              )}
            </motion.div>
          )}

          {/* Content Blocks */}
          {project.blocks && project.blocks.length > 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-8 text-left"
            >
              {project.blocks.map((block, idx) => (
                <ContentBlockRenderer key={idx} block={block} projectTitle={project.title} />
              ))}
            </motion.div>
          ) : (
            <div className="rounded-xl p-8 mb-8 text-left" style={{ background: 'transparent' }}>
              <p className="text-lg" style={{ color: 'var(--text-muted)' }}>
                No detailed content blocks available for this project.
              </p>
            </div>
          )}

          {/* External Links */}
          {project.externalLinks && project.externalLinks.length > 0 && (
            <div className="mt-12 space-y-4 text-left">
              <h2 className="text-2xl font-semibold mb-4" style={{ color: 'var(--text)' }}>
                External Links
              </h2>
              <div className="space-y-4">
                {project.externalLinks.map((link, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col md:flex-row justify-between items-start md:items-center p-4 rounded-xl border"
                    style={{ background: 'var(--tag-bg)', borderColor: 'var(--card-border)' }}
                  >
                    <p className="text-lg mb-2 md:mb-0 md:mr-4" style={{ color: 'var(--text-muted)', flex: 1 }}>
                      {link.description}
                    </p>
                    <Button
                      variant="outline"
                      onClick={() => window.open(link.url, '_blank')}
                      className="text-[var(--text)] border-[var(--accent-soft)] bg-transparent hover:text-[var(--accent)] hover:border-[var(--accent)] shadow-none"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" /> {link.label}
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
