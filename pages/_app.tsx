import type { ReactNode } from 'react';
import Head from 'next/head';
import '../styles/globals.css';

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Legacy Blueprint OS - Sovereign Infrastructure" />
        <title>Legacy Blueprint OS</title>
      </Head>
      <body>
        {children}
      </body>
    </html>
  );
}
