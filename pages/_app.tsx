import React from "react";
import Head from 'next/head';
import { AppProps } from "next/app";
import PageLayout from "$components/Layout";

const config = { title: 'PoI Dataset', favicon: './favicon.ico' }

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>{config.title}</title>
        <link rel="shortcut icon" href={config.favicon} />
      </Head>
      <PageLayout>
        <Component {...pageProps} />  
      </PageLayout>
    </>
  );
};

export default App;
