'use client';

import { motion, useMotionValue, useTransform } from 'motion/react';
import { useState, useEffect, useRef } from 'react';
import './Stack.css';

interface CardRotateProps {
  children: React.ReactNode;
  onSendToBack: () => void;
  sensitivity: number;
}

function CardRotate({ children, onSendToBack, sensitivity }: CardRotateProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [60, -60]);
  const rotateY = useTransform(x, [-100, 100], [-60, 60]);

  function handleDragEnd(_: never, info: { offset: { x: number; y: number } }) {
    if (Math.abs(info.offset.x) > sensitivity || Math.abs(info.offset.y) > sensitivity) {
      onSendToBack();
    } else {
      x.set(0);
      y.set(0);
    }
  }

  return (
    <motion.div
      className="card-rotate"
      style={{ x, y, rotateX, rotateY }}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.6}
      whileTap={{ cursor: 'grabbing' }}
      onDragEnd={handleDragEnd}
    >
      {children}
    </motion.div>
  );
}

interface StackProps {
  randomRotation?: boolean;
  sensitivity?: number;
  cardDimensions?: { width: number; height: number };
  sendToBackOnClick?: boolean;
  cardsData?: { id: number; img: string }[];
  animationConfig?: { stiffness: number; damping: number };
}

export default function Stack({
  randomRotation = false,
  sensitivity = 200,
  cardDimensions = { width: 208, height: 208 },
  cardsData = [],
  animationConfig = { stiffness: 260, damping: 20 },
  sendToBackOnClick = false
}: StackProps) {
  const [cards, setCards] = useState(
    cardsData.length
      ? cardsData
      : [
          { id: 1, img: '/images/IMG_0276.jpg' },
          { id: 2, img: '/images/IMG_0273.jpg' }
        ]
  );
  const autoRotateIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const isUserInteractingRef = useRef(false);

  const sendToBack = (id: number) => {
    setCards(prev => {
      const newCards = [...prev];
      const index = newCards.findIndex(card => card.id === id);
      const [card] = newCards.splice(index, 1);
      newCards.unshift(card);
      return newCards;
    });
  };

  // Animación infinita automática
  useEffect(() => {
    // Iniciar rotación automática después de 3 segundos
    const startAutoRotate = () => {
      autoRotateIntervalRef.current = setInterval(() => {
        if (!isUserInteractingRef.current) {
          // Rotar la última tarjeta al frente
          setCards(prev => {
            const newCards = [...prev];
            const lastCard = newCards.pop();
            if (lastCard) {
              newCards.unshift(lastCard);
            }
            return newCards;
          });
        }
      }, 3000); // Rotar cada 3 segundos
    };

    const timeoutId = setTimeout(startAutoRotate, 3000);

    return () => {
      clearTimeout(timeoutId);
      if (autoRotateIntervalRef.current) {
        clearInterval(autoRotateIntervalRef.current);
      }
    };
  }, []);

  // Detectar interacción del usuario
  useEffect(() => {
    const handleInteraction = () => {
      isUserInteractingRef.current = true;
      // Resetear flag después de 5 segundos sin interacción
      setTimeout(() => {
        isUserInteractingRef.current = false;
      }, 5000);
    };

    const container = document.querySelector('.stack-container');
    if (container) {
      container.addEventListener('mousedown', handleInteraction);
      container.addEventListener('touchstart', handleInteraction);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousedown', handleInteraction);
        container.removeEventListener('touchstart', handleInteraction);
      }
    };
  }, []);

  return (
    <div
      className="stack-container"
      style={{
        width: cardDimensions.width,
        height: cardDimensions.height,
        perspective: 600
      }}
    >
      {cards.map((card, index) => {
        const randomRotate = randomRotation ? Math.random() * 10 - 5 : 0;

        return (
          <CardRotate key={card.id} onSendToBack={() => sendToBack(card.id)} sensitivity={sensitivity}>
            <motion.div
              className="card"
              onClick={() => sendToBackOnClick && sendToBack(card.id)}
              animate={{
                rotateZ: (cards.length - index - 1) * 3 + randomRotate,
                scale: 1 + index * 0.05 - cards.length * 0.05,
                transformOrigin: '90% 90%'
              }}
              initial={false}
              transition={{
                type: 'spring',
                stiffness: animationConfig.stiffness,
                damping: animationConfig.damping
              }}
              style={{
                width: cardDimensions.width,
                height: cardDimensions.height
              }}
            >
              <div className="card-image-wrapper">
                <img
                  src={card.img}
                  alt={`card-${card.id}`}
                  className="card-image"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    const wrapper = target.parentElement;
                    if (wrapper) {
                      wrapper.innerHTML = `
                        <div class="card-image-placeholder" style="display: flex;">
                          <div class="placeholder-content">
                            <img src="/images/Webdeloper.png" alt="Placeholder" style="width: 48px; height: 48px; margin-bottom: 8px; object-fit: contain;" />
                            <span class="placeholder-text">Imagen ${card.id}</span>
                          </div>
                        </div>
                      `;
                    }
                  }}
                  loading="lazy"
                />
              </div>
            </motion.div>
          </CardRotate>
        );
      })}
    </div>
  );
}

