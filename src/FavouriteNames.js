import React from "react";

import Name from "./Name";

const FavouriteNames = (props) => {
  return (
    <ul>
      <p className="favourite-names-text">Favourite Names: </p>
      {props.data.map((favouriteName) => (
        <Name
          key={favouriteName.id}
          data={favouriteName}
          ammendFavourites={props.removeFromFavourites}
        />
      ))}
    </ul>
  );
};

export default FavouriteNames;
