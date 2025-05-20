// import { useEffect, useState } from "react";
import Homecard from "./Homecard";
import { useState,useContext } from "react";
import { CartContext } from "./Cartpro";
import { Link } from "react-router-dom";


const Home = () => {
 
  const { searchTerm } = useContext(CartContext);
  const [products ] = useState([]);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm)
  );

  if (searchTerm.trim() !== "") return null;

  return (
    <>
      <div className="container-fluid">
        <div className="container">
        {filteredProducts.map(product => (
        <Homecard key={product.id} product={product} />
      ))}
         
          <div className="border border-dark border-5 rounded-3 px-4 mt-5">
            <h3 className="mt-3 headerss">Best of men's clothing:</h3>
            <Link to={"/mens"} className="text-decoration-none"><Homecard cat="men's clothing"></Homecard></Link>
          </div>
          <div className="border border-dark border-5 rounded-3 px-4 mt-5">
            <h3 className="mt-3 headerss">Best of jewelery:</h3>
            <Link to={"/jewelery"} className="text-decoration-none"><Homecard cat="jewelery"></Homecard></Link>
          </div>
          <div className="border border-dark border-5 rounded-3 px-4 mt-5">
            <h3 className="mt-3 headerss">Best of electronics:</h3>
            <Link to={"/electronics"} className="text-decoration-none"><Homecard cat="electronics"></Homecard></Link>
          </div>
          <div className="border border-dark border-5 rounded-3 px-4 mt-5">
            <h3 className="mt-3 headerss">Best Deals of women's clothing:</h3>
            <Link to={"/womens"}className="text-decoration-none"><Homecard cat="women's clothing"></Homecard></Link>
          </div>
        </div>
      </div>
      {/* <HomePage searchTerm={searchTerm} /> */}
    </>
  );
};

export default Home;
