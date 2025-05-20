// CartContext.js
import { createContext, useState } from "react";
import useFetch from "./useFetch";

export const CartContext = createContext();

export const CartPro = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  // const [products, setProducts] = useState([]);
  const products = useFetch("https://fakestoreapi.com/products");

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((i) => i.id === item.id);
      if (existing) {
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((i) => i.id !== id));
  };

  const updateQuantity = (id, delta) => {
    setCartItems(
      (prevItems) =>
        prevItems
          .map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + delta } : item
          )
          .filter((item) => item.quantity > 0) // Removes items with 0 or less quantity
    );
  };
  const normalizedSearch = searchTerm.trim().toLowerCase();
  const filteredProducts = products.filter((p) =>
    p.title.toLowerCase().includes(normalizedSearch)
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        searchTerm,
        setSearchTerm,
        filteredProducts,
        updateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
