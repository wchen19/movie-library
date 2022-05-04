import { useEffect, useState } from "react";
import Searchbar from "./components/Searchbar";
import MovieCard from "./components/MovieCard";
import "./App.css";

const API_URL = "http://www.omdbapi.com?apikey=6baa6add";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("Iron Man");
  }, []);

  const searchMovies = async (title) => {
    const res = await fetch(`${API_URL}&s=${title}`);
    const data = await res.json();
    setMovies(data.Search);
  };

  return (
    <div className="app">
      <h1>Movie Library</h1>

      <Searchbar searchMovies={searchMovies} />

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie, key) => (
            <MovieCard key={key} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
