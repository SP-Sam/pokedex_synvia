import Provider from '../context/Provider';
import '../styles/globals.css';
import Head from 'next/head';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>SP-Sam | Pokedex</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link rel="shortcut icon" href="https://img.icons8.com/fluency/48/000000/pokeball.png" type="image/x-icon"></link>
      </Head>
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </>
  );
};

export default MyApp