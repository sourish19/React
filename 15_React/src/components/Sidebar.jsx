const Sidebar = () => {
  return (
    <div className="group relative flex flex-col items-start w-20 h-screen px-6 py-8 bg-neutral-800 hover:w-64 transition-all duration-300 overflow-hidden">
      <div className="flex justify-between w-full mt-6">
        <div>
          <i className="bi bi-list text-xl w-10 rounded-full hover:bg-amber-50" />
        </div>
        <div className="absolute origin-right left-52 mt-1 scale-0 group-hover:scale-100 transition-transform duration-500">
          <i className="bi bi-search"></i>
        </div>
      </div>
      <div className="mt-10 w-5 text-lg hover:bg-amber-50 opacity-30">
        <i className="bi bi-pencil-square" />
      </div>
    </div>
  );
};

export default Sidebar;
