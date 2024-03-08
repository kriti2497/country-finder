import { useEffect, useState } from "react";

import CountryCard from "./CountryCard";
import FindCountry from "./FindCountry";
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import countryData from "../data.json";

const CountryListing = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchRegion, setSearchRegion] = useState("");
  const regionsArr = [
    ...new Set(countryData.map((eachCountry: any) => eachCountry.region)),
  ];

  const regionArrKey = regionsArr.map((each: string) => {
    return {
      id: Math.random(),
      region: each,
    };
  });

  const [filteredData, setFilteredData] = useState<any>(countryData);

  useEffect(() => {
    if (countryData.length > 0) {
      const filteredCountries = countryData.filter((country: any) => {
        // Check if the search string is present in either name or capital property
        const nameMatch = country?.name
          ?.toLowerCase()
          .includes(searchValue.trim().toLowerCase());
        const capitalMatch = country?.capital
          ?.toLowerCase()
          .includes(searchValue.trim().toLowerCase());

        // Return true if either name or capital matches the search string
        return nameMatch || capitalMatch;
      });

      setFilteredData(filteredCountries);
    }
  }, [searchValue]);

  useEffect(() => {
    if (countryData.length > 0) {
      const filteredCountries = countryData.filter((country: any) => {
        // Check if the search string is present in either name or capital property
        const regionMatch = country?.region
          ?.toLowerCase()
          .includes(searchRegion.toLowerCase());

        // Return true if either name or capital matches the search string
        return regionMatch;
      });

      setFilteredData(filteredCountries);
    }
  }, [searchRegion]);

  return (
    <div className="main-listing">
      <FindCountry
        setSearch={setSearchValue}
        searchStr={searchValue}
        regionsArr={regionArrKey}
        searchRegion={searchRegion}
        setSearchRegion={setSearchRegion}
      />
      <div className="country-listing">
        {filteredData.map((each: any) => (
          <CountryCard key={each.name} country={each} />
        ))}
      </div>
    </div>
  );
};

export default CountryListing;
