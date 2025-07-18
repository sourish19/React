const Sidebar = () => {
  return (
    <>
      {" "}
      <div className="group h-screen w-20 bg-neutral-800 hover:w-64 transition-all duration-300 overflow-hidden">
        <div className="relative flex flex-col items-start px-4 py-8 h-11/12 w-full">
          <div className="w-full h-20 ">
            <i className="bi bi-list text-xl rounded-full bg-opacity-25 hover:bg-neutral-700 cursor-pointer w-10 h-10 flex items-center justify-center" />
          </div>

          <div className="absolute origin-right left-53 mt-3 scale-0 group-hover:scale-100 transition-transform duration-500">
            <i className="bi bi-search flex items-center justify-center font-light " />
          </div>

          <div className="ml-3 opacity-30 relative">
            <i className="bi bi-pencil-square text-lg" />
            <span className="pl-3 w-50 text-md hidden group-hover:inline transition-transform duration-500 absolute left-6">
              New Chat
            </span>
          </div>

          <div className="mt-3 opacity-80 cursor-pointer relative hidden hover:bg-neutral-700 w-full rounded-3xl pt-1 px-3 group-hover:inline transition-transform duration-500">
            <i className="bi bi-gem text-lg" />
            <span className="pl-6 w-50 text-md absolute left-6">
              Explore Gem
            </span>
          </div>

          <div className="mt-10 opacity-80 relative hidden w-full h-fit rounded-3xl group-hover:inline transition-transform duration-500">
            <div className="py-2 px-3 "> Recent</div>
            <div className="flex flex-col gap-4 mt-3">
              <div className="flex justify-between gap-2 group/item hover:bg-neutral-700 cursor-pointer py-2 px-3 rounded-2xl">
                <div className="truncate">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Atque, veritatis!
                </div>
                <span className="scale-0 group-hover/item:scale-100 transition">
                  <i class="bi bi-three-dots-vertical"></i>
                </span>
              </div>
              <div className="flex justify-between gap-2 group/item hover:bg-neutral-700 cursor-pointer py-2 px-3 rounded-2xl">
                <div className="truncate">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Atque, veritatis!
                </div>
                <span className="scale-0 group-hover/item:scale-100 transition">
                  <i class="bi bi-three-dots-vertical"></i>
                </span>
              </div>
              <div className="flex justify-between gap-2 group/item hover:bg-neutral-700 cursor-pointer py-2 px-3 rounded-2xl">
                <div className="truncate">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Atque, veritatis!
                </div>
                <span className="scale-0 group-hover/item:scale-100 transition">
                  <i class="bi bi-three-dots-vertical"></i>
                </span>
              </div>
              <div className="flex justify-between gap-2 group/item hover:bg-neutral-700 cursor-pointer py-2 px-3 rounded-2xl">
                <div className="truncate">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Atque, veritatis!
                </div>
                <span className="scale-0 group-hover/item:scale-100 transition">
                  <i class="bi bi-three-dots-vertical"></i>
                </span>
              </div>
              <div className="flex justify-between gap-2 group/item hover:bg-neutral-700 cursor-pointer py-2 px-3 rounded-2xl">
                <div className="truncate">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Atque, veritatis!
                </div>
                <span className="scale-0 group-hover/item:scale-100 transition">
                  <i class="bi bi-three-dots-vertical"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="px-7 w-full relative opacity-80 hover:bg-neutral-700 rounded-2xl">
          <div class="bi bi-gear-wide"></div>
          <div className="w-200 pl-10 absolute hidden group-hover:inline text-md left-6 bottom-[1px]">
            Settings and help
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
