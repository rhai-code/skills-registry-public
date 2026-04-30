import type { Metadata, Viewport } from 'next';
import '@/css/globals.css';
import { Header } from '@/components/Header';

export const metadata: Metadata = {
  title: 'AI BU TMM Advocates Skill Registry',
  description: 'Claude Code skills registry for Red Hat AI BU TMM Advocates',
};

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f9f9f9' },
    { media: '(prefers-color-scheme: dark)', color: '#1a1a1a' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="Main">{children}</main>
      </body>
    </html>
  );
}
