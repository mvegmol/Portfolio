import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  metadataBase: new URL('https://portfoliomvm.vercel.app'),
  title: 'Miguel Vega Molina | Ingeniero de integración WSO2',
  description: 'Ingeniero de integración y APIs en NTT DATA. WSO2 API Manager y Micro Integrator, REST/SOAP, ELK, Keycloak y Python. Certificaciones WSO2. Córdoba, España.',
  keywords: ['Miguel Vega Molina', 'WSO2', 'API Manager', 'Micro Integrator', 'Integration Engineer', 'ELK', 'Keycloak', 'Python'],
  openGraph: { title: 'Miguel Vega Molina | Integración y APIs WSO2', description: 'Experiencia, certificaciones WSO2 y proyectos de backend.', locale: 'es_ES', type: 'website' },
  icons: { icon: '/favicon.ico' }
};
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return <html lang="es"><body>{children}</body></html>;
}
