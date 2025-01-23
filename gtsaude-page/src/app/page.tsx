import Header from "../components/Header/Header";
import HeroSection2 from "../components/HeroSection/HeroSection2";
import AboutUs from "../components/AboutUs/AboutUs";
import Members from "../components/Members/Members";
import Research from "../components/Research/Research";
import Articles from "../components/Articles/Articles";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <HeroSection2 />
      <AboutUs />
      <Members />
      <Research />
      <Articles />
      <Footer />
    </div>
  );
}
