import axios from "axios";
import { useState } from "react";

const useApi = (user) => {
  const [data, setData] = useState();
  const url = `https://api/github.com/users/${user}`;
  axios
    .get(url)
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.error(err);
    });
};

export default useApi;
