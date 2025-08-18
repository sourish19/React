import { useState, useEffect } from "react";
import axios from "axios";

const useCurrencyInfo = (currency = "usd") => {
  const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;
  const [currencyInfo,setCurrencyInfo] = useState({})

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        console.log("response - ", response.data[currency]);
        setCurrencyInfo(response.data[currency])
      })
      .catch((error) => {
        if (axios.isAxiosError(error)) {
          console.log("axios error - ", error.response?.data);
        } else {
          console.log(error);
        }
      });
  }, [currency]);

  return currencyInfo
};

export default useCurrencyInfo