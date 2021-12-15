import {
  faArrowAltCircleLeft,
  faMoon,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import "../styles/countryPage.css";

export const CountryPage = ({
  name,
  flag,
  nativeName,
  population,
  region,
  subregion,
  capital,
  topLevelDomain,
  currencies = [],
  languages = [],
  borders = [],
}: any) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/CountryList");
  };
  return (
    <div className="conteiner">
      <div className="backs">
        <button className="back" onClick={handleClick}>
          {" "}
          <FontAwesomeIcon icon={faArrowAltCircleLeft} /> Back
        </button>
      </div>
      <img src={flag} alt="" className="imagen" />
      <div className="detalles">
        <div>
          <h2>{name}</h2>
          <div className="grid">
            <div>
              <p>
                <strong>Native Name:</strong> {nativeName}
              </p>
              <p>
                <strong>Population:</strong> {population}
              </p>
              <p>
                <strong>Region:</strong> {region}
              </p>
              <p>
                <strong>Sub Region:</strong> {subregion}
              </p>
              <p>
                <strong>Capital:</strong> {capital}
              </p>
            </div>
            <div>
              <p>
                <strong>Currencies:</strong>{" "}
                {currencies.map((item: any) => (
                  <span>{item.name}</span>
                ))}
              </p>
              <p className="languages">
                <strong>Languages:</strong>{" "}
                {languages.map((item: any) => (
                  <span>{item.name}</span>
                ))}
              </p>
            </div>
          </div>
          <p className="borders">
            <strong>Border Countries:</strong>
          </p>
          {borders.map((item: any) => (
            <button className="border-item">{item}</button>
          ))}
        </div>
      </div>
    </div>
  );
};
