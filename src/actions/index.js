//action types
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";
export const SET_SHOW_FAVOURITE = "SET_SHOW_FAVOURITE";
export const ADD_SEARCH_RESULT = "ADD_SEARCH_RESULT";
export const ADD_MOVIES_TO_LIST = "ADD_MOVIES_TO_LIST";
//action creators
export function addMovies(data) {
  return {
    type: ADD_MOVIES,
    movies: data,
  };
}
export function addFavourite(data) {
  return {
    type: ADD_TO_FAVOURITE,
    movies: data,
  };
}

export function removeFavourite(data) {
  // console.log(data);
  return {
    type: REMOVE_FROM_FAVOURITE,
    movies: data,
  };
}
export function setShowFavourite(val) {
  return {
    type: SET_SHOW_FAVOURITE,
    movies: val,
  };
}
export function addMovieToList(val) {
  return {
    type: ADD_MOVIES_TO_LIST,
    movies: val,
  };
}
export const handleMovieSearch = (movies) => {
  console.log(movies, "in action");
  const url = `https://www.omdbapi.com/?apikey=3ca5df7&t=${movies}`;
  return (dispatch) => {
    fetch(url)
      .then((response) => response.json())
      .then((movie) => {
        console.log("movie", movie);
        dispatch(addMovieSearchResult(movie));
      });
  };
  //dispatch an actionn--
};
export function addMovieSearchResult(movie) {
  return { type: ADD_SEARCH_RESULT, movie };
}
