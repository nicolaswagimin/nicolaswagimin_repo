# Imágenes del Hero Section

Las imágenes del Hero Section están en esta carpeta:

1. **IMG_0276.jpg** - Imagen de una persona sentada en un sofá azul oscuro con una laptop
2. **IMG_0273.jpg** - Imagen de un joven adulto mirando a la cámara con fondo de plantas

## Formato recomendado:
- **Formato**: WebP (mejor compresión) o JPEG
- **Ancho**: 600-800px
- **Relación de aspecto**: 3:4 (vertical) o similar
- **Calidad**: 80-85% para WebP

## Conversión a WebP:
Puedes usar herramientas online como:
- https://convertio.co/es/jpg-webp/
- https://cloudconvert.com/jpg-to-webp

O desde la terminal:
```bash
# Con ImageMagick
convert imagen.jpg -quality 85 imagen.webp

# Con cwebp (Google)
cwebp -q 85 imagen.jpg -o imagen.webp
```

