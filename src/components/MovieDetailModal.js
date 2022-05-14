import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IMG_PATH, API_URL, API_KEY, movie } from '../api/config';
import CastSlide from './CastSlide';
import TrailerSlide from './TrailerSlide';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import '../styles/MovieDetailModal.css';
import 'swiper/css';

const MovieDetailModal = ({ movieDetail, setShowModal }) => {
  const [date, setDate] = useState('');
  const [year, setYear] = useState(0);
  const [casts, setCasts] = useState([]);
  const [videos, setVideos] = useState([]);

  const getDate = () => {
    const mydate = new Date(movieDetail.release_date);
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
    setYear(mydate.getFullYear());
  };

  const getCasts = async () => {
    const res = await fetch(
      `${API_URL}${movie.detail}${movieDetail.id}/credits?api_key=${API_KEY}`
    );
    const data = await res.json();
    console.log(data.cast);
    setCasts(data.cast);
  };

  const getVideos = async () => {
    const res = await fetch(
      `${API_URL}${movie.detail}${movieDetail.id}/videos?api_key=${API_KEY}`
    );
    const data = await res.json();
    console.log(data.results);
    setVideos(data.results);
  };

  useEffect(() => {
    getDate();
    getCasts();
    getVideos();
  }, []);

  return (
    <div className='movie-detail'>
      <div
        onClick={() => {
          setShowModal(false);
        }}
      >
        <ArrowBackIcon />
      </div>

      <img
        src={
          movieDetail.backdrop_path !== null
            ? `${IMG_PATH + movieDetail.backdrop_path}`
            : null
        }
        alt={movieDetail.title}
        className='img'
      />
      <div className='top-detail'>
        <div className='movie-poster'>
          <img
            src={
              movieDetail.poster_path !== null
                ? `${IMG_PATH + movieDetail.poster_path}`
                : 'https://via.placeholder.com/400'
            }
            alt={movieDetail.title}
          />
        </div>
        <div className='movie-info'>
          <div className='movie-title'>
            <h1>{movieDetail.title}</h1>
            <h2>({year})</h2>
          </div>
          <div className='movie-genre-date'>
            <div className='movie-date'>{date}</div>
            &bull;
            <div className='movie-genre'>
              {movieDetail.genres.map((genre) => (
                <div key={genre.id}>
                  <h4>{genre.name}</h4>
                </div>
              ))}
            </div>
          </div>
          <div className='movie-runtime'>{movieDetail.runtime} minutes</div>
          <div className='movie-overview'>
            <h3>Overview</h3>
            <p>{movieDetail.overview}</p>
          </div>
          <div className='movie-score'>
            <p>User Score: {movieDetail.vote_average * 10}%</p>
          </div>
        </div>
      </div>
      <div className='bottom-detail'>
        <div className='movie-cast'>
          <h2>Cast</h2>
          <Swiper
            slidesPerView={4}
            grabCursor={true}
            className='cast-card-container'
          >
            {casts.map((cast, index) => {
              if (index < 12) {
                return (
                  <SwiperSlide key={index}>
                    <CastSlide cast={cast} />
                  </SwiperSlide>
                );
              }
              return null;
            })}
          </Swiper>
        </div>
        <div className='movie-trailer'>
          <h2>Trailer</h2>
          <Swiper
            slidesPerView={2}
            grabCursor={true}
            className='trailer-container'
          >
            {videos.map((video, index) => {
              if (index < 6) {
                return (
                  <SwiperSlide key={index} tag='li'>
                    <TrailerSlide video={video} />
                  </SwiperSlide>
                );
              }
              return null;
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailModal;
