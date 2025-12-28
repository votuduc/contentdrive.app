import type { Metadata } from "next";
import Script from "next/script";
// Fonts removed in favor of Google Sans
import "../globals.css";

export const metadata: Metadata = {
  title: "ContentDrive: The AI Content Engine for Google Sheets",
  description: "Content strategy deserves to be executed. ContentDrive turns one plan into a universe of content—all within your Google Sheet.",
  keywords: ["content strategy", "AI content", "Google Sheets", "content marketing", "content workflow", "AI writing"],
  authors: [{ name: "Innoflow" }],
  creator: "Innoflow",
  publisher: "Innoflow",
  metadataBase: new URL('https://contentdrive.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: 'https://contentdrive.app/',
    title: 'ContentDrive: From Idea to Content Campaign in Minutes',
    description: 'Content strategy deserves to be executed. ContentDrive turns one plan into a universe of content—all within your Google Sheet.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'ContentDrive - AI Content Engine',
      },
    ],
    siteName: 'ContentDrive',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ContentDrive: From Idea to Content Campaign in Minutes',
    description: 'Content strategy deserves to be executed. ContentDrive turns one plan into a universe of content—all within your Google Sheet.',
    images: ['/images/og-image.png'],
  },
  icons: {
    icon: [
      { url: '/images/favicon/favicon.ico' },
      { url: '/images/favicon/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/images/favicon/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/images/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/images/favicon/site.webmanifest',
  themeColor: '#ffffff',
  other: {
    'msapplication-TileColor': '#ffffff',
  },
};

import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <link href="https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;700;900&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased font-sans">
        {/* Google Analytics 4 */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ER35MV56D3"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ER35MV56D3');
          `}
        </Script>

        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
