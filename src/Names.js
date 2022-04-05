import React from "react";

import Name from "./Name";

const Names = (props) => {
  return (
    <div className="names">
      {props.babyNames
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((babyName) => {
          return (
            <Name
              key={babyName.id}
              data={babyName}
              ammendFavourites={props.addToFavourites}
            />
          );
        })}
    </div>
  );
};

export default Names;
