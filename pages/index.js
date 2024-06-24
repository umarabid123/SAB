import Payment from "@/components/CreditCard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LoginPage from "@/components/Login";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

function HomePage() {
  return (
    <div className="overflow-hidden">
    <Header />
  <LoginPage />

      {/* <Payment /> */}
    <Footer />
    </div>
  );
}

export default HomePage;
