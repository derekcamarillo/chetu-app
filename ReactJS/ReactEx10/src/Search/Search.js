import React, { Component } from "react";

import { shows } from "./data.json";

import SearchInput from "./SearchInput";
import Show from "./Show";

class Search extends Component {
  state = {
    searchTerm: ""
  };

  onSearch = searchTerm => {
    this.setState({ searchTerm });
  };

  render() {
    const { searchTerm } = this.state;

    return (
      <div>
        <SearchInput searchTerm={searchTerm} onSearch={this.onSearch} />
        {shows
          .filter(show =>
            `${show.title} ${show.description}`
              .toUpperCase()
              .includes(searchTerm.toUpperCase())
          )
          .map(show => <Show key={show.imdbID} show={show} />)}
      </div>
    );
  }
}

export default Search;