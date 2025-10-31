'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import './entrada.css';

export default function EntradaPage() {
  const [isCrushing, setIsCrushing] = useState(false);
  const router = useRouter();

  const handleInteraction = () => {
    if (!isCrushing) {
      setIsCrushing(true);
      setTimeout(() => {
        // Establecer cookie para indicar que ya visitó
        document.cookie = 'hasVisitedPortfolio=true; path=/; max-age=31536000'; // 1 año
        router.push('/');
      }, 1500);
    }
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      handleInteraction();
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isCrushing]);

  return (
    <div 
      className={`entrada-container ${isCrushing ? 'crushing' : ''}`}
      onClick={handleInteraction}
    >
      <div className="simple-text">
        <h1>MI PORTAFOLIO WEB</h1>
        <p>================================</p>
        <p><strong>Nombre:</strong> nicolas wagimin brvao</p>
        <p><strong>Edad:</strong> 25 años</p>
        <p><strong>Profesión:</strong> Programador Web Junior</p>
        <p><strong>Experiencia:</strong> 1 año</p>
        <p>================================</p>
        
        <h2>MIS PROYECTOS DESTACADOS:</h2>
        <p>• Calculadora básica (HTML/CSS/JS)</p>
        <p>• Página personal simple</p>
        <p>• Formulario de contacto</p>
        <p>• Galería de imágenes</p>
        <p>================================</p>
        
        <h2>MIS HABILIDADES TÉCNICAS:</h2>
        <p>✓ HTML básico</p>
        <p>✓ CSS intermedio</p>
        <p>✓ JavaScript principiante</p>
        <p>✓ Microsoft Word</p>
        <p>✓ PowerPoint</p>
        <p>================================</p>
        
        <h2>INFORMACIÓN DE CONTACTO:</h2>
        <p>📧 Email: nicolaswb2020@hotmail.com</p>
        <p>📱 Teléfono: 3117296145</p>
        <p>📍 Ubicación: Pasto, Colombia</p>
        <p>================================</p>
        
        <p><em>"Me gusta programar y aprender cosas nuevas"</em></p>
        <p>================================</p>
        
        <p className="hint">[Click o presiona cualquier tecla para continuar...]</p>
      </div>
      
      {/* Efecto de arrugado */}
      <div className="crush-overlay">
        <div className="crush-line"></div>
        <div className="crush-line"></div>
        <div className="crush-line"></div>
        <div className="crush-line"></div>
        <div className="crush-line"></div>
      </div>
    </div>
  );
}