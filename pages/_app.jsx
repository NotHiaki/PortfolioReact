import Head from 'next/head';
import '../styles/Global.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <link rel='icon' href='/assets/favicon.png'/>
      <title>Celso Henrique</title>
    </Head>
    <Component {...pageProps} />
    </>
  );
}

export default MyApp