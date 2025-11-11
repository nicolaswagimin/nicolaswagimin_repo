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

const DRAG_BUFFER = 50;
const VELOCITY_THRESHOLD = 300;
const GAP = 32;
const SPRING_OPTIONS = { type: 'spring' as const, stiffness: 260, damping: 25 };

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
  // Calcular distancia desde el centro (sin considerar loop para simplificar)
  const distanceFromCenter = Math.abs(index - currentIndex);
  
  // Simplificar rotación 3D: solo aplicar rotación basada en posición relativa
  const isActive = index === currentIndex;
  const isNext = index === currentIndex + 1 || (currentIndex === itemsLength - 1 && index === 0);
  const isPrev = index === currentIndex - 1 || (currentIndex === 0 && index === itemsLength - 1);
  
  // Calcular rotación 3D suave
  let rotateYValue = 0;
  if (isNext) {
    rotateYValue = -15;
  } else if (isPrev) {
    rotateYValue = 15;
  } else if (distanceFromCenter > 1) {
    rotateYValue = distanceFromCenter > 2 ? (index < currentIndex ? 25 : -25) : (index < currentIndex ? 20 : -20);
  }

  // Calcular opacidad y escala
  const opacity = isActive ? 1 : isNext || isPrev ? 0.7 : 0.4;
  const scale = isActive ? 1 : isNext || isPrev ? 0.92 : 0.85;
  const zIndex = isActive ? 10 : isNext || isPrev ? 5 : 1;

  return (
    <motion.div
      className={`carousel-item ${round ? 'round' : ''} ${isActive ? 'active' : ''}`}
      style={{
        width: itemWidth,
        height: round ? itemWidth : 'auto',
        minHeight: '400px',
        zIndex,
        ...(round && { borderRadius: '50%' })
      }}
      animate={{
        opacity,
        scale,
        rotateY: rotateYValue,
        x: 0
      }}
      transition={{
        opacity: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
        scale: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
        rotateY: { duration: 0.5, ease: [0.4, 0, 0.2, 1] }
      }}
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

  // Calcular el ancho del viewport para mostrar tarjeta central + partes de laterales
  const viewportPadding = itemWidth * 0.35; // Espacio para mostrar partes de tarjetas laterales
  const viewportWidth = itemWidth + viewportPadding * 2;

  return (
    <div
      ref={containerRef}
      className={`carousel-container ${round ? 'round' : ''}`}
      style={{
        width: '100%',
        maxWidth: '100%',
        ...(round && { height: `${baseWidth}px`, borderRadius: '50%' })
      }}
    >
      <div 
        className="carousel-viewport-wrapper"
        style={{ 
          overflow: 'hidden', 
          width: '100%', 
          display: 'flex', 
          justifyContent: 'center',
          position: 'relative',
          minHeight: '500px',
          alignItems: 'center',
          padding: '40px 0'
        }}
      >
        <div 
          className="carousel-viewport"
          style={{
            width: `${viewportWidth}px`,
            overflow: 'hidden',
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            margin: '0 auto',
            perspective: '1000px',
            transformStyle: 'preserve-3d'
          }}
        >
          <motion.div
            className="carousel-track"
            drag="x"
            dragElastic={0.15}
            dragMomentum={false}
            {...dragProps}
            style={{
              display: 'flex',
              gap: `${GAP}px`,
              x,
              width: `${itemWidth * carouselItems.length + GAP * (carouselItems.length - 1)}px`,
              justifyContent: 'flex-start',
              alignItems: 'center',
              position: 'relative',
              transformStyle: 'preserve-3d'
            }}
            onDragEnd={handleDragEnd}
            animate={{ 
              x: -(currentIndex * trackItemOffset) + (viewportWidth - itemWidth) / 2
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
