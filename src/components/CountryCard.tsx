import { Link } from "react-router-dom";
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

const CountryCard: React.FC<{ country: any }> = ({ country }) => {
  return (
    <Link
      className="card-div"
      to={"/details/" + country.demonym}
      key={country.demonym}
    >
      <img src={country.flags.svg} alt="img" />
      <div className="card-text">
        <p className="card-title">{country.name}</p>
        <div className="text-div">
          <p className="subText">
            <b>Population: </b>
            {country.population.toLocaleString()}
          </p>
          <p className="subText">
            <b>Region: </b>
            {country.region}
          </p>
          <p className="subText">
            <b>Capital: </b>
            {country.capital}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CountryCard;
