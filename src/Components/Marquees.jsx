import Marquee from "./Marquee";

function Marquees() {
  var images = [
    [
      "./Marquee/1.svg",
      "./Marquee/2.svg",
      "./Marquee/3.svg",
      "./Marquee/4.svg",
      "./Marquee/5.svg",
      "./Marquee/6.svg",
      "./Marquee/7.svg",
      "./Marquee/8.svg",
      "./Marquee/9.svg",
    ],
    [
      "./Marquee/10.svg",
      "./Marquee/11.svg",
      "./Marquee/12.svg",
      "./Marquee/13.svg",
      "./Marquee/14.svg",
      "./Marquee/15.svg",
      "./Marquee/16.svg",
      "./Marquee/17.svg",
      "./Marquee/18.svg",
      "./Marquee/19.svg",
    ],
  ];
  return (
    <div className="py-24 mt-20 w-full relative overflow-hidden">
      {images.map((elem, index) => (
        <Marquee
          val={elem}
          key={index}
          direction={index === 0 ? "left" : "right"}
        />
      ))}
    </div>
  );
}

export default Marquees;
