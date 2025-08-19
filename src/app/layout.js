import { Analytics } from '@vercel/analytics/next';

export const metadata = {
  metadataBase: new URL('https://twitterxdownload.com'),
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Next.js</title>
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}