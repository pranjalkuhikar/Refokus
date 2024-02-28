/* eslint-disable react/prop-types */
import Button from "./Button";
function Product({ val, mover, count }) {
  return (
    <div className="w-full text-white py-16 h-[23rem] relative z-10">
      <div
        onMouseEnter={() => {
          mover(count);
        }}
        className="max-w-screen-xl  mx-auto flex items-center justify-between"
      >
        <h1 className="text-5xl capitalize font-medium">{val.title}</h1>
        <div className="w-1/3">
          <p className="mb-10">{val.description}</p>
          <div className=" flex items-center gap-5">
            {val.live && <Button title={"Live Website"} />}
            {val.case && <Button title={"case study"} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
