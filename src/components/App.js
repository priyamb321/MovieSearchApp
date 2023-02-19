import React from "react";
import { data } from "../data";
import Navbar from "./Navbar";
import MovieCard from "./MovieCard";
import { addMovies, setShowFavourite } from "../actions";
import { StoreContext } from "../index";
import NavBarWrapper from "./Navbar";

import { connect } from "react-redux";
class App extends React.Component {
  componentDidMount() {
    // const { store } = this.props;
    // store.subscribe(() => {
    //   console.log("UPDATING");
    //   this.forceUpdate();
    // });
    //make an api call
    // dispatch action
    // store.dispatch({
    //   type: "ADD_MOVIES",
    //   movies: data,
    // });
    this.props.dispatch(addMovies(data));
    console.log("STATE", this.props);
  }
  isMovieFavourite = (movie) => {
    const { movies } = this.props;
    const index = movies.favourites.indexOf(movie);
    if (index !== -1) {
      //found the movies
      return true;
    }
    return false;
  };
  onChangeTab = (val) => {
    this.props.dispatch(setShowFavourite(val));
  };
  render() {
    const { movies, result, search } = this.props;
    const { list, favourites, showFavourites } = movies; //{list:[],fav:[]}--{movies:{},search:{}}
    console.log("RENDER", this.props);
    const displayMovies = showFavourites ? favourites : list;
    return (
      <div className="App">
        <NavBarWrapper search={search} />
        <div className="main">
          <div className="tabs">
            <div
              className={`tab ${showFavourites ? "" : "active-tabs"}`}
              onClick={() => this.onChangeTab(false)}
            >
              {" "}
              Movies
            </div>

            <div
              className={`tab ${showFavourites ? "active-tabs" : ""}`}
              onClick={() => this.onChangeTab(true)}
            >
              Favourites
            </div>
          </div>
        </div>

        <div className="list">
          {displayMovies.map((movie, index) => {
            return (
              <MovieCard
                movie={movie}
                key={`movies-${index}`}
                dispatch={this.props.dispatch}
                isFavourite={this.isMovieFavourite(movie)}
              />
            );
          })}
        </div>
        {displayMovies.length === 0 ? <div>No movies to display!</div> : null}
      </div>
    );
  }
}
//wrapper method--
// class AppWrapper extends React.Component {
//   render() {
//     return (
//       <StoreContext.Consumer>
//         {(store) => <App store={store} />}
//       </StoreContext.Consumer>
//     );
//   }
// }
// export default AppWrapper;
function mapStateToProps(state) {
  return {
    movies: state.movies,
    search: state.movies,
  };
}
export default connect(mapStateToProps)(App);
