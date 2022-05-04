import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "../styles/Searchbar.css";

function Searchbar() {
  return (
    <div className="searchbar">
      <input
        placeholder="Search movies"
        value="Spiderman"
        onChange={() => {}}
      />
      <SearchIcon onClick={() => {}} />
    </div>
  );
}

export default Searchbar;
