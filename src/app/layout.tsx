import type { Metadata } from 'next';
import { Kanit } from 'next/font/google';
import './globals.css';
import Providers from './providers';

const kanit = Kanit({
    weight: ['300', '400', '500', '700'],
    style: ['normal', 'italic'],
    subsets: ['thai', 'latin'],
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Next15 Demo',
    description: 'application',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={`${kanit.className} antialiased`}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
