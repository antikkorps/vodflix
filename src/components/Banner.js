import React from 'react';
import { useState, useEffect } from 'react';
import './Banner.scss';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import requests from '../datas/Requests';
import axios from 'axios';

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);

      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);

  function truncateOverview(str, n) {
    return str?.length > n
      ? str.substr(0, n - 1) + '...'
      : 'No available description';
  }

  const bannerStyle = {
    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
  };

  console.log(movie);
  return (
    <header className='banner' style={bannerStyle}>
      <div className='banner__content'>
        <h1 className='banner__title'>
          {movie?.title || movie?.name || movie.originalTitle}
        </h1>
        <p className='banner__description'>
          {truncateOverview(movie?.overview, 150)}
        </p>
        <div className='banner__buttons'>
          <button className='banner__button banner__button--play'>
            <PlayArrowIcon /> Trailer
          </button>
          <button className='banner__button'>
            <HelpOutlineIcon />
            About
          </button>
        </div>
      </div>
    </header>
  );
}

export default Banner;
