const fetchJokes = async () => {
  const options = { method: "GET", headers: { accept: "application/json" } };
  const url = "https://api.freeapi.app/api/v1/public/randomjokes/joke/random";

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data.data.content;
  } catch (error) {
    console.error(error);
  }
};

export default fetchJokes;
