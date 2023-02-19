import React, { Component } from "react";
import { handleMovieSearch, addMovieToList } from "../actions";
//import { StoreContext } from "../index";
import { connect } from "react-redux";
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //showSearchResults: false,
      searchText: "",
    };
  }
  handleAddToMovies = (movie) => {
    this.props.dispatch(addMovieToList(movie));
    //     this.setState({
    //      // shoSearchResults: false,
    //     });
  };
  handleSearch = () => {
    const { searchText } = this.state;
    console.log("handleSearch", searchText);
    this.props.dispatch(handleMovieSearch(searchText));
  };
  handleChange = (e) => {
    this.setState({
      searchText: e.target.value,
    });
  };

  render() {
    //  const { showSearchResults } = this.state;
    const { result, showSearchResults } = this.props.search;
    return (
      <div className="nav">
        <div className="search-container">
          <input onChange={this.handleChange} />
          <button onClick={this.handleSearch} id="search-btn">
            Search
          </button>
          {showSearchResults && (
            <div className="search-results">
              <div className="search-result">
                <img src={result.Poster} alt="search-pic" />
                <div className="movie-info">
                  <span>{result.title}</span>

                  <button onClick={() => this.handleAddToMovies(result)}>
                    Add To Movies
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
// class NavBarWrapper extends React.Component {
//   render() {
//     return (
//       <StoreContext.Consumer>
//         {(store) => (
//           <Navbar dispatch={store.dispatch} search={this.props.search} />
//         )}
//       </StoreContext.Consumer>
//     );
//   }
// }
// export default NavBarWrapper;
function mapStateToProps({ search }) {
  return {
    search,
  };
}
export default connect(mapStateToProps)(Navbar);
