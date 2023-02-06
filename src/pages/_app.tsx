import "@/styles/globals.css";

import type { AppProps } from "next/app";
import { DM_Mono, IBM_Plex_Sans } from "@next/font/google";

const dm = DM_Mono({ weight: ["500"], subsets: ["latin"] });
const ibm = IBM_Plex_Sans({ weight: ["400", "500"], subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --dm-mono: ${dm.style.fontFamily};
            --ibm-sans: ${ibm.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  );
}
