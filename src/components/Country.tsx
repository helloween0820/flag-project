import React from "react";
import { useNavigate } from "react-router";

import "../styles/Country.css";

export const Country = ({ flag, name, population, region, capital }: any) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/Country/${name}`);
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="details" onClick={handleClick}>
          <img loading="lazy" src={flag} alt="" />
          <h2> {name} </h2>
          <p>
            <strong>Population:</strong> {population}
          </p>
          <p>
            <strong>Region:</strong> {region}
          </p>
          <p>
            <strong>Capital:</strong> {capital}
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};
