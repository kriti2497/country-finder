/* eslint-disable react-hooks/exhaustive-deps */
import { Link, useNavigate, useParams } from "react-router-dom";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";

import countryData from "../data.json";

const CountryDetails = () => {
  const { alpha3Code } = useParams();

  const navigate = useNavigate();

  const [countryVal, setCountryVal] = useState<any>({});

  useEffect(() => {
    const value = countryData.filter(
      (each: any) => each.alpha3Code === alpha3Code
    );
    setCountryVal(value[0]);
  }, [alpha3Code]);

  const getBorderCountries = () => {
    if (countryVal && countryVal.borders?.length > 0) {
      const borderCountriesArr = countryVal.borders;

      const borderCountriesLinks = countryData.filter((eachCountry) =>
        borderCountriesArr.includes(eachCountry.alpha3Code)
      );

      return (
        <div className="border-countries">
          <span className="b-title">Border Countries: </span>&nbsp;
          <div className="border-chips">
            {borderCountriesLinks.map((eachCountry: any) => (
              <div className=" border-val" key={eachCountry.name}>
                <button
                  onClick={() => {
                    navigate(`/details/${eachCountry.alpha3Code}`);
                  }}
                  className="back-btn"
                >
                  {eachCountry.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      );
    }
  };
  return (
    <div className="main-listing details-div">
      <Link to={"/"} className="back-btn" title="Back to listings">
        <i className="fa-solid fa-arrow-left-long icon-sty"></i>
        Back
      </Link>

      {countryVal && countryVal.flags && (
        <div className="country-details">
          <div className="details-img">
            <img src={countryVal.flags.svg} alt="img" />
          </div>
          <div className="details-text">
            <p className="title">{countryVal.name}</p>
            <div className="basic-details">
              <div className="text-div">
                <p className="subText">
                  <b>Native Name: </b>
                  {countryVal.nativeName}
                </p>
                <p className="subText">
                  <b>Population: </b>
                  {countryVal.population.toLocaleString()}
                </p>
                <p className="subText">
                  <b>Region: </b>
                  {countryVal.region}
                </p>
                <p className="subText">
                  <b>Sub Pregion: </b>
                  {countryVal.subregion}
                </p>
                <p className="subText">
                  <b>Capital: </b>
                  {countryVal.capital}
                </p>
              </div>
              <div className="text-div">
                <p className="subText">
                  <b>Top Level Domain: </b>
                  {countryVal.topLevelDomain.join(", ")}
                </p>
                <p className="subText">
                  <b>Currencies: </b>
                  {countryVal.currencies
                    .map((each: any) => each.name)
                    .join(", ")}
                </p>
                <p className="subText">
                  <b>Languages: </b>
                  {countryVal.languages
                    .map((each: any) => each.name)
                    .join(", ")}
                </p>
              </div>
            </div>
            {getBorderCountries()}
          </div>
        </div>
      )}
    </div>
  );
};

export default CountryDetails;
