import React, { useEffect, useState } from 'react';
import Searchbar from './components/Searchbar';
import MovieCard from './components/MovieCard';
import { API_KEY, API_URL, movie } from './api/config';
import './App.css';
import MovieDetailModal from './components/MovieDetailModal';

function App() {
  const [movies, setMovies] = useState([]);
  const [movieDetail, setMovieDetail] = useState({});
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    popularMovies();
  }, []);

  const searchMovieDetail = async (movieId) => {
    const res = await fetch(
      `${API_URL}${movie.detail}${movieId}?api_key=${API_KEY}`
    );
    const data = await res.json();
    console.log(data);
    setMovieDetail(data);
    setShowModal(true);
  };

  const popularMovies = async () => {
    const res = await fetch(`${API_URL}${movie.popular}?api_key=${API_KEY}`);
    const data = await res.json();
    setMovies(data.results);
  };

  const searchMovies = async (title) => {
    const res = await fetch(
      `${API_URL}${movie.search}?api_key=${API_KEY}&query=${title}`
    );
    const data = await res.json();
    setMovies(data.result);
  };

  return (
    <div className='app'>
      {/* <div style={showModal && 'display:block'}></div> */}
      <h1>Movie Library</h1>
      <Searchbar searchMovies={searchMovies} />
      {showModal ? (
        <MovieDetailModal
          style={showModal ? { display: 'block' } : { display: 'none' }}
          setShowModal={setShowModal}
          movieDetail={movieDetail}
        />
      ) : (
        <div> </div>
      )}
      {movies?.length > 0 ? (
        <div
          style={showModal ? { display: 'none' } : { display: 'flex' }}
          className='container'
        >
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              // setMovieId={setMovieId}
              searchMovieDetail={searchMovieDetail}
            />
          ))}
        </div>
      ) : (
        <div className='empty'>
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
}

export default App;
