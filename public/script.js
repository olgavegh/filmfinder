const tmdbKey = "e37acb7a11000f9b0c7c92ee45bbbaca";
const tmdbBaseUrl = "https://api.themoviedb.org/3";
const playBtn = document.getElementById("playBtn");

const getGenres = async () => {
  const genreRequestEndpoint = "/genre/movie/list";
  // Query strings start out with a question mark
  const requestParams = `?api_key=${tmdbKey}`;
  const urlToFetch = `${tmdbBaseUrl}${genreRequestEndpoint}${requestParams}`;
  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();
      //console.log(jsonResponse);
      const genres = jsonResponse.genres;
      return genres;
    }
  } catch (error) {
    console.log(error);
  }
};

const getMovies = async () => {
  const selectedGenre = getSelectedGenre();
  const discoverMovieEndpoint = "/discover/movie";
  //A query string starts with a question mark, ?, and each key/value pair is separated by the & symbol.
  const requestParams = `?api_key=${tmdbKey}&with_genres=${selectedGenre}`;
  const urlToFetch = `${tmdbBaseUrl}${discoverMovieEndpoint}${requestParams}`;
  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();
      //console.log(jsonResponse);
      const movies = jsonResponse.results;
      return movies;
    }
  } catch (error) {
    alert(error);
  }
};

const getMovieInfo = async (randomMovie) => {
  const randomMovieId = randomMovie.id;
  const movieEndpoint = `/movie/${randomMovieId}`;
  const requestParams = `?api_key=${tmdbKey}`;
  const urlToFetch = `${tmdbBaseUrl}${movieEndpoint}${requestParams}`;
  try {
    const response = await fetch(urlToFetch);
    if (response.ok) {
      const jsonResponse = await response.json();
      //console.log(jsonResponse);
      const movieInfo = jsonResponse;
      return movieInfo;
    }
  } catch (error) {
    console.log(error);
  }
};

// Gets a list of movies and ultimately displays the info of a random movie from the list
const showRandomMovie = async () => {
  const movieInfo = document.getElementById("movieInfo");
  if (movieInfo.childNodes.length > 0) {
    clearCurrentMovie();
  }
  const movies = await getMovies();
  //console.log(movies);
  const randomMovie = getRandomMovie(movies);
  const info = await getMovieInfo(randomMovie);

  setIntroHeader();
  displayMovie(info);
};

getGenres().then(populateGenreDropdown);
playBtn.onclick = showRandomMovie;

const setIntroHeader = () => {
  const introElem = document.getElementById("intro");
  introElem.style.flexDirection = "row";
  introElem.style.height = "100%";
  introElem.style.gap = "1rem";
  introElem.style.transition = "all 0.5s ease-in-out";
  const labelElem = document.getElementById("recommendationLabel");
  labelElem.style.display = "none";
};
