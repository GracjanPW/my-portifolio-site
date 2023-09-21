import MainLayout from '@/components/layout/MainLayout';
import '@/styles/globals.css'
import { NextPage } from 'next';
import type { AppProps } from 'next/app'
import Head from 'next/head';
import { ReactElement, ReactNode } from 'react';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

// app props with layout
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page)=><MainLayout>{page}</MainLayout>);
  return (
        <>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
        </Head>
        {getLayout(<Component {...pageProps} />)}</>
  );
}

export default App;

