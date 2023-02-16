import Head from 'next/head';
import AppContext from '@context/AppContext';
import { useContext } from 'react';

import Footer from '@components/Footer';
import Menu from '@components/Menu';

export default function Home() {
  const { state } = useContext(AppContext);

  return (
    <>
      <Head>
        <title>Appist - Equipo</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Footer />
      {state.isViewMenu && <Menu />}
    </>
  );
}
