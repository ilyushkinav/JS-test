'use strict';

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', 0);

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};


for (let i = 0; i < numberOfFilms; i++) {
  let lastFilm = '',
      rating = '';

  lastFilm = prompt('Один из последних просмотренных фильмов?', '');
  rating = prompt('На сколько оцените его?', '');

  if (lastFilm === '' || rating === '' || lastFilm === null || rating === null || lastFilm.length > 50) {
    i--;
  } else {
    personalMovieDB.movies[lastFilm] = rating;
  }
};

if (personalMovieDB.count > 0 && personalMovieDB.count < 10) {
  alert('Просмотрено довольно мало фильмов.');
} else if (personalMovieDB.count > 9 && personalMovieDB.count < 30) {
  alert('Вы классический зритель.');
} else if (29 < personalMovieDB.count) {
  alert('Вы киноман.');
} else {
  alert('Произошла ошибка.');
}