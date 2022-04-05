import React from "react";

const Name = (props) => {
  return (
    <p
      className={`name ${props.data.sex === "m" ? "boy" : "girl"}`}
      onClick={() => props.ammendFavourites(props.data)}
    >
      {props.data.name}
    </p>
  );
};

export default Name;
