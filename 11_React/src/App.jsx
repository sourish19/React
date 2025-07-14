import Accordian from "../components/Accordian";

const App = () => {
  return (
    <div className="bg-gray-950 min-h-screen flex justify-center items-center">
      <div className="text-white w-[50%] min-h-[500px] bg-amber-100 flex flex-col items-center ">
        <Accordian />
        <Accordian />
        <Accordian />
        <Accordian />
        <Accordian />
      </div>
    </div>
  );
};

export default App;
