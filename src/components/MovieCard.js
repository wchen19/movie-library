import React, { useEffect, useState } from 'react';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import { IMG_PATH } from '../api/config';
import '../styles/MovieCard.css';

function MovieCard({ movie, searchMovieDetail }) {
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
              movie.poster_path !== null
                ? `${IMG_PATH + movie.poster_path}`
                : 'https://via.placeholder.com/400'
            }
            alt={movie.title}
          />
        </div>
        <div className='movieInfo'>
          <span>
            <ThumbUpAltIcon />
            {` ${movie.vote_average}`}
          </span>
          <h3>{movie.title}</h3>
          <div>
            <button
              onClick={(e) => {
                e.preventDefault();
                searchMovieDetail(movie.id);
              }}
            >
              See Detail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
