import "@/styles/globals.css";
import Head from "next/head";
import Home from ".";

export default function App({ Component, pageProps }) {
  return(
    <>
    
    <Head>
        <meta name="keywords" content="Portfolio Of Abubakar Afzal - Web Developer" />
        <meta
          name="description"
          content="This is the portfolio of Abubakar Afzal. I am a web developer and I love to build web applications."
        />
        <meta name="author" content="Abubakar Afzal" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta property="og:title" content="Portfolio Of Abubakar Afzal - Web Developer"></meta>
        <meta
          property="og:description"
          content="This is the portfolio of Abubakar Afzal. I am a web developer and I love to build web applications."
        ></meta>
        <meta property="og:image" content=""></meta>

        <meta name="theme-color" content="" />
        <link rel="icon" href="" />
        <title>Portfolio Of Abubakar Afzal - Web Developer</title>
      </Head>
      <Home/>
      </>
  )

  return <Component {...pageProps} />;
}
