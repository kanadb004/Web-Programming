import React, { useState, useEffect } from "react";

function JokeFetcher() {
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchJoke = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://v2.jokeapi.dev/joke/Programming?type=single"
      );
      const data = await response.json();
      setJoke(data.joke);
    } catch (error) {
      console.error("Error fetching joke:", error);
      setJoke("Failed to fetch joke. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div>
      <h2>Random Programming Joke</h2>
      {loading ? (
        <p>Loading joke...</p>
      ) : (
        <div>
          <p>{joke}</p>
          <button onClick={fetchJoke}>Get New Joke</button>
        </div>
      )}
    </div>
  );
}

export default JokeFetcher;

