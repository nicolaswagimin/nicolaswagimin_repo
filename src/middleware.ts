import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { ROUTES } from '@/constants';

export function middleware(request: NextRequest) {
  // Verificar si ya visitó la página de entrada
  const hasVisited = request.cookies.get('hasVisitedPortfolio');
  
  // Si está en la página de entrada, permitir acceso
  if (request.nextUrl.pathname === ROUTES.ENTRADA) {
    return NextResponse.next();
  }
  
  // Si no ha visitado, redirigir a entrada
  if (!hasVisited) {
    return NextResponse.redirect(new URL(ROUTES.ENTRADA, request.url));
  }
  
  // Si ya visitó, permitir acceso normal
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|public).*)',
  ],
}