import React, { useState } from "react";

import Names from "./Names";
import FavouriteNames from "./FavouriteNames";

import InitialData from "./babyNamesData.json";

import "./App.css";

function App() {
  const [filteredNames, setFilteredNames] = useState(InitialData);
  const [favouriteNames, setFavouriteNames] = useState([]);

  const searchNames = (event) => {
    const value = event.target.value.toLowerCase();
    setFilteredNames(
      InitialData.filter((name) => name.name.toLowerCase().includes(value))
    );
  };

  const addFavourite = (babyName) => {
    const favouriteNamesCopy = [...favouriteNames];
    const nameListCopy = [...filteredNames];
    favouriteNamesCopy.push(babyName);
    nameListCopy.splice(filteredNames.indexOf(babyName), 1);
    setFilteredNames(nameListCopy);
    setFavouriteNames(favouriteNamesCopy);
  };

  const removeFavourite = (babyName) => {
    const favouriteNamesCopy = [...favouriteNames];
    const nameListCopy = [...filteredNames];
    favouriteNamesCopy.splice(filteredNames.indexOf(babyName), 1);
    nameListCopy.push(babyName);
    setFilteredNames(nameListCopy);
    setFavouriteNames(favouriteNamesCopy);
  };

  return (
    <div className="App">
      <input type={"text"} onKeyUp={searchNames} />
      <FavouriteNames
        data={favouriteNames}
        removeFromFavourites={removeFavourite}
      />
      <Names babyNames={filteredNames} addToFavourites={addFavourite} />
    </div>
  );
}

export default App;
