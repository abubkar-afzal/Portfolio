import "@/styles/globals.css";
import Head from "next/head";
import Home from ".";
import { FaArrowAltCircleUp } from "react-icons/fa";

export default function App({ Component, pageProps }) {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return(
    <>
    
    <Head>
        <meta name="keywords" content="Portfolio Of Hafiz Abubakar Afzal - Web Developer" />
        <meta
          name="description"
          content="This is the portfolio of Hafiz Abubakar Afzal. I am a web developer and I love to build web applications."
        />
        <meta name="author" content="Hafiz Abubakar Afzal" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        <meta property="og:title" content="Portfolio Of Hafiz Abubakar Afzal - Web Developer"></meta>
        <meta
          property="og:description"
          content="This is the portfolio of Hafiz Abubakar Afzal. I am a web developer and I love to build web applications."
        ></meta>
        <meta property="og:image" content="./mypiclong.jpeg"></meta>

        <meta name="theme-color" content="" />
        <link rel="icon" href="./mypic.png" />
        <title>Portfolio Of Hafiz Abubakar Afzal - Web Developer</title>
      </Head>
      <div className="fixed z-10 bottom-0 right-0 p-4">
        <FaArrowAltCircleUp onClick={handleScrollToTop} className="opacity-[60%] sm:text-[2rem] text-[3rem] text-[---tw] cursor-pointer hover:scale-[1.2] duration-[2s]"/>
      </div>
      <Home/>
      </>
  )

  return <Component {...pageProps} />;
}
