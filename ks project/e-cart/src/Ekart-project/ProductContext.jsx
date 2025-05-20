import React, { createContext, useState, useEffect } from 'react';
import useFetch from './useFetch';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const data = useFetch('https://fakestoreapi.com/products');
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (Array.isArray(data)) {
      setProducts(data);
    }
  }, [data]);

  const sortProducts = (order) => {
    const sorted = [...products].sort((a, b) =>
      order === 'lowToHigh' ? a.price - b.price : b.price - a.price
    );
    setProducts(sorted);
  };

  return (
    <ProductContext.Provider value={{ products, sortProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
