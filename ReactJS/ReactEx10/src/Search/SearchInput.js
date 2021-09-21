import React, { Component } from "react";

class SearchInput extends Component {
  onSearch = event => {
    const { onSearch } = this.props;
    onSearch(event.target.value);
  };

  render() {
    const { searchTerm } = this.props;
    return (
      <input
        type="text"
        className="form-control ds-input"
        value={searchTerm}
        placeholder="Search..."
        onChange={this.onSearch}
        style={{width:'250px', marginBottom:'60px'}}
      />
    );
  }
}

export default SearchInput;
