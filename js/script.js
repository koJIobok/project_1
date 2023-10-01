"use strict";

let firstUserAnswer = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: `${firstUserAnswer}`,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;

console.log(personalMovieDB);