import { motion } from "framer-motion";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import Marquees from "./Components/Marquees";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import Stripes from "./Components/Stripes";
import Work from "./Components/Work";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useState } from "react";

function App() {
  // eslint-disable-next-line no-unused-vars
  const locomotiveScroll = new LocomotiveScroll();

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 5,
      y: mousePosition.y - 5,
    },
  };
  return (
    <>
      <div className="w-full bg-zinc-900 text-white font-[satoshi] overflow-hidden">
        <Navbar />
        <Work />
        <Stripes />
        <Products />
        <Marquees />
        <Cards />
        <Footer />
        <motion.div
          variants={variants}
          animate="default"
          className="curser bg-white rounded-full h-5 w-5 fixed top-0 left-0 hover:mix-blend-difference z-999"
        ></motion.div>
      </div>
    </>
  );
}

export default App;
