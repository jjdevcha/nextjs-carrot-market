import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SWRProvider } from "./streams/swr-provider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRProvider>
      <div className="w-full max-w-xl mx-auto">
        <Component {...pageProps} />
      </div>
    </SWRProvider>
  );
}
