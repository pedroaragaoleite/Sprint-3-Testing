// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  const result = array.map(movie => movie.director);
  // console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  const result = array.filter(movie => movie.director === director);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let moviesfromDirector = getMoviesFromDirector(array, director);
  // console.log(moviesfromDirector);
  const result = Number((moviesfromDirector.reduce((accumulador, movie) => accumulador + movie.score, 0) / moviesfromDirector.length).toFixed(2));
  return result;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  const sortedMovies = array.map(movie => movie.title).sort().slice(0, 20);
  return sortedMovies
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  const sortedByYear = array.map(movie => ({ ...movie })).sort((a, b) => a.year - b.year || a.title.localeCompare(b.title));
  return sortedByYear;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array) {
  const moviesGenre = array.filter(movie => movie.genre.includes('Crime'))
    .map(movie => ({ ...movie }));

  const result = Number((moviesGenre.reduce((total, movie) => total + movie.score, 0) / moviesGenre.length).toFixed(2))
  return result;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  const moviesDuration = array.map(movie => {
    let durationMovie = movie.duration.split(" ").map(word => word.replace(/[hmin]/g, '')).map(word => parseInt(word));
    if (durationMovie.length === 1) {
      durationMovie = durationMovie[0] * 60;
    } else {
      durationMovie = durationMovie[0] * 60 + durationMovie[1];
    }

    return { ...movie, duration: durationMovie };
  })
  // console.log(moviesDuration);
  return moviesDuration;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  const sortedFilmsYear = array.map(movie => ({ ...movie }))
    .filter(movie => movie.year === year)
    .sort((a, b) => b.score - a.score);

  const filmOfTheYear = [sortedFilmsYear.length > 0 ? sortedFilmsYear[0] : null];

  console.log(filmOfTheYear);

  return filmOfTheYear;
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
