import type { Metadata } from 'next';
import { Manrope } from 'next/font/google';
import './globals.css';

const manrope = Manrope({ subsets: ['latin'], variable: '--font-display' });

export const metadata: Metadata = {
    title: '3 Fórmulas Prohibidas - Neon Red Edition',
    description: 'Libera tu flujo de caja y duplica tus ganancias.',
    icons: {
        icon: '/favicon.ico',
    }
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="es" className={`${manrope.variable} dark`}>
            <body className="bg-brand-black text-white font-display antialiased min-h-screen">
                {/* Cargamos Material Symbols via Google Fonts de forma recomendada */}
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
                />
                {children}
            </body>
        </html>
    );
}
