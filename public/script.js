const tmdbKey = "c0a39a6aa6ea3dc07aebe46b5d787030";
const tmdbBaseUrl = "https://api.themoviedb.org/3";
const playBtn = document.getElementById("playBtn");

const getGenres = async () => {
  const genreRequestEndpoint = "/genre/tv/list?language=en";
  const requestParams = `?api_key=${tmdbKey}`;

  const urlToFetch = `${tmdbBaseUrl}${genreRequestEndpoint}${requestParams}`;

  try {
  } catch (error) {
    console.log(error);
  }
};

function getMovies() {
  const selectedGenre = getSelectedGenre();
}

const getMovieInfo = () => {};

// Gets a list of movies and ultimately displays the info of a random movie from the list
const showRandomMovie = () => {
  const movieInfo = document.getElementById("movieInfo");
  if (movieInfo.childNodes.length > 0) {
    clearCurrentMovie();
  }
};

getGenres().then(populateGenreDropdown);
playBtn.onclick = showRandomMovie;
