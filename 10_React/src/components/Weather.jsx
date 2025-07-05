import { useState } from "react";

const Weather = () => {
  const [] = useState();

  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <img src="../../Public/clear.png" alt="" width={180} />
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="text-5xl text-white">21°c</div>
        <div className="text-4xl text-white mt-3 ">London</div>
      </div>
      <div className="flex justify-around items-center w-full mt-15 ">
        <div className="flex gap-2">
          <img src="../../Public/humidity.png" alt="" className="h-5 mt-2" />
          <div className="flex flex-col">
            <div className="text-2xl text-white">2.06 km/h</div>
            <div className="text-lg text-white">Wind Speed</div>
          </div>
        </div>
        <div className="flex gap-2">
          <img src="../../Public/wind.png" alt="" className="h-5 mt-2" />
          <div className="flex flex-col">
            <div className="text-2xl text-white">2.06 km/h</div>
            <div className="text-lg text-white">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
