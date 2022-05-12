import { Footer, Nav } from "@components/organisms";
import type { AppProps } from "next/app";
import "../styles/globals.scss";

export default ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Nav />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
};
