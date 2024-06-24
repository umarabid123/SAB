
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LoginPage from "@/components/Login";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });


function HomePage() {
  return (
    <div className="overflow-hidden">
    <Header />
  <LoginPage />

    <Footer />
    </div>

  );
};

export default HomePage;
