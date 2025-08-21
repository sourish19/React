import { useEffect, useState } from "react";
import axios from "axios";

const useApi = (user) => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!user) return;

    setLoading(true);
    setError(null);

    const url = `https://api.github.com/users/${user}`;
    axios
      .get(url)
      .then(({ data }) => {
        setResponse(data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [user]);

  return { response, loading, error };
};

export default useApi;
