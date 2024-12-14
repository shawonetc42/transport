import Footer from "@/components/Footer.js/Footer";
import HeaderTop from "@/components/header/HeaderTop";
import ChooseUs from "@/components/hero/ChooseUs";
import EmailSection from "@/components/hero/EmailSection";
import Projects from "@/components/hero/Projects";
import Steps from "@/components/hero/Steps";
import Testimonials from "@/components/hero/Testimonials";
import Blog from "@/components/last Section/Blog";
import LogisticsSection from "@/components/LogisticsSection/LogisticsSection";
import LogisticsServices from "@/components/LogisticsSection/LogisticsServices";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <main>
        <HeaderTop />
        <LogisticsSection />
        <LogisticsServices />
        <ChooseUs />
        <Steps />
        <Projects />
        <Testimonials />
        <EmailSection />
        <Blog />
        <Footer />
      </main>

      <footer>
        <h1>footer</h1>
      </footer>
    </div>
  );
}
