import React, { useEffect, useState } from 'react';
import '../styles/MovieCard.css';

const IMG_PATH = 'https://image.tmdb.org/t/p/w500/';

function MovieCard({ movie }) {
  const [date, setDate] = useState('');

  const getDate = () => {
    const mydate = new Date(movie.release_date);
    const month = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ][mydate.getMonth()];
    const str = `${mydate.getDate()} ${month} ${mydate.getFullYear()}`;
    setDate(str);
  };

  useEffect(() => {
    getDate();
  }, []);

  return (
    <div>
      <div className='movie'>
        <div className='movieReleaseDate'>
          <p>{date}</p>
        </div>
        <div className='moviePoster'>
          <img
            src={
              movie.poster_path !== 'N/A'
                ? `${IMG_PATH + movie.poster_path}`
                : 'https://via.placeholder.com/400'
            }
            alt={movie.title}
          />
        </div>
        <div className='movieInfo'>
          <span>{`Rating: ${movie.vote_average}`}</span>
          <h3>{movie.title}</h3>
          <div>
            <button>See Detail</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
