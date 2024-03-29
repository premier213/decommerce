import { Head, Html, Main, NextScript } from 'next/document';
import { ReactElement } from 'react';

function MyDocument(): ReactElement {
  const screen = process.env.NODE_ENV === 'production' ? '' : 'debug-screens';

  return (
    <Html>
      <Head />
      <body className={`${screen} bg-main text-white font-sans`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default MyDocument;
