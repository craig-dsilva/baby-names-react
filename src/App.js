import React, { useState } from "react";

import Names from "./Names";
import FavouriteNames from "./FavouriteNames";

import InitialData from "./babyNamesData.json";

import "./App.css";

function App() {
  const [filteredNames, setFilteredNames] = useState(InitialData);
  const [favouriteNames, setFavouriteNames] = useState([]);
  const [maleClicked, setMaleClicked] = useState(false);
  const [femaleClicked, setFemaleClicked] = useState(false);

  const searchNames = (event) => {
    const value = event.target.value.toLowerCase();
    setFilteredNames(
      filteredNames.filter((name) => name.name.toLowerCase().includes(value))
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
    favouriteNamesCopy.splice(favouriteNames.indexOf(babyName), 1);
    nameListCopy.push(babyName);
    setFilteredNames(nameListCopy);
    setFavouriteNames(favouriteNamesCopy);
  };

  const allNames = () => {
    setMaleClicked(false);
    setFemaleClicked(false);
    setFilteredNames(InitialData);
  };

  const maleNames = () => {
    setMaleClicked(true);
    setFemaleClicked(false);
    setFilteredNames(InitialData.filter((babyName) => babyName.sex === "m"));
  };

  const femaleNames = () => {
    setFemaleClicked(true);
    setMaleClicked(false);
    setFilteredNames(InitialData.filter((babyName) => babyName.sex === "f"));
  };

  return (
    <div className="App">
      <input className="search" type={"text"} onKeyUp={searchNames} />
      <button className="button" type="radio" onClick={allNames}>
        All
      </button>
      <button
        className={`button ${maleClicked ? "boy" : ""}`}
        type="radio"
        onClick={maleNames}
      >
        Male
      </button>
      <button
        className={`button ${femaleClicked ? "girl" : ""}`}
        type="radio"
        onClick={femaleNames}
      >
        Female
      </button>
      <FavouriteNames
        data={favouriteNames}
        removeFromFavourites={removeFavourite}
      />
      <Names babyNames={filteredNames} addToFavourites={addFavourite} />
    </div>
  );
}

export default App;
