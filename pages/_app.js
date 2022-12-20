import Head from "next/head";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Navbar />
      </header>
      <Component {...pageProps} />
    </>
  );
}

export default App;
