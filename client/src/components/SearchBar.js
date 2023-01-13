import React from "react";
import "./SearchBar.css";
import { SearchBox } from "react-instantsearch-dom";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  let navigate = useNavigate();

  const routeChangeSubmit = (query) => {
    let queryURI = encodeURIComponent(query);
    let path = `/results/${queryURI}`;
    navigate(path);
  };

  const routeChangeReset = () => {
    let path = `/`;
    navigate(path);
  };

  return (
    <div className="search__bar">
      <SearchBox
        showLoadingIndicator={true}
        onSubmit={(event) => {
          event.preventDefault();
          if (event.target[0].value) {
            routeChangeSubmit(event.target[0].value);
          }
        }}
        onReset={() => {
          routeChangeReset();
        }}
      />
    </div>
  );
}

export default SearchBar;
