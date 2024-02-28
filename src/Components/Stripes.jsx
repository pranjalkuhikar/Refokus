import Stripe from "./Stripe";

function Stripes() {
  var data = [
    { url: "./logo1.svg", number: 52 },
    { url: "./logo2.svg", number: 2 },
    { url: "./logo3.svg", number: 12 },
    { url: "./logo1.svg", number: 52 },
    { url: "./logo2.svg", number: 2 },
  ];
  return (
    <div className="flex items-center justify-stretch">
      {data.map((elem, index) => (
        <Stripe val={elem} key={index} />
      ))}
    </div>
  );
}

export default Stripes;
