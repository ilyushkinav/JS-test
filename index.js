'use strict';

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', 0);

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

const addMovies = () => {
  let lastFilm = '',
      rating = '';
  for (let i = 0; i < 2; i++) {
    lastFilm = prompt('Один из последних просмотренных фильмов?');
    rating = prompt('На сколько оцените его?');

    personalMovieDB.movies[lastFilm] = rating;
  };
};

addMovies();