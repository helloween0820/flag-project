import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/CountryList.css";
import { Country } from "./Country";
import axios from "axios";
import { Paises, Region } from "../interface/paises";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

export const CountryList = () => {
  const [countryList, setCountryList] = useState<Paises[]>([]);
  const [paises, setPaises] = useState<Paises[]>([]);
  const [busqueda, setBusqueda] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [continente, setContinentes] = useState([
    "Americas",
    "Asia",
    "Europe",
    "Oceania",
    "Africa",
  ]);
  const [continenteSelect, setContinenteSelec] = useState("");

  useEffect(() => {
    getPaies();
  }, []);

  const getPaies = async () => {
    await axios
      .get("https://restcountries.com/v2/all")
      .then((response) => {
        setCountryList(response.data);
        setPaises(response.data);
      })

      .catch(() => {
        console.log("hubo un error, que dolor que dolor que pena");
      });
  };

  const handleChange = (e: any) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };

  const filtrar = (busqueda: "") => {
    setCountryList(
      paises.filter((i) =>
        i.name.toLowerCase().includes(busqueda.toLowerCase())
      )
    );
  };

  const [checked, setChecked] = useState(false);

  const mainClass = darkMode ? "is-dark-mode" : "is-light-mode";
  function changeMedia(mq: any) {
    setDarkMode(mq.matches);
    setChecked(mq.matches);
  }

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    mq.addListener(changeMedia);
    setDarkMode(mq.matches);
    setChecked(mq.matches);
    return () => {
      mq.removeListener(changeMedia);
    };
  }, []);

  return (
    <div>
      <div className="box">
        <Link to="/" className="link">
          <h1 className="text">Where in the world?</h1>
        </Link>
        <div className="dark-mode">
          <p className="p" onClick={changeMedia}>
            <span className="moon">
              <FontAwesomeIcon icon={faMoon} className="moonn" />
            </span>
            Dark Mode
          </p>
        </div>
      </div>

      <div className="input">
        <div className="buscador">
          <div className="dropdown">
            <select
              className="select"
              onChange={(e: any) => {
                setContinenteSelec(e.target.value);
                console.log(e.target.value);

                const America = paises.filter(
                  (i) =>
                    i.region.includes(e.target.value) ||
                    (i.region !== e.target.value && setCountryList(countryList))
                );

                {
                  console.log(America);
                  setCountryList(America);
                }
              }}
            >
              <option> filtrar por region </option>
              {continente.map((i) => {
                return <option value={i}> {i} </option>;
              })}
            </select>
          </div>

          <button className="buscar"></button>

          <input
            value={busqueda}
            placeholder="Busca por un paìs"
            type="text"
            onChange={handleChange}
            className="search"
          />
        </div>
        <div className="text-alert">
          {countryList.length === 0 && busqueda && (
            <p>
              no se pudo encontrar un país con el nombre:
              <strong> {busqueda} </strong>
            </p>
          )}
        </div>
      </div>

      <div className="container">
        {countryList.map(({ name, flag, population, capital, region }) => {
          return (
            <div className="left">
              <Country
                flag={flag}
                name={name}
                key={name}
                population={population}
                region={region}
                capital={capital}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
