/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
interface IRegion {
  id: number;
  region: string;
}
const FindCountry: React.FC<{
  regionsArr: IRegion[];
  setSearch: (arg: string) => void;
  searchStr: string;
  setSearchRegion: (arg: string) => void;
  searchRegion: string;
}> = ({ regionsArr, setSearch, searchStr, setSearchRegion, searchRegion }) => {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <div className="search-country">
      <div className="icon-input">
        <i className="fa-solid fa-magnifying-glass icon-val"></i>
        <input
          onChange={(event: any) => {
            setSearchRegion("");
            setSearch(event.target.value);
          }}
          className="search-input"
          value={searchStr}
          placeholder="Search for a country..."
          type="search"
        />
      </div>
      <div className="dropdown">
        <div className="select" onClick={() => setOpenDropdown(!openDropdown)}>
          <span>{searchRegion ? searchRegion : "Filter by Region"}</span>
          <i className="fas fa-angle-down"></i>
        </div>
        <div className={`options-list ${openDropdown ? "active" : ""}`}>
          {regionsArr.map((region: IRegion) => (
            <div
              className="option"
              key={region.id}
              onClick={() => {
                setSearch("");
                setSearchRegion(region.region);
                setOpenDropdown(false);
              }}
            >
              {region.region}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FindCountry;
