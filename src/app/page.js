import AboutUs from "@/components/about-us";
import Banner from "@/components/banner";
import BottomFooter from "@/components/bottom-footer";
import Footer from "@/components/footer";
import Marque from "@/components/marque";
import Services from "@/components/services";

export default function Home() {
  return (
    <>
    <Banner/>
    <Marque/>
    <Services/>
    <AboutUs/>
    <Footer/>
    <BottomFooter/>
    </>
  );
}
