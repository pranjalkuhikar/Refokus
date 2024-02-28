/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
function Marquee({ val, direction }) {
  return (
    <div className="flex w-full overflow-hidden ">
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "right" ? "0" : "-100%" }}
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        className="flex flex-shrink-0 gap-40 py-10 pr-40"
      >
        {val.map((url, index) => (
          <img src={url} key={index} />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-100%" }}
        animate={{ x: direction === "right" ? "0" : "-100%" }}
        transition={{ ease: "linear", duration: 15, repeat: Infinity }}
        className="flex flex-shrink-0 gap-40 py-10 pr-40"
      >
        {val.map((url, index) => (
          <img src={url} key={index} />
        ))}
      </motion.div>
    </div>
  );
}

export default Marquee;
