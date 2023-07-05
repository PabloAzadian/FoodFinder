import React from "react";
import styles from "./App.module.css";

import BusinessList from "../BusinessList/BusinessList";
import SearchBar from "../SearchBar/SearchBar";

const App = () => {
  return (
    <div className={styles.App}>
      <h1>FoodFinder</h1>
      <SearchBar />
      <BusinessList />
    </div>
  );
};

export default App;
