import React, { useState } from "react";

import Names from "./Names/Names";

import InitialData from "./babyNamesData.json";

import "./App.css";

function App() {
  const [filteredNames, setFilteredNames] = useState(InitialData);

  const searchNames = (event) => {
    const value = event.target.value.toLowerCase();
    setFilteredNames(
      InitialData.filter((name) => name.name.toLowerCase().includes(value))
    );
  };

  return (
    <div className="App">
      <input type={"text"} onKeyUp={searchNames} />
      <Names babyNames={filteredNames} />
    </div>
  );
}

export default App;
