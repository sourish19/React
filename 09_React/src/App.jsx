import { useState, useEffect } from "react";
import fetchJokes from "./api.js";

export const App = () => {
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(false);

  const getJoke = async () => {
    setLoading(true);
    try {
      const data = await fetchJokes();
      setJoke(data);
    } catch (error) {
      setJoke("Failed to fetch joke. Try again!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getJoke();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-800 to-gray-900 px-4">
      <div className="bg-white shadow-2xl rounded-2xl max-w-xl w-full p-8 flex flex-col items-center transition-all duration-300">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
          Random Joke Generator
        </h1>

        <div className="text-lg md:text-xl text-gray-700 text-center min-h-[80px] transition-opacity duration-300">
          {loading ? "Loading..." : joke}
        </div>

        <button
          onClick={getJoke}
          className="mt-6 bg-gray-800 hover:bg-gray-700 text-white font-medium py-2 px-6 rounded-xl shadow-md transition-all duration-200"
        >
          {loading ? "Fetching..." : "Get New Joke"}
        </button>
      </div>
    </div>
  );
};
