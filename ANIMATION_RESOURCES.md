# Recursos para Animaciones y Diseños

## Páginas Recomendadas para Encontrar Diseños y Animaciones

### 1. **CodePen**
- **URL**: https://codepen.io
- **Descripción**: Comunidad de desarrolladores compartiendo animaciones CSS y JavaScript
- **Búsquedas útiles**: "portfolio animations", "scroll animations", "framer motion"
- **Ventajas**: Código fuente disponible, puedes copiar y adaptar

### 2. **CodeSandbox**
- **URL**: https://codesandbox.io
- **Descripción**: Ejemplos interactivos de React/Next.js con animaciones
- **Búsquedas útiles**: "next.js animations", "react portfolio"
- **Ventajas**: Proyectos completos, fácil de forkear

### 3. **UI Movement**
- **URL**: https://uimovement.com
- **Descripción**: Inspiración de animaciones de UI
- **Ventajas**: Animaciones modernas, ejemplos visuales

### 4. **Dribbble**
- **URL**: https://dribbble.com
- **Descripción**: Diseños de portafolios y animaciones
- **Búsquedas útiles**: "portfolio animation", "website transitions"
- **Ventajas**: Alta calidad visual, inspiración de diseño

### 5. **Behance**
- **URL**: https://www.behance.net
- **Descripción**: Portafolios creativos con animaciones
- **Ventajas**: Casos de estudio completos, procesos de diseño

### 6. **Awwwards**
- **URL**: https://www.awwwards.com
- **Descripción**: Sitios web premiados con animaciones impresionantes
- **Ventajas**: Ejemplos de alta calidad, tendencias actuales

### 7. **LottieFiles**
- **URL**: https://lottiefiles.com
- **Descripción**: Animaciones After Effects convertidas a JSON
- **Ventajas**: Animaciones profesionales, ligeras, fáciles de integrar
- **Uso con React**: `lottie-react` o `react-lottie`

### 8. **Framer Motion Examples**
- **URL**: https://www.framer.com/motion/examples/
- **Descripción**: Ejemplos oficiales de Framer Motion
- **Ventajas**: Documentación oficial, código de ejemplo

### 9. **React Spring Examples**
- **URL**: https://www.react-spring.dev/examples
- **Descripción**: Ejemplos de animaciones con React Spring
- **Ventajas**: Animaciones físicas realistas

### 10. **GitHub - Awesome Animations**
- **URL**: https://github.com/topics/animation
- **Descripción**: Repositorios de código abierto con animaciones
- **Búsquedas útiles**: "react animations", "portfolio template"
- **Ventajas**: Código fuente completo, puedes estudiar y adaptar

## Librerías Recomendadas para tu Proyecto

### Ya Instaladas
- ✅ **Framer Motion** (motion) - Ya está en tu proyecto

### Recomendaciones Adicionales

1. **React Spring**
   ```bash
   npm install @react-spring/web
   ```
   - Animaciones físicas suaves
   - Bueno para transiciones complejas

2. **GSAP (GreenSock)**
   ```bash
   npm install gsap
   ```
   - Animaciones de alto rendimiento
   - Control preciso de animaciones
   - Excelente para animaciones complejas

3. **Lottie React**
   ```bash
   npm install lottie-react
   ```
   - Para animaciones de After Effects
   - Animaciones profesionales

4. **React Intersection Observer**
   ```bash
   npm install react-intersection-observer
   ```
   - Para animaciones al hacer scroll
   - Ya lo puedes hacer con Framer Motion, pero esta es más ligera

## Tipos de Animaciones Recomendadas para Portafolio

### 1. **Hero Section**
- Animación de texto tipowriter
- Fade in de elementos
- Parallax effect
- Partículas en el fondo

### 2. **Scroll Animations**
- Fade in al hacer scroll
- Slide in desde los lados
- Scale animations
- Sticky headers

### 3. **Hover Effects**
- Cards que se elevan
- Efectos de glow
- Transiciones suaves de color
- Transformaciones 3D

### 4. **Page Transitions**
- Fade between pages
- Slide transitions
- Blur effects

### 5. **Loading Animations**
- Skeleton loaders
- Spinners personalizados
- Progress bars animados

## Ejemplos de Código Rápido

### Fade In on Scroll (Framer Motion)
```tsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
>
  Contenido animado
</motion.div>
```

### Hover Effect
```tsx
<motion.div
  whileHover={{ scale: 1.05, y: -5 }}
  transition={{ type: "spring", stiffness: 300 }}
>
  Card con hover
</motion.div>
```

### Stagger Children
```tsx
<motion.ul
  initial="hidden"
  animate="visible"
  variants={{
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }}
>
  {items.map((item, i) => (
    <motion.li key={i} variants={itemVariants}>
      {item}
    </motion.li>
  ))}
</motion.ul>
```

## Recursos Adicionales

- **CSS Animations**: https://animista.net
- **SVG Animations**: https://svgator.com
- **Icon Animations**: https://lordicon.com
- **Particle Effects**: https://particles.js.org

