import { useEffect, useState } from 'react';
const baseUrl = 'https://api.themoviedb.org/3/search/movie';
const api_key = '2ee3dcd807e405603316fe1c5bb21dfb';

const createRequest = (obj) => {
  return (
    '?api_key=' +
    api_key +
    '&' +
    Object.keys(obj)
      .map((k) => k + '=' + obj[k].toLowerCase().replace(' ', '+'))
      .join('&')
  );
};

export const selectMovie = (title) => {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    fetchMovie();
  });

  const transformMovie = (movie) => {
    return {
      id: movie.id,
      title: movie.original_title,
      note: movie.vote_average,
      description: movie.overview,
      comments: 'none',
      imdb: 'https://www.imdb.com/title/' + movie.imdb_id + '/',
      picture: 'https://image.tmdb.org/t/p/w500' + movie.poster_path,
    };
  };

  const fetchMovie = async () => {
    try {
      let res = await fetch(baseUrl + createRequest({ query: title }));
      const json = await res.json();
      if (title != '') setMovieList(json.results.map(transformMovie));
      else setMovieList([]);
    } catch (e) {
      console.error(e);
    }
  };

  return movieList;
};

export const selectPicture = (title) => {
  const [picture, setPicture] = useState('/zMkD6FVikyPNnigoupO7vD5ti9p.jpg');

  useEffect(() => {
    fetchPicture();
  });

  const fetchPicture = async () => {
    try {
      let res = await fetch(baseUrl + createRequest({ query: title }));
      const json = await res.json();
      if (title !== '')
        if (json.results[0]) setPicture(json.results[0].poster_path);
        else setPicture('/zMkD6FVikyPNnigoupO7vD5ti9p.jpg');
      else setPicture('/zMkD6FVikyPNnigoupO7vD5ti9p.jpg');
    } catch (e) {
      console.error(e);
    }
  };

  return 'https://image.tmdb.org/t/p/w500' + picture;
};
