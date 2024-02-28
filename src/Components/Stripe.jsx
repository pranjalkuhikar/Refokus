/* eslint-disable react/prop-types */
function Stripe({ val }) {
  return (
    <div className="w-[20.66%] px-4 py-7 border-t-[1px] border-b-[1px]  border-r-[1px]  border-zinc-600 flex items-center justify-between">
      <img src={val.url} alt="" />
      <span className="font-semibold">{val.number}</span>
    </div>
  );
}

export default Stripe;
