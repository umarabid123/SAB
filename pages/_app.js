import "@/styles/globals.css";
import { Noto_Sans } from "next/font/google";
const noto_font = Noto_Sans({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <div className={noto_font.className} >
      <Component {...pageProps} />
    </div>
  )
}
