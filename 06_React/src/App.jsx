import { useState } from "react";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const bttn = (
    <>
      <button
        onClick={() => {
          setDarkMode((prev) => !prev);
        }}
        className={`py-3 px-5 rounded-2xl cursor-pointer active:scale-95 transition-colors duration-300 ${
          darkMode ? "bg-white text-black" : "dark:bg-gray-900 dark:text-white"
        } `}
      >
        {darkMode ? "Enable Light Mode" : "Enable Dark Mode"}
      </button>
    </>
  );

  const div = (
    <div
      className={`flex justify-center items-center transition-colors duration-300 h-screen ${
        darkMode ? "dark:bg-gray-950" : "bg-white"
      } `}
    >
      {bttn}
    </div>
  );
  return <>{div}</>;
};

export default App;
