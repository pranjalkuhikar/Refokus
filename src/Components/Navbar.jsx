import Button from "./Button";

function Navbar() {
  return (
    <>
      <div className="max-w-screen-xl mx-auto py-6 flex items-center justify-between border-b-[1px] border-zinc-700">
        <div className="nleft flex items-center">
          <img src="./vite.svg" alt="" />
          <div className="links flex gap-14 ml-20 ">
            {["Home", "Work", "Career", "", "News"].map((elem, index) =>
              elem.length === 0 ? (
                <span key={index} className="w-[2px] h-4 bg-zinc-700"></span>
              ) : (
                <a
                  key={index}
                  className="font-normal text-sm flex items-center gap-1"
                  href="#"
                >
                  {index === 1 && (
                    <span
                      style={{ boxShadow: "0 0 0.75em #00ff19" }}
                      className="inline-block w-1.5 h-1.5 rounded-full  bg-green-500"
                    ></span>
                  )}
                  {elem}
                </a>
              )
            )}
          </div>
        </div>
        <Button title={"Start a Project"} />
      </div>
    </>
  );
}

export default Navbar;
