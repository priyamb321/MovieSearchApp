import React, { Component } from "react";
import { addFavourite, removeFavourite } from "../actions";

export default class MovieCard extends Component {
  handleFavouriteCheck = () => {
    const { movie, isFavourite } = this.props;
    console.log("MoviesHandle=>", movie);
    this.props.dispatch(addFavourite(movie));
  };
  handleUnFavouriteCheck = () => {
    const { movie } = this.props;
    this.props.dispatch(removeFavourite(movie));
  };
  render() {
    const { movie, isFavourite } = this.props;
    console.log("RESULT==>", movie);
    return (
      <div className="movie-card">
        <div className="left">
          <img alt="movie-poster" src={movie.Poster} />
        </div>
        <div className="right">
          <div className="title">{movie.title}</div>
          <div className="plot">{movie.Plot}</div>
          <div className="footer">
            <div className="rating">{movie.imdbRating}</div>
            {isFavourite ? (
              <button
                className="unfavourite-btn"
                onClick={this.handleUnFavouriteCheck}
              >
                UnFavourite
              </button>
            ) : (
              <button
                className="favourite-btn"
                onClick={this.handleFavouriteCheck}
              >
                Favourite
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}
