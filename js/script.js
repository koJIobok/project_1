"use strict";

let firstUserAnswer;

function start() {
    firstUserAnswer = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (firstUserAnswer == '' || firstUserAnswer == null || isNaN(firstUserAnswer)) {
        firstUserAnswer = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}


const personalMovieDB = {
    count: `${firstUserAnswer}`,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() {
    for (let i = 0; i < 1; i++) {
        let a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько оцените его?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length <50) {
            personalMovieDB.movies[a] = b;
            console.log('Done!');
        } else {
            console.log('error');
            i--;
        }
    }
}

// let i = 1;

// do {
//     let a = prompt('Один из последних просмотренных фильмов?', ''),
//     b = prompt('На сколько оцените его?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length <50) {
//         personalMovieDB.movies[a] = b;
//         console.log('Done!');
//     } else {
//         console.log('error');
//         i--;
//     }
//     i++;
// } while (i < 2);

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert('Просмотрено довольно мало фильмов...');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <=30) {
        alert('Вы классический зритель!');
    } else if (personalMovieDB.count >= 30) {
        alert('Вы киноман!');
    } else {
        console.log('Error');
    }
}


// function showMyDB (a) {
//     personalMovieDB.privat = a;
//     if (a == false) {
//         return personalMovieDB;
//     }
// }

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

// function writeYourGenres(a, b, c) {
//     a = prompt('Ваш любимый жанр под номером 1', '');
//     personalMovieDB.genres.splice(0, 0, a);
//     b = prompt('Ваш любимый жанр под номером 2' + `${personalMovieDB.genres.splice(1, 0, b)}`, '');
//     c = prompt('Ваш любимый жанр под номером 3' + `${personalMovieDB.genres.splice(2, 0 ,c)}`, '');
//     return a, b, c;
// }

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
    }
}

writeYourGenres();

showMyDB(personalMovieDB.privat);



