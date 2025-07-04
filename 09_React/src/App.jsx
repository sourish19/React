import { useState, useEffect } from "react";
import fetchJokes from "./api.js";

export const App = () => {
  const [joke, setJoke] = useState("");

  useEffect(() => {
    fetchJokes().then((data) => {
      setJoke(data);
    });
  }, []);

  return (
    <div className="flex flex-col  items-center h-screen">
      <div className="text-4xl">Random Jokes Generator</div>
      <div className="flex flex-col">
        <div>{joke}</div>
        <button>Get New Joke</button>
      </div>
    </div>
  );
};
