# Arquitectura del Proyecto

Este documento describe la arquitectura mejorada del proyecto, siguiendo las mejores prácticas de desarrollo.

## Estructura de Carpetas

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Layout principal con providers
│   ├── page.tsx           # Página principal
│   └── entrada/           # Página de entrada
│
├── components/            # Componentes React
│   ├── ui/               # Componentes UI reutilizables
│   └── ErrorBoundary.tsx # Error boundary para manejo de errores
│
├── contexts/             # Context API providers
│   ├── LanguageContext.tsx
│   └── ThemeContext.tsx
│
├── hooks/                # Custom hooks
│   ├── useLocalStorage.ts
│   ├── useScroll.ts
│   └── index.ts
│
├── lib/                  # Bibliotecas y utilidades compartidas
│   ├── dictionaries/     # Diccionarios de idiomas
│   └── github.ts         # Re-exports para compatibilidad
│
├── services/             # Capa de servicios (API calls)
│   └── github.service.ts # Servicio de GitHub API
│
├── types/                # TypeScript types e interfaces
│   ├── index.ts
│   └── github.ts
│
├── utils/                # Funciones utilitarias
│   ├── storage.ts        # Utilidades de localStorage y cookies
│   ├── scroll.ts         # Utilidades de scroll
│   ├── date.ts           # Formateo de fechas
│   ├── theme.ts          # Utilidades de tema
│   └── index.ts
│
├── constants/            # Constantes de la aplicación
│   └── index.ts
│
└── config/               # Configuración de la aplicación
    └── index.ts
```

## Principios de Arquitectura

### 1. Separación de Responsabilidades
- **Components**: Solo lógica de presentación
- **Hooks**: Lógica de estado y efectos reutilizable
- **Services**: Llamadas a APIs y lógica de negocio
- **Utils**: Funciones puras sin estado
- **Contexts**: Estado global compartido

### 2. Tipado Fuerte
- Todas las funciones y componentes están tipados
- Types centralizados en `src/types/`
- Interfaces bien definidas para APIs

### 3. Manejo de Errores
- Error boundaries para errores de React
- Manejo de errores en servicios
- Validación de datos de entrada

### 4. Configuración Centralizada
- Constantes en `src/constants/`
- Configuración en `src/config/`
- Variables de entorno en `.env.example`

### 5. Reutilización
- Hooks personalizados para lógica común
- Utilidades reutilizables
- Componentes UI modulares

## Mejores Prácticas Implementadas

### Hooks Personalizados
- `useLocalStorage`: Manejo seguro de localStorage con SSR
- `useScroll`: Utilidad para scroll suave

### Servicios
- Separación de lógica de API
- Manejo de errores consistente
- Tipado fuerte de respuestas

### Utilidades
- Funciones puras y testeables
- Manejo seguro de SSR (Server-Side Rendering)
- Validación de datos

### Contexts
- Validación de valores
- Persistencia en localStorage
- Manejo de errores

## Variables de Entorno

Crear un archivo `.env.local` basado en `.env.example`:

```env
NEXT_PUBLIC_GITHUB_USERNAME=nicolaswagimin
```

## Convenciones de Código

### Nombres de Archivos
- Componentes: PascalCase (ej: `Header.tsx`)
- Hooks: camelCase con prefijo `use` (ej: `useLocalStorage.ts`)
- Utilidades: camelCase (ej: `storage.ts`)
- Servicios: camelCase con sufijo `.service.ts` (ej: `github.service.ts`)

### Imports
- Usar paths absolutos con `@/`
- Agrupar imports: externos, internos, relativos
- Re-exports en archivos `index.ts` para facilitar imports

### Componentes
- Componentes funcionales con TypeScript
- Props tipadas con interfaces
- Separar lógica de presentación

## Próximos Pasos

1. Agregar tests unitarios
2. Implementar logging estructurado
3. Agregar monitoreo de errores
4. Optimizar performance
5. Agregar documentación de componentes

