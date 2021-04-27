'use strict';

let numberOfFilms;

function start() {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  }
}

start();

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};


function rememberMyFilms() {
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
}

rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count > 0 && personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов.');
  } else if (personalMovieDB.count > 9 && personalMovieDB.count < 30) {
    alert('Вы классический зритель.');
  } else if (29 < personalMovieDB.count) {
    alert('Вы киноман.');
  } else {
    alert('Произошла ошибка.');
  }
}

detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i -1] = prompt(`Ваш любимый жанр под номером ${i}`);
  }
}

writeYourGenres();