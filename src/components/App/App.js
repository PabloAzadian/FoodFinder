import React, { useState } from "react";
import styles from "./App.module.css";

import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";
import search from "../../utils/YelpApi";

const App = () => {
  const [businesses, setBusinesses] = useState([]);

  const handleSearch = (terms, location, sortBy) => {
    search(terms, location, sortBy)
      .then((businesses) => {
        setBusinesses(businesses);
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle error state as per your requirements
      });
  };

  return (
    <div className={styles.App}>
      <header>
        <image src="https://cdn-icons-png.flaticon.com/512/45/45605.png" />
        <h1>FoodFinder</h1>
      </header>
      
      <SearchBar handleSearch={handleSearch} />
      <BusinessList businesses={businesses} />
    </div>
  );
};

export default App;
