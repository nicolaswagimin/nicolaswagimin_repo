'use client';

import React, { useState, useEffect, useRef, ReactNode, MouseEventHandler } from 'react';
import { motion, useInView } from 'framer-motion';
import { getLanguageColor } from '@/services/github.service';
import type { GitHubRepo } from '@/types/github';
import { formatDate } from '@/utils/date';
import { scrollToElement } from '@/utils/scroll';
import { SCROLL_OPTIONS, ANIMATION_DELAYS } from '@/constants';


interface AnimatedListProjectsProps {
  projects: GitHubRepo[];
  className?: string;
  itemClassName?: string;
  displayScrollbar?: boolean;
  showGradients?: boolean;
  onProjectSelect?: (project: GitHubRepo, index: number) => void;
}

interface AnimatedProjectItemProps {
  children: ReactNode;
  delay?: number;
  index: number;
  onMouseEnter?: MouseEventHandler<HTMLDivElement>;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

const AnimatedProjectItem: React.FC<AnimatedProjectItemProps> = ({
  children,
  delay = 0,
  index,
  onMouseEnter,
  onClick,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.4, once: false });
  return (
    <motion.div
      ref={ref}
      data-index={index}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      initial={{ y: 12, opacity: 0, scale: 0.98 }}
      animate={inView ? { y: 0, opacity: 1, scale: 1 } : { y: 12, opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.45, delay }}
      className="mb-4 cursor-pointer"
    >
      {children}
    </motion.div>
  );
};

const AnimatedListProjects: React.FC<AnimatedListProjectsProps> = ({
  projects,
  className = '',
  itemClassName = '',
  displayScrollbar = true,
  showGradients = true,
  onProjectSelect,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [keyboardNav, setKeyboardNav] = useState(false);
  const [topGradientOpacity, setTopGradientOpacity] = useState(1);
  const [bottomGradientOpacity, setBottomGradientOpacity] = useState(1);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        setKeyboardNav(true);
        
        if (e.key === 'ArrowDown' && selectedIndex < projects.length - 1) {
          setSelectedIndex(selectedIndex + 1);
        } else if (e.key === 'ArrowUp' && selectedIndex > 0) {
          setSelectedIndex(selectedIndex - 1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, projects.length]);

  const handleScroll = () => {
    if (!listRef.current) return;
    
    const { scrollTop, scrollHeight, clientHeight } = listRef.current;
    const maxScroll = scrollHeight - clientHeight;
    const threshold = ANIMATION_DELAYS.GRADIENT_FADE_THRESHOLD;
    
    if (maxScroll > 0) {
      setTopGradientOpacity(scrollTop > threshold ? 0 : 1 - scrollTop / threshold);
      setBottomGradientOpacity(scrollTop < maxScroll - threshold ? 1 : (maxScroll - scrollTop) / threshold);
    }
  };

  useEffect(() => {
    if (!listRef.current || !keyboardNav) return;
    
    const container = listRef.current;
    const selectedItem = container.children[selectedIndex] as HTMLElement;
    
    if (selectedItem) {
      scrollToElement(container, selectedItem, SCROLL_OPTIONS.EXTRA_MARGIN);
    } else {
      setKeyboardNav(false);
    }
  }, [selectedIndex, keyboardNav]);

  return (
    <div className={`relative w-full max-w-4xl mx-auto ${className}`}>
      <div
        ref={listRef}
        className={`max-h-[600px] overflow-y-auto p-4 ${
          displayScrollbar
            ? '[&::-webkit-scrollbar]:w-[8px] [&::-webkit-scrollbar-track]:bg-muted [&::-webkit-scrollbar-thumb]:bg-border [&::-webkit-scrollbar-thumb]:rounded-[4px] dark:[&::-webkit-scrollbar-track]:bg-muted dark:[&::-webkit-scrollbar-thumb]:bg-border'
            : 'scrollbar-hide'
        }`}
        onScroll={handleScroll}
        style={{
          scrollbarWidth: displayScrollbar ? 'thin' : 'none',
          scrollbarColor: 'var(--border) var(--muted)'
        }}
      >
        {projects.map((project, index) => (
          <AnimatedProjectItem
            key={project.id}
            delay={ANIMATION_DELAYS.PROJECT_ITEM_BASE * index + Math.random() * ANIMATION_DELAYS.PROJECT_ITEM_RANDOM}
            index={index}
            onMouseEnter={() => setSelectedIndex(index)}
            onClick={() => {
              setSelectedIndex(index);
              if (onProjectSelect) {
                onProjectSelect(project, index);
              }
            }}
          >
            <motion.div 
              className={`bg-card rounded-xl border border-border p-6 ${selectedIndex === index ? 'border-primary/50 bg-muted/50' : ''} ${itemClassName}`}
              initial={{ boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}
              whileHover={{ 
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
                borderColor: 'var(--primary)',
                transition: { duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }
              }}
              animate={{ 
                borderColor: selectedIndex === index ? 'var(--primary)' : 'var(--border)'
              }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1 space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-card border-2 border-border rounded-full mt-2 flex-shrink-0"></div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 flex-wrap">
                        <motion.h3 
                          className="text-xl font-semibold text-foreground hover:text-primary transition-colors"
                          initial={{ x: -10, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
                        >
                          <a
                            href={project.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {project.name}
                            <svg
                              className="w-4 h-4 text-muted-foreground"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                          </a>
                        </motion.h3>
                        {project.language && (
                          <motion.div 
                            className="flex items-center gap-2"
                            initial={{ x: 10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                          >
                            <div
                              className="w-3 h-3 rounded-full"
                              style={{ backgroundColor: project.language ? getLanguageColor(project.language) : '#888' }}
                            ></div>
                            <span className="text-sm text-muted-foreground">
                              {project.language}
                            </span>
                          </motion.div>
                        )}
                      </div>
                      {project.description && (
                        <p className="text-muted-foreground mt-2 text-sm">
                          {project.description}
                        </p>
                      )}
                    </div>
                  </div>

                  {project.topics.length > 0 && (
                    <motion.div 
                      className="flex flex-wrap gap-2 ml-5"
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                    >
                      {project.topics.slice(0, 5).map((topic, topicIndex) => (
                        <motion.span
                          key={topicIndex}
                          className="px-2 py-1 bg-muted rounded-md text-xs text-foreground border border-border"
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.4, delay: 0.3 + (topicIndex * 0.08), ease: "easeOut" }}
                          whileHover={{ scale: 1.05 }}
                        >
                          {topic}
                        </motion.span>
                      ))}
                    </motion.div>
                  )}

                  <motion.div 
                    className="flex items-center gap-4 text-sm text-muted-foreground ml-5"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.5 }}
                  >
                    <div className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>Actualizado {formatDate(project.updated_at, 'es-ES')}</span>
                    </div>
                    {project.stargazers_count > 0 && (
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span>{project.stargazers_count}</span>
                      </div>
                    )}
                    {project.forks_count > 0 && (
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                          <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                        </svg>
                        <span>{project.forks_count}</span>
                      </div>
                    )}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatedProjectItem>
        ))}
      </div>
      {showGradients && (
        <>
          <div
            className="absolute top-0 left-0 right-0 h-8 pointer-events-none"
            style={{
              background: `linear-gradient(to bottom, var(--background) 0%, transparent 100%)`,
              opacity: topGradientOpacity
            }}
          />
          <div
            className="absolute bottom-0 left-0 right-0 h-8 pointer-events-none"
            style={{
              background: `linear-gradient(to top, var(--background) 0%, transparent 100%)`,
              opacity: bottomGradientOpacity
            }}
          />
        </>
      )}
    </div>
  );
};

export default AnimatedListProjects;