import { combineReducers } from "redux";
import {
  ADD_MOVIES,
  ADD_MOVIES_TO_LIST,
  ADD_SEARCH_RESULT,
  ADD_TO_FAVOURITE,
  REMOVE_FROM_FAVOURITE,
  SET_SHOW_FAVOURITE,
} from "../actions";
const initialMoviesState = {
  list: [],
  favourites: [],
  showFavourites: false,
};
export function movies(state = initialMoviesState, action) {
  //   if (action.type == ADD_MOVIES) {
  //     return {
  //       ...state,
  //       list: action.movies,
  //     };
  //   }

  //  return state;
  switch (action.type) {
    case ADD_MOVIES:
      return {
        ...state,
        list: action.movies,
      };
    case ADD_TO_FAVOURITE:
      // console.log(action.movies, "ADDDD");
      return {
        ...state,
        favourites: [action.movies, ...state.favourites],
      };
    case REMOVE_FROM_FAVOURITE:
      const filteredArray = state.favourites.filter(
        (movie) => movie.Title !== action.movies.Title
      );
      return {
        ...state,
        favourites: filteredArray,
      };
    case SET_SHOW_FAVOURITE:
      return {
        ...state,
        showFavourites: action.movies, //true or false
      };
    case ADD_MOVIES_TO_LIST:
      return {
        ...state,
        list: [action.movies, ...state.list],
      };
    default:
      return state;
  }
}
const initialSearchState = {
  result: {},
  showSearchResults: false,
};
export function search(state = initialSearchState, action) {
  switch (action.type) {
    case ADD_SEARCH_RESULT:
      return {
        ...state,
        result: action.movie,
        showSearchResults: true,
      };
    case ADD_MOVIES_TO_LIST:
      return {
        ...state,
        showSearchResults: false,
      };
    default:
      return state;
  }
  return state;
}
export default combineReducers({
  movies: movies,
  search: search,
});
