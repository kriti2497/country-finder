import CountryCard from "./CountryCard";
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import countryData from "../data.json";

const CountryListing = () => {
  return (
    <div className="country-listing">
      {countryData.map((each: any) => (
        <CountryCard country={each} />
      ))}
    </div>
  );
};

export default CountryListing;
