import Navbar from "./Ekart-project/Navbar";
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import "./Ekart-project/Ekart.css"
import Home from "./Ekart-project/Home";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
// import Carosal from "./Ekart-project/Carosal";
import Footer from "./Ekart-project/Footer";
import Mens from "./Ekart-project/Mens";
// import Card from "./Ekart-project/Card";
import Womens from "./Ekart-project/Womens";
import Electronics from "./Ekart-project/Electronics";
import Jewelery from "./Ekart-project/Jewelery";
import Cart from "./Ekart-project/Cart";
import Readmore from "./Ekart-project/Readmore";
import SearchResults from "./Ekart-project/Searchresult";
import { useState } from "react";
// import Sort from "./Ekart-project/Sort";
import AllProducts from "./Ekart-project/AllProducts";
import 'bootstrap/dist/css/bootstrap.min.css';
import CheckoutPage from "./Ekart-project/CheckoutPage";
import { ToastContainer } from "react-toastify";






function App() {  
  return (
    <>
    <BrowserRouter>
    <Navbar></Navbar>
    <SearchResults></SearchResults>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/mens" element={<Mens/>}></Route>
      <Route path="/womens" element={<Womens/>}></Route>
      <Route path="/electronics" element={<Electronics/>}></Route>
      <Route path="/jewelery" element={<Jewelery/>}></Route>
      <Route path="/allproducts" element={<AllProducts/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
      <Route path="/page/:id" element={<Readmore/>}></Route>
      <Route path="/checkout" element={<CheckoutPage/>}></Route>
    </Routes>
    <Footer></Footer>
    <ToastContainer></ToastContainer>
    </BrowserRouter>
  {/* <Sample/> */}
  {/* <Card></Card>
  <Readmore></Readmore> */}
    </>
  );
}

export default App;


// https://www.freetestapi.com/api/v1/products
