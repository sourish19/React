const Sidebar = () => {
  return (
    <div class="w-20 bg-neutral-800 hover:w-64 transition-all duration-300 h-screen">
      <div className="flex flex-col justify-center items-center">
        <span className="bi bi-list text-xl mt-5"></span>
        <span class="bi bi-pencil-square text-lg mt-10 opacity-30"></span>
      </div>
    </div>
  );
};

export default Sidebar;
