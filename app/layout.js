import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  metadataBase: new URL('https://tech-m8.solutions'),
  title: 'TechM8 — Transform Your Ideas Into Digital Products',
  description: 'TechM8 is a software studio building custom digital products and its own local-first, privacy-focused apps — Job Hunter, DroidM8, and Square Frame.',
  applicationName: 'TechM8',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    siteName: 'TechM8',
    url: 'https://tech-m8.solutions',
    title: 'TechM8 — Transform Your Ideas Into Digital Products',
    description: 'Custom digital products, plus local-first privacy-focused apps: Job Hunter, DroidM8, and Square Frame.',
  },
  twitter: {
    card: 'summary',
    title: 'TechM8 — Transform Your Ideas Into Digital Products',
    description: 'Custom digital products, plus local-first privacy-focused apps: Job Hunter, DroidM8, and Square Frame.',
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col" suppressHydrationWarning>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
