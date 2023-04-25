import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  renderSortByOptions() {
    return (
      <div className="SearchBar-sort-options">
        <ul>
          <li>Best Match</li>
          <li>Highest Rated</li>
          <li>Most Reviewed</li>
        </ul>
      </div>
    );
  }

  render() {
    return (
      <div className="SearchBar">
        <div className="SearchBar-sort-options">
          {this.renderSortByOptions()}
        </div>
        <div className="SearchBar-fields">
          <input placeholder="Search Businesses" />
          <input placeholder="Where?" />
        </div>
        <div className="SearchBar-submit">
          <button>Let's Go</button>
        </div>
      </div>
    );
  }
}

export default SearchBar;
