import { formatDate } from '../service';

export const movieListContent = [
  {
    id: 0,
    title: 'Walk the Line',
    note: 2,
    img: 'https://image.tmdb.org/t/p/w500/zMkD6FVikyPNnigoupO7vD5ti9p.jpg',
    comments: 'Pas mal',
    imdb: 'https://www.imdb.com/title/tt0358273/',
    date: formatDate(new Date()),
    description:
      "Johnny Cash n'est pas encore la plus célèbre star de son temps. L'histoire commence dans l'Arkansas, en pleine Dépression, lorsqu'il est simple fils de métayer. Quelques années plus tard, Cash sillonne les routes américaines lors de tournées éprouvantes, auprès des pionniers du rock, Elvis Presley, Carl Perkins, Roy Orbison, Jerry Lee Lewis et Waylon Jennings, avant de donner son inoubliable concert au pénitencier de Folsom, en 1968.",
  },
];
