import { useEffect, useState } from "react";
import fetchData from "../api.js";
import Error from "./Error.jsx";

const Weather = ({ search = "London" }) => {
  const finalSearch =
    search.trim() === "" || !isNaN(search) ? "London" : search;
  const [temp, setTemp] = useState("");
  const [windSpeed, setwindSpeed] = useState("");
  const [humidity, setHumidity] = useState("");
  const [weatherCond, setWeatherCond] = useState("");
  const [err, setErr] = useState(false);

  function categorizeWeather() {
    const condition = weatherCond?.toLowerCase();

    if (
      ["light snow", "blowing snow", "patchy snow possible", "snow"].some((w) =>
        condition?.includes(w)
      )
    )
      return "snow";

    if (["light drizzle", "patchy drizzle"].some((w) => condition?.includes(w)))
      return "drizzle";

    if (
      [
        "light rain",
        "patchy rain possible",
        "moderate rain",
        "heavy rain",
      ].some((w) => condition?.includes(w))
    )
      return "rain";

    if (condition?.includes("clear", "sunny")) return "clear";

    if (
      ["partly cloudy", "cloudy", "overcast", "mist"].some((w) =>
        condition?.includes(w)
      )
    )
      return "cloud";

    return "unknown";
  }

  const getApiData = async () => {
    try {
      const data = await fetchData(finalSearch);
      setTemp(data?.temperature);
      setwindSpeed(data?.wind_speed);
      setHumidity(data?.humidity);
      setWeatherCond(data?.weatherCondition);
    } catch (error) {
      console.log("Hiiii error");
      console.log("err", err);
      setErr(!err);
    }
  };

  useEffect(() => {
    getApiData();
  }, [search]);

  return !err ? (
    <div className="flex flex-col justify-center items-center">
      <div>
        <img
          src={`../../Public/${categorizeWeather()}.png `}
          alt=""
          width={150}
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="text-5xl text-white">{temp}°c</div>
        <div className="text-4xl text-white mt-3 ">{finalSearch}</div>
      </div>
      <div className="flex justify-around items-center w-full mt-15 gap-15 ">
        <div className="flex gap-2">
          <img src="../../Public/humidity.png" alt="" className="h-5 mt-2" />
          <div className="flex flex-col">
            <div className="text-2xl text-white">{humidity}%</div>
            <div className="text-lg text-white">Humidity</div>
          </div>
        </div>
        <div className="flex gap-2">
          <img src="../../Public/wind.png" alt="" className="h-5 mt-2" />
          <div className="flex flex-col">
            <div className="text-2xl text-white">{windSpeed} km/h</div>
            <div className="text-lg text-white">Wind Speed</div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Error />
  );
};

export default Weather;
