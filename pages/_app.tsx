import type { AppProps } from "next/app";
import "../styles/globals.scss";

export default ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};
