import Hero from "../Components/Layouts/Hero.jsx";
import Footer from "./Footer.jsx";
import { useEffect } from "react";

// aos
import AOS from "aos";
import "aos/dist/aos.css";
import YouLayouts from "../Components/Layouts/YouLayouts.jsx";
import WeLayouts from "../Components/Layouts/WeLayouts.jsx";
import HopeLayouts from "../Components/Layouts/HopeLayouts.jsx";

const HomePage = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  });
  return (
    <div>
      {/* homepage */}
      <div className="homepage">
        <div className="container mx-auto px-4">
          <Hero />
          <YouLayouts />
          <WeLayouts />
          <HopeLayouts />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
