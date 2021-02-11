const numberOffilms = +prompt('How many movies have you wathced?', '');

const personalMovieDB ={
    count: numberOffilms, 
    movies: {}, 
    actors:{}, 
    genres:[], 
    privat: false
};

const a = prompt('What was the last movie you watched?', '');
const b = prompt('How are you going to rate it?', '');
const c = prompt('What was the last movie you watched?', '');
const d = prompt('How are you going to rate it?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);