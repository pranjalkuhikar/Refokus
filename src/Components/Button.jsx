/* eslint-disable react/prop-types */
import { IoIosReturnRight } from "react-icons/io";
function Button({ title }) {
  return (
    <div className="max-w-40 min-w-40  px-5 py-2 rounded-full bg-zinc-100 text-black flex items-center justify-between">
      <span className="text-sm font-semibold ">{title}</span>
      <IoIosReturnRight />
    </div>
  );
}

export default Button;
