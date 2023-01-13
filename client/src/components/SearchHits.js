import React from "react";
import { Hits } from "react-instantsearch-dom";
import ProductItem from "./ProductItem";
import aa from "search-insights";
import { Link } from "react-router-dom";

function Hit({ hit }) {
  return (
    <div className="hit">
      <Link
        to={`/products/${hit.id}`}
        state={{ selectedProduct: hit }}
        key={hit.id}
        onClick={() => {
          aa("convertedObjectIDs", {
            userToken: "user-1",
            index: "products",
            eventName: "Product conversion",
            objectIDs: [hit.id],
          });
        }}
      >
        <ProductItem product={hit} />
      </Link>
    </div>
  );
}

function SearchHits() {
  return (
    <>
      <Hits hitComponent={Hit} />
    </>
  );
}

export default SearchHits;
