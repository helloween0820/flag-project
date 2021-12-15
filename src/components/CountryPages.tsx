import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import React, { useEffect, useState } from "react";

import { useParams } from "react-router";
import { Navigate, Link } from "react-router-dom";
import { Paises, Flags } from "../interface/paises";

import "../styles/countryPage.css";
import { CountryPage } from "./CountryPage";

export const CountryPages = () => {
  /*   const [pais, setPais] = useState<Paises[]>([]);
  const country = pais.find((i) => i.name === id?.replace("-", " ")); */
  const [paises, setPaises] = useState<Paises[]>([]);
  useEffect(() => {
    getPaies();
  }, []);

  const { name } = useParams();
  const getPaies = async () => {
    await axios
      .get(`https://restcountries.com/v2/name/${name}`)
      .then((response) => {
        setPaises(response.data);
      })

      .catch(() => {
        console.log("hubo un error, que dolor que dolor que pena");
      });
  };
  return (
    <div>
      <div className="content">
        <Link to="/" className="link">
          <h1 className="text">Where in the world?</h1>
        </Link>
        <div className="dark-mode">
          <p>
            <span className="moon">
              <FontAwesomeIcon icon={faMoon} className="moonn" />
            </span>
            Dark Mode
          </p>
        </div>
      </div>
      <div>
        {paises.map(
          ({
            name,
            flag,
            nativeName,
            population,
            region,
            subregion,
            capital,

            currencies,
            languages,
            borders,
          }) => {
            return (
              <div className="left">
                <CountryPage
                  name={name}
                  flag={flag}
                  nativeName={nativeName}
                  population={population}
                  region={region}
                  subregion={subregion}
                  capital={capital}
                  currencies={currencies}
                  languages={languages}
                  borders={borders}
                />
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};
