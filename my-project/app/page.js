import Image from "next/image";
import shape1 from "../public/images/shape1.png";
import shape2 from "../public/images/shape2.png";
import shape4 from "../public/images/shape4.png";
import shape5 from "../public/images/shape5.png";
import shape6 from "../public/images/shape6.png";
import shape7 from "../public/images/shape7.png";
import profile from "../public/images/profile.png";
import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/landingPage/hero/HeroSection";


export default function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
    </div>

  );
}
