import Provider from '../context/Provider';
import '../styles/globals.css';
import Head from 'next/head';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Pokedex Synvia</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </>
  );
};

export default MyApp