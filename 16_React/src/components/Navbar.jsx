import { ShoppingCart, Search, UserRound } from "lucide-react";

const Navbar = () => {
  return (
    <>
      <div className="flex py-3 px-2 justify-between relative">
        <div className="flex gap-5 justify-center items-center md:gap-5">
          <div>
            <img className="h-8" src="favicon.ico" alt="" />
          </div>
          <div className="hidden gap-2 sm:flex md:gap-4">
            <span className="text-sm text-neutral-800 cursor-pointer hover:text-neutral-600 font-semibold text-shadow-md md:text-lg">
              Electronics
            </span>
            <span className="text-sm text-neutral-800 cursor-pointer hover:text-neutral-600 font-semibold text-shadow-md md:text-lg">
              Mens
            </span>
            <span className="text-sm text-neutral-800 cursor-pointer hover:text-neutral-600 font-semibold text-shadow-md md:text-lg">
              Mobiles
            </span>
            <span className="text-sm text-neutral-800 cursor-pointer hover:text-neutral-600 font-semibold text-shadow-md md:text-lg">
              Womens
            </span>
          </div>
        </div>
        <div className="flex justify-center items-center gap-3 pr-2 sm:gap-8">
          <div className="relative flex pr-2 items-center">
            <input
              className="border border-neutral-500 px-2 py-1 pr-10 rounded-xl shadow-md outline-none w-45 sm:w-full"
              type="text"
              placeholder="Search"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500" />
          </div>

          <div>
            <ShoppingCart className="" />
            <div className="bg-red-700 w-5 h-5 rounded-full absolute right-18 top-1 sm:right-23">
              <span className="flex justify-center items-center h-full text-white font-bold text-xs">
                1
              </span>
            </div>
          </div>
          <UserRound />
        </div>
      </div>
      <div className="relative w-full">
        <div
          className="h-px w-full absolute inset-y-0 bg-gradient-to-r from-neutral-300/10 via-neutral-400 to-neutral-300/10
 pointer-events-none z-0"
        ></div>
      </div>
    </>
  );
};

export default Navbar;
