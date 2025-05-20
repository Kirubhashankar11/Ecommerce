// SearchResults.jsx
import React, { useContext } from "react";
import { CartContext } from "./Cartpro";

const SearchResults = () => {
  const { searchTerm, filteredProducts } = useContext(CartContext);

  if (searchTerm.trim() === "") return null;

  return (
    <div className="container mt-4">
      <h5>Results for “{searchTerm}”:</h5>
      <div className="row">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(p => (
            <div key={p.id} className="col-lg-4 mb-3">
              <div className="border border-5 rounded-pill">
              <div className="card border border-5 shadow-lg ">
                <img
                  src={p.image}
                  className="card-img-top img-fluid mt-3"
                  alt={p.title}
                  style={{ height: 200, objectFit: "contain" }}
                />
                <div className="card-body">
                  <h6 className="card-title titlee text-truncate">{p.title}</h6>
                  <p>price:${p.price}</p>
                </div>
              </div>
              </div>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
