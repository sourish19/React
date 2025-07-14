const fetchData = async (location) => {
  const api = "83d0cdc4143544a6ad3183406250507";
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${api}&q=${location}&aqi=no`
    );
    if (response.status == 400) {
      throw new Error("Invalid Location");
    }
    const data = await response.json();

    return {
      temperature: data.current.temp_c,
      wind_speed: data.current.wind_kph,
      humidity: data.current.humidity,
      weatherCondition: data.current.condition.text,
    };
  } catch (error) {
    throw new Error(error.msg);
  }
};

export default fetchData;
