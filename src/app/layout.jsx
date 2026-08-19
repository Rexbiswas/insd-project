import './globals.css';
import Script from 'next/script';
import ClientLayoutWrapper from '../components/ClientLayoutWrapper';

export const metadata = {
  metadataBase: new URL('https://insd.edu.in'),
  title: {
    default: 'Best Design Institute for Fashion, Interior & Graphic Courses in Delhi | INSD',
    template: '%s | INSD',
  },
  description: 'Best design institute in Delhi, India. Join INSD is one of the top design colleges in Delhi, NCR offers fashion, interior, textile and graphic design courses in UG and PG.',
  keywords: ['best design institute in Delhi', 'skill school design', 'job oriented fashion design', 'interior design placement', 'graphic design course', 'INSD India'],
  authors: [{ name: 'INSD' }],
  creator: 'INSD',
  publisher: 'INSD',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/favicon.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [{ url: '/favicon.png' }],
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://insd.edu.in/',
    siteName: 'INSD',
    title: 'Best Designing Institute for Fashion, Interior & Graphic Courses in Delhi | INSD',
    description: 'Best designing institute in Delhi, India. Join INSD is one of the top designing colleges in Delhi, NCR offers fashion, interior, textile and graphic designing courses in UG and PG.',
    images: [
      {
        url: 'https://insd.edu.in/wp-content/uploads/2020/04/Homepage-Banner-Laptop-1.jpg',
        width: 1357,
        height: 627,
        alt: 'INSD School of Design',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@INSDofficial',
    title: 'Best Designing Institute for Fashion, Interior & Graphic Courses in Delhi | INSD',
    description: 'Best designing institute in Delhi, India. Join INSD is one of the top designing colleges in Delhi, NCR offers fashion, interior, textile and graphic designing courses in UG and PG.',
    images: ['https://insd.edu.in/wp-content/uploads/2020/04/Homepage-Banner-Laptop-1.jpg'],
  },
  verification: {
    google: 'cKVizlQjh2jLQ1R-1fpe41aDHaBfEmav_u5Kfqiju3o',
    other: {
      'p:domain_verify': ['fcf8807340237c313475fbb0237453d9'],
      'pinterest-site-verification': ['fcf8807340237c313475fbb0237453d9'],
    },
  },
  other: {
    'theme-color': '#000000',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://ik.imagekit.io" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.clarity.ms" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K3KH58B2"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <noscript>
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              zIndex: 9999,
              background: '#b30000',
              color: 'white',
              padding: '15px',
              textAlign: 'center',
              fontFamily: 'sans-serif',
              fontWeight: 'bold',
            }}
          >
            JavaScript is disabled in your browser. For the best experience, please enable JavaScript to view this website.
          </div>
        </noscript>

        <ClientLayoutWrapper>
          {children}
        </ClientLayoutWrapper>

        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-K3KH58B2');
          `}
        </Script>

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-77Y53LFPLJ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-77Y53LFPLJ');
          `}
        </Script>

        {/* Microsoft Clarity */}
        <Script id="ms-clarity" strategy="lazyOnload">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "wnppzeo4j3");
          `}
        </Script>
      </body>
    </html>
  );
}
