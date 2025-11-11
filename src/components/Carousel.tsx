'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, PanInfo, useMotionValue, useTransform, MotionValue, Transition } from 'motion/react';
import './Carousel.css';

export interface CarouselItem {
  title: string;
  description: string;
  id: number;
  icon: React.ReactElement;
}

export interface CarouselProps {
  items?: CarouselItem[];
  baseWidth?: number;
  autoplay?: boolean;
  autoplayDelay?: number;
  pauseOnHover?: boolean;
  loop?: boolean;
  round?: boolean;
}

// Iconos SVG simples como componentes
const FileTextIcon = () => (
  <svg className="carousel-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
);

const CircleIcon = () => (
  <svg className="carousel-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" strokeWidth={2} />
  </svg>
);

const LayersIcon = () => (
  <svg className="carousel-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
  </svg>
);

const LayoutIcon = () => (
  <svg className="carousel-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z" />
  </svg>
);

const CodeIcon = () => (
  <svg className="carousel-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const DEFAULT_ITEMS: CarouselItem[] = [
  {
    title: 'Text Animations',
    description: 'Cool text animations for your projects.',
    id: 1,
    icon: <FileTextIcon />
  },
  {
    title: 'Animations',
    description: 'Smooth animations for your projects.',
    id: 2,
    icon: <CircleIcon />
  },
  {
    title: 'Components',
    description: 'Reusable components for your projects.',
    id: 3,
    icon: <LayersIcon />
  },
  {
    title: 'Backgrounds',
    description: 'Beautiful backgrounds and patterns for your projects.',
    id: 4,
    icon: <LayoutIcon />
  },
  {
    title: 'Common UI',
    description: 'Common UI components are coming soon!',
    id: 5,
    icon: <CodeIcon />
  }
];

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 24;
const SPRING_OPTIONS = { type: 'spring' as const, stiffness: 300, damping: 30 };

// Componente wrapper que crea el transform para cada item
function CarouselItemWrapper({
  item,
  index,
  itemWidth,
  trackItemOffset,
  round,
  x,
  effectiveTransition,
  currentIndex,
  itemsLength
}: {
  item: CarouselItem;
  index: number;
  itemWidth: number;
  trackItemOffset: number;
  round: boolean;
  x: MotionValue<number>;
  effectiveTransition: Transition;
  currentIndex: number;
  itemsLength: number;
}) {
  const rotateY = useTransform(x, (value) => {
    const offset = value + index * trackItemOffset;
    const centerOffset = offset - (itemsLength * trackItemOffset) / 2;
    return centerOffset / 20;
  });

  return (
    <motion.div
      className={`carousel-item ${round ? 'round' : ''}`}
      style={{
        width: itemWidth,
        height: round ? itemWidth : '100%',
        rotateY,
        ...(round && { borderRadius: '50%' })
      }}
      transition={effectiveTransition}
    >
      <div className={`carousel-item-header ${round ? 'round' : ''}`}>
        <span className="carousel-icon-container">{item.icon}</span>
      </div>
      <div className="carousel-item-content">
        <div className="carousel-item-title">{item.title}</div>
        <p className="carousel-item-description">{item.description}</p>
      </div>
    </motion.div>
  );
}

export default function Carousel({
  items = DEFAULT_ITEMS,
  baseWidth = 300,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  loop = false,
  round = false
}: CarouselProps): React.JSX.Element {
  const containerPadding = 0;
  const itemWidth = baseWidth;
  const trackItemOffset = itemWidth + GAP;

  const carouselItems = loop ? [...items, items[0]] : items;
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isResetting, setIsResetting] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const container = containerRef.current;
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);
      return () => {
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [pauseOnHover]);

  useEffect(() => {
    if (autoplay && (!pauseOnHover || !isHovered)) {
      const timer = setInterval(() => {
        setCurrentIndex(prev => {
          if (prev === items.length - 1 && loop) {
            return prev + 1;
          }
          if (prev === carouselItems.length - 1) {
            return loop ? 0 : prev;
          }
          return prev + 1;
        });
      }, autoplayDelay);
      return () => clearInterval(timer);
    }
  }, [autoplay, autoplayDelay, isHovered, loop, items.length, carouselItems.length, pauseOnHover]);

  const effectiveTransition: Transition = isResetting ? { duration: 0 } : SPRING_OPTIONS;

  const handleAnimationComplete = () => {
    if (loop && currentIndex === carouselItems.length - 1) {
      setIsResetting(true);
      x.set(0);
      setCurrentIndex(0);
      setTimeout(() => setIsResetting(false), 50);
    }
  };

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo): void => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
      if (loop && currentIndex === items.length - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        setCurrentIndex(prev => Math.min(prev + 1, carouselItems.length - 1));
      }
    } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
      if (loop && currentIndex === 0) {
        setCurrentIndex(items.length - 1);
      } else {
        setCurrentIndex(prev => Math.max(prev - 1, 0));
      }
    }
  };

  const dragProps = loop
    ? {}
    : {
        dragConstraints: {
          left: -trackItemOffset * (carouselItems.length - 1),
          right: 0
        }
      };

  // Calcular el ancho total necesario para mostrar las tarjetas laterales
  // Mostrar la tarjeta central completa + partes visibles de las laterales
  const viewportPadding = itemWidth * 0.6; // Espacio para mostrar partes de tarjetas laterales (60% del ancho de tarjeta)
  const viewportWidth = itemWidth + viewportPadding * 2; // Ancho para mostrar tarjeta central + partes laterales
  const containerWidth = Math.max(baseWidth + viewportPadding * 2, viewportWidth);

  return (
    <div
      ref={containerRef}
      className={`carousel-container ${round ? 'round' : ''}`}
      style={{
        width: '100%',
        maxWidth: '100%',
        overflow: 'visible',
        ...(round && { height: `${baseWidth}px`, borderRadius: '50%' })
      }}
    >
      <div style={{ 
        overflow: 'visible', 
        width: '100%', 
        display: 'flex', 
        justifyContent: 'center',
        position: 'relative',
        minHeight: '450px',
        alignItems: 'center',
        padding: '20px 0'
      }}>
        <div style={{
          width: `${containerWidth}px`,
          overflow: 'visible',
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          margin: '0 auto'
        }}>
          <motion.div
            className="carousel-track"
            drag="x"
            {...dragProps}
            style={{
              display: 'flex',
              gap: `${GAP}px`,
              x,
              width: `${itemWidth * carouselItems.length + GAP * (carouselItems.length - 1)}px`,
              justifyContent: 'flex-start',
              alignItems: 'center',
              position: 'relative'
            }}
            onDragEnd={handleDragEnd}
            animate={{ 
              x: -(currentIndex * trackItemOffset) + (containerWidth - itemWidth) / 2
            }}
            transition={effectiveTransition}
            onAnimationComplete={handleAnimationComplete}
          >
            {carouselItems.map((item, index) => {
              return (
                <CarouselItemWrapper
                  key={`${item.id}-${index}`}
                  item={item}
                  index={index}
                  itemWidth={itemWidth}
                  trackItemOffset={trackItemOffset}
                  round={round}
                  x={x}
                  effectiveTransition={effectiveTransition}
                  currentIndex={currentIndex}
                  itemsLength={items.length}
                />
              );
            })}
          </motion.div>
        </div>
      </div>
      <div className={`carousel-indicators-container ${round ? 'round' : ''}`}>
        <div className="carousel-indicators">
          {items.map((_, index) => (
            <motion.div
              key={index}
              className={`carousel-indicator ${currentIndex % items.length === index ? 'active' : 'inactive'}`}
              animate={{
                scale: currentIndex % items.length === index ? 1.2 : 1
              }}
              onClick={() => setCurrentIndex(index)}
              transition={{ duration: 0.15 }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
