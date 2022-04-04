import React from "react";

import "./Names.css";

const Names = (props) => {
  return (
    <div className="names">
      {props.babyNames
        .sort((a, b) => a.name.localeCompare(b.name))
        .map(({ id, name, sex }) => {
          return (
            <p key={id} className={`name ${sex === "m" ? "boy" : "girl"}`}>
              {name}
            </p>
          );
        })}
    </div>
  );
};

export default Names;
