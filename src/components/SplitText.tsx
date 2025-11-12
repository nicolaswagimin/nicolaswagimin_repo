'use client';

import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText as GSAPSplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, GSAPSplitText, useGSAP);

export interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string | ((t: number) => number);
  splitType?: 'chars' | 'words' | 'lines' | 'words, chars';
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  threshold?: number;
  rootMargin?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  textAlign?: React.CSSProperties['textAlign'];
  onLetterAnimationComplete?: () => void;
  repeat?: boolean;
}

const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = '',
  delay = 80,
  duration = 0.8,
  ease = 'power2.out',
  splitType = 'chars',
  from = { opacity: 0, y: 30 },
  to = { opacity: 1, y: 0 },
  threshold = 0.15,
  rootMargin = '0px',
  tag = 'p',
  textAlign = 'center',
  onLetterAnimationComplete,
  repeat = false,
}) => {
  const ref = useRef<HTMLElement>(null);
  const splitInstanceRef = useRef<GSAPSplitText | null>(null);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);
  const animationRef = useRef<gsap.core.Tween | null>(null);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const hasAnimatedRef = useRef(false);
  const previousTextRef = useRef<string>('');

  useEffect(() => {
    // Verificar si las fuentes están cargadas
    if (typeof window !== 'undefined') {
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => setFontsLoaded(true)).catch(() => setFontsLoaded(true));
      } else {
        // Fallback: esperar un poco y luego continuar
        setTimeout(() => setFontsLoaded(true), 100);
      }
    }
  }, []);

  // Resetear animación cuando cambia el texto
  useEffect(() => {
    if (previousTextRef.current !== text && previousTextRef.current !== '') {
      hasAnimatedRef.current = false;
      // Forzar re-render y re-animación
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
        scrollTriggerRef.current = null;
      }
      if (animationRef.current) {
        animationRef.current.kill();
        animationRef.current = null;
      }
      if (splitInstanceRef.current) {
        try {
          splitInstanceRef.current.revert();
        } catch {
          // Ignorar errores
        }
        splitInstanceRef.current = null;
      }
    }
    previousTextRef.current = text;
  }, [text]);

  useGSAP(
    () => {
      if (!ref.current || !text || !fontsLoaded) return;

      const element = ref.current;

      // Limpiar instancias anteriores
      if (scrollTriggerRef.current) {
        scrollTriggerRef.current.kill();
        scrollTriggerRef.current = null;
      }

      if (animationRef.current) {
        animationRef.current.kill();
        animationRef.current = null;
      }

      if (splitInstanceRef.current) {
        try {
          splitInstanceRef.current.revert();
        } catch {
          // Ignorar errores
        }
        splitInstanceRef.current = null;
      }

      // Pequeño delay para asegurar que el DOM está listo
      gsap.delayedCall(0.1, () => {
        if (!element) return;

        try {
          // Crear instancia de SplitText
          const split = new GSAPSplitText(element, {
            type: splitType,
            linesClass: 'split-line',
            wordsClass: 'split-word',
            charsClass: 'split-char',
          });

          splitInstanceRef.current = split;

          // Determinar qué elementos animar
          let animatableElements: Element[] = [];
          if (splitType.includes('chars') && split.chars && split.chars.length > 0) {
            animatableElements = split.chars;
          } else if (splitType.includes('words') && split.words && split.words.length > 0) {
            animatableElements = split.words;
          } else if (split.lines && split.lines.length > 0) {
            animatableElements = split.lines;
          }

          if (animatableElements.length === 0) {
            return;
          }

          // Configurar estado inicial - hacer visible inmediatamente para evitar parpadeo
          gsap.set(animatableElements, { 
            ...from,
            visibility: 'visible' // Asegurar que sea visible
          });

          // Función para ejecutar la animación de forma fluida
          const playAnimation = (resetFirst = true) => {
            // Evitar animaciones duplicadas
            if (animationRef.current && animationRef.current.isActive()) {
              return;
            }

            // Limpiar animación anterior
            if (animationRef.current) {
              animationRef.current.kill();
              animationRef.current = null;
            }

            // Resetear estado inicial si es necesario
            if (resetFirst) {
              gsap.set(animatableElements, { ...from });
            }

            // Crear animación suave con stagger correcto
            animationRef.current = gsap.to(animatableElements, {
              ...to,
              duration: duration,
              ease: ease,
              stagger: delay / 1000, // Stagger en segundos
              onComplete: () => {
                hasAnimatedRef.current = true;
                animationRef.current = null;
                if (onLetterAnimationComplete) {
                  onLetterAnimationComplete();
                }
              },
            });
          };

          // Calcular puntos de ScrollTrigger de forma más precisa
          const marginMatch = rootMargin.match(/^(-?\d+)(px|em|rem|%)?$/);
          const marginValue = marginMatch ? parseFloat(marginMatch[1]) : 0;
          const marginUnit = marginMatch ? marginMatch[2] || 'px' : 'px';

          // Configurar inicio: cuando el elemento entra en el viewport (80% desde arriba)
          const startPercent = 80;
          let start = `top ${startPercent}%`;
          if (marginValue !== 0) {
            const offset = marginValue < 0 
              ? `+=${Math.abs(marginValue)}${marginUnit}` 
              : `-=${marginValue}${marginUnit}`;
            start += offset;
          }

          // Crear ScrollTrigger - animación se activa cuando el elemento entra
          const st = ScrollTrigger.create({
            trigger: element,
            start: start,
            once: !repeat, // Solo una vez si repeat es false
            onEnter: () => {
              // Cuando el elemento entra en el viewport por primera vez
              playAnimation(true);
            },
            onEnterBack: () => {
              // Cuando haces scroll hacia arriba y el elemento entra de nuevo
              if (repeat) {
                playAnimation(true);
              } else if (!hasAnimatedRef.current) {
                // Si no ha animado aún, animar
                playAnimation(true);
              }
            },
            onLeaveBack: () => {
              // Cuando el elemento sale completamente por arriba
              if (repeat) {
                // Resetear flag para permitir re-animación
                hasAnimatedRef.current = false;
              }
            },
          });

          scrollTriggerRef.current = st;

          // Verificar si ya está visible al cargar
          gsap.delayedCall(0.4, () => {
            ScrollTrigger.refresh();
            if (st.isActive && !hasAnimatedRef.current) {
              playAnimation(true);
            }
          });
        } catch (error) {
          console.warn('Error creating SplitText animation:', error);
        }
      });

      // Cleanup
      return () => {
        if (scrollTriggerRef.current) {
          scrollTriggerRef.current.kill();
          scrollTriggerRef.current = null;
        }
        if (animationRef.current) {
          animationRef.current.kill();
          animationRef.current = null;
        }
        if (splitInstanceRef.current) {
          try {
            splitInstanceRef.current.revert();
          } catch {
            // Ignorar errores de limpieza
          }
          splitInstanceRef.current = null;
        }
      };
    },
    {
      dependencies: [text, fontsLoaded, delay, duration, ease, splitType, threshold, rootMargin, repeat, onLetterAnimationComplete],
      scope: ref,
    }
  );

  const renderTag = () => {
    const isInline = tag === 'span';
    const style: React.CSSProperties = {
      textAlign,
      overflow: 'visible', // Cambiar a visible para evitar que se corte
      display: isInline ? 'inline-block' : 'block',
      whiteSpace: 'normal',
      wordWrap: 'break-word',
      width: isInline ? 'auto' : '100%',
    };
    const classes = `${className}`.trim();

    switch (tag) {
      case 'h1':
        return (
          <h1 ref={ref as React.RefObject<HTMLHeadingElement>} style={style} className={classes}>
            {text}
          </h1>
        );
      case 'h2':
        return (
          <h2 ref={ref as React.RefObject<HTMLHeadingElement>} style={style} className={classes}>
            {text}
          </h2>
        );
      case 'h3':
        return (
          <h3 ref={ref as React.RefObject<HTMLHeadingElement>} style={style} className={classes}>
            {text}
          </h3>
        );
      case 'h4':
        return (
          <h4 ref={ref as React.RefObject<HTMLHeadingElement>} style={style} className={classes}>
            {text}
          </h4>
        );
      case 'h5':
        return (
          <h5 ref={ref as React.RefObject<HTMLHeadingElement>} style={style} className={classes}>
            {text}
          </h5>
        );
      case 'h6':
        return (
          <h6 ref={ref as React.RefObject<HTMLHeadingElement>} style={style} className={classes}>
            {text}
          </h6>
        );
      case 'span':
        return (
          <span ref={ref as React.RefObject<HTMLSpanElement>} style={style} className={classes}>
            {text}
          </span>
        );
      case 'div':
        return (
          <div ref={ref as React.RefObject<HTMLDivElement>} style={style} className={classes}>
            {text}
          </div>
        );
      default:
        return (
          <p ref={ref as React.RefObject<HTMLParagraphElement>} style={style} className={classes}>
            {text}
          </p>
        );
    }
  };

  return renderTag();
};

export default SplitText;
