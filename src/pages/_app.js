import Head from 'next/head';
import { Toaster } from 'react-hot-toast';
import { OrgRichSnippet } from '@/components/RichSnippets';

import '../styles/globals.css';
import '../styles/fonts.css';
import '../components/Home/animation.css';

function App(props) {
  const { Component, pageProps } = props;
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <OrgRichSnippet />
      <Component {...pageProps} />
      <Toaster
        toastOptions={{
          style: {
            fontSize: '16px'
          }
        }}
        position="top-right"
      />

      {/* <CookieConsent /> */}
      {/* <ScriptComponent /> */}
    </>
  );
}

export default App;
