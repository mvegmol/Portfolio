import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
    weight: ['400', '500', '600', '700'],
    display: 'swap',
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Miguel Vega Molina | Portfolio',
    description:
        'Ingeniero informático en Sistemas de Información con experiencia en desarrollo de aplicaciones web. Backend e integración con WSO2',
    keywords:
        'Miguel Vega,  ingeniero informático en sistemas de información, portfolio, NTT Data, Django, Laravel, WSO2',
    icons: {
        icon: [{ url: '/favicon.ico', type: 'image/x-icon', sizes: 'any' }],
        shortcut: '/favicon.ico',
        apple: '/favicon.ico',
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='es'>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-50 text-gray-900`}
            >
                {children}
            </body>
        </html>
    );
}
