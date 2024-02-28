import { useScroll } from "framer-motion";
import { useState } from "react";

function Work() {
  const [images, setImages] = useState([
    { url: "./img1.png", top: "50%", left: "50%", isActive: false },
    { url: "./img2.png", top: "56%", left: "44%", isActive: false },
    { url: "./img3.png", top: "45%", left: "56%", isActive: false },
    { url: "./img4.png", top: "60%", left: "53%", isActive: false },
    { url: "./img5.png", top: "43%", left: "40%", isActive: false },
    { url: "./img6.png", top: "65%", left: "55%", isActive: false },
  ]);

  const { scrollYProgress } = useScroll();

  scrollYProgress.on("change", (data) => {
    function imageShow(arr) {
      setImages((prev) =>
        prev.map((item, index) =>
          arr.indexOf(index) === -1
            ? { ...item, isActive: false }
            : { ...item, isActive: true }
        )
      );
    }

    switch (Math.floor(data * 100)) {
      case 0:
        imageShow([]);
        break;
      case 1:
        imageShow([0]);
        break;
      case 2:
        imageShow([0, 1]);
        break;
      case 3:
        imageShow([0, 1, 2]);
        break;
      case 4:
        imageShow([0, 1, 2, 3]);
        break;
      case 5:
        imageShow([0, 1, 2, 3, 4]);
        break;
      case 6:
        imageShow([0, 1, 2, 3, 4, 5]);
        break;
    }
  });

  return (
    <div className="w-full mb-14">
      <div className="relative max-w-screen-xl mx-auto ">
        <h1 className="text-white text-[40vw] leading-none text-center font-medium select-none tracking-tight">
          work
        </h1>
        <div className="absolute top-0 w-full h-full">
          {images.map(
            (elem, index) =>
              elem.isActive && (
                <img
                  key={index}
                  className="absolute w-60 rounded-lg -translate-x-[50%] -translate-y-[50%]"
                  src={elem.url}
                  alt=""
                  style={{ top: elem.top, left: elem.left }}
                />
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default Work;
