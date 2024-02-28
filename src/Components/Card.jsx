/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { GoArrowRight } from "react-icons/go";
function Card({ width, start, para, hover = "false" }) {
  return (
    <>
      <motion.div
        whileHover={{
          backgroundColor: hover === "true" && "#7443ff",
          paddingLeft: "25px",
        }}
        className={`${width}   min-h-[28rem] p-5 rounded-xl bg-zinc-800 flex flex-col justify-between`}
      >
        <div className="w-full">
          <div className="w-full flex items-center justify-between">
            {para === true && (
              <>
                <h3>Up Next:News</h3>
              </>
            )}
            {start === true && (
              <>
                <h3>Get In Touch</h3>
              </>
            )}
            <GoArrowRight />
          </div>
          {para === true && (
            <>
              <h1 className="pt-6 text-3xl font-semibold">
                Insights abd behind <br /> the scence
              </h1>
            </>
          )}
          {start === true && (
            <>
              <h1 className="pt-6 text-3xl font-semibold">
                Let's get to it <br /> together.
              </h1>
            </>
          )}
        </div>
        <div className="down w-full ">
          {start === true && (
            <>
              <h5 className="text-8xl leading-none tracking-tight font-semibold">
                Start a Project
              </h5>
              <button className="px-5 py-3 mt-5 rounded-full border-zinc-100 border-[1px]">
                Contact Us
              </button>
            </>
          )}
          {para === true && (
            <h5 className="text-zinc-500 font-normal">
              Explore what drives our team.
            </h5>
          )}
        </div>
      </motion.div>
    </>
  );
}

export default Card;
