import { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

function Products() {
  var Products = [
    {
      title: "Arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: false,
    },
    {
      title: "Cula",
      description:
        "We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      live: true,
      case: false,
    },
    {
      title: "Maniv",
      description:
        "A global early-stage venture fund partnering with founders to advance cleaner, safer, and more sustainable movement of people and goods.",
      live: true,
      case: false,
    },
    {
      title: "YIR 2022",
      description:
        "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
      live: true,
      case: false,
    },
    {
      title: "Yahoo!",
      description:
        "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
      live: true,
      case: true,
    },
    {
      title: "Rainfall",
      description:
        "We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.",
      live: true,
      case: true,
    },
    {
      title: "Jungle",
      description:
        "We crafted a timeless visual system for Jungle Ventures, covering all aspects of web design, and empowered their marketing team to scale organically using Webflow.",
      live: true,
      case: true,
    },
    {
      title: "Silvr",
      description:
        "We teamed up with financing solutions provider Silvr to audit, refine and evolve their brand.",
      live: true,
      case: false,
    },
    {
      title: "Remind",
      description:
        "Remind got a new website that is designed and developed to be easy to maintain and ready to learn, reflecting their mission to connect students and families.",
      live: true,
      case: true,
    },
    {
      title: "Summon",
      description:
        "We created a website for Summon that showcases their innovative technology through animated and captivating UI components and emerging technologies.",
      live: true,
      case: true,
    },
    {
      title: "Like Magic",
      description:
        "We designed and developed a magical gaming experience made in Webflow to promote the translation service and their sponsorship of the 2022 Webflow Conference.",
      live: true,
      case: true,
    },
    {
      title: "RocketChat",
      description:
        "We built a beautiful, clean website in Webflow for RocketChat that is scalable, easy to maintain and built in a modular manner for future changes.",
      live: true,
      case: false,
    },
    {
      title: "Haufe",
      description:
        "Besides the continuous work we do with Haufe—shipping over 50 projects per year—we partnered with them to create a new website for their core brand.",
      live: true,
      case: false,
    },
    {
      title: "YIR 2021",
      description:
        "We celebrated our first year with a Showcase Website that reflects on a year of growth, building an awesome team & culture, defining our brand, and more.",
      live: true,
      case: false,
    },
    {
      title: "Weglot",
      description:
        "We made a fun and engaging showcase website for our friends from Weglot to promote their no-code translation solution in Germany.",
      live: true,
      case: false,
    },
    {
      title: "Candid Health",
      description:
        "A complete redesign of a health-startup website, followed by cutting edge development.",
      live: true,
      case: false,
    },
    {
      title: "Showcase",
      description:
        "Our OMR22 Masterclass teaches how to create a showcase website, and we made a showcase website about showcase websites to promote the art of showcasing.",
      live: true,
      case: false,
    },
  ];

  const [pos, setPos] = useState(0);
  const mover = (val) => {
    setPos(val * 23);
  };

  return (
    <div className="mt-32 relative">
      {Products.map((elem, index) => (
        <Product val={elem} key={index} count={index} mover={mover} />
      ))}
      <div className="w-[100rem] h-full absolute pointer-events-none top-10">
        {/* Backgrounds */}
        <motion.div
          initial={{ y: pos }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          className="h-[23rem] w-full  absolute left-[0%] overflow-hidden "
        >
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="h-full w-full"
          >
            <img src="./Marquee/bg1.webp" alt="" className="w-full" />
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="h-full w-full"
          >
            <img src="./Marquee/bg2.png" alt="" className="w-full" />
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="h-full w-full"
          >
            <img src="./Marquee/bg3.jpg" alt="" className="w-full" />
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="h-full w-full"
          >
            <img src="./Marquee/bg4.png" alt="" className="w-full" />
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="h-full w-full"
          >
            <img src="./Marquee/bg5.png" alt="" className="w-full" />
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="h-full w-full"
          >
            <img src="./Marquee/bg6.png" alt="" className="w-full" />
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="h-full w-full"
          >
            <img src="./Marquee/bg7.png" alt="" className="w-full" />
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="h-full w-full"
          >
            <img src="./Marquee/bg8.jpg" alt="" className="w-full" />
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="h-full w-full"
          >
            <img src="./Marquee/bg9.jpg" alt="" className="w-full" />
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="h-full w-full"
          >
            <img src="./Marquee/bg10.png" alt="" className="w-full" />
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="h-full w-full"
          >
            <img src="./Marquee/bg11.png" alt="" className="w-full" />
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="h-full w-full"
          >
            <img src="./Marquee/bg12.png" alt="" className="w-full" />
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="h-full w-full"
          >
            <img src="./Marquee/bg13.png" alt="" className="w-full" />
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="h-full w-full"
          >
            <img src="./Marquee/bg14.png" alt="" className="w-full" />
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="h-full w-full"
          >
            <img src="./Marquee/bg15.png" alt="" className="w-full" />
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="h-full w-full"
          >
            <img src="./Marquee/bg16.png" alt="" className="w-full" />
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="h-full w-full"
          >
            <img src="./Marquee/bg17.jpg" alt="" className="w-full" />
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="h-full w-full"
          >
            <img src="./Marquee/bg18.png" alt="" className="w-full" />
          </motion.div>
        </motion.div>

        {/* Videos */}
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          className="h-[23rem] w-[32rem] bg-white rounded-xl absolute left-[44%] top-[-0.25%] overflow-hidden "
        >
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="h-full w-full"
          >
            <video loop autoPlay muted src="./Marquee/bg1.webm"></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="h-full w-full "
          >
            <video loop autoPlay muted src="./Marquee/bg2.mp4"></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="h-full w-full  "
          >
            <video loop autoPlay muted src="./Marquee/bg3.webm"></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="h-full w-full  "
          >
            <video loop autoPlay muted src="./Marquee/bg4.mp4"></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="h-full w-full  "
          >
            <video loop autoPlay muted src="./Marquee/bg5.webm"></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="h-full w-full  "
          >
            <video loop autoPlay muted src="./Marquee/bg6.webm"></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="h-full w-full  "
          >
            <video loop autoPlay muted src="./Marquee/bg7.webm"></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="h-full w-full  "
          >
            <video loop autoPlay muted src="./Marquee/bg8.webm"></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="h-full w-full  "
          >
            <video loop autoPlay muted src="./Marquee/bg9.webm"></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="h-full w-full  "
          >
            <video loop autoPlay muted src="./Marquee/bg10.webm"></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="h-full w-full  "
          >
            <video loop autoPlay muted src="./Marquee/bg11.webm"></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="h-full w-full  "
          >
            <video loop autoPlay muted src="./Marquee/bg12.webm"></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="h-full w-full  "
          >
            <video loop autoPlay muted src="./Marquee/bg13.webm"></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="h-full w-full  "
          >
            <video loop autoPlay muted src="./Marquee/bg14.webm"></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="h-full w-full  "
          >
            <video loop autoPlay muted src="./Marquee/bg15.webm"></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="h-full w-full  "
          >
            <video loop autoPlay muted src="./Marquee/bg16.webm"></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="h-full w-full  "
          >
            <video loop autoPlay muted src="./Marquee/bg17.webm"></video>
          </motion.div>
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className="h-full w-full  "
          >
            <video loop autoPlay muted src="./Marquee/bg18.mp4"></video>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
