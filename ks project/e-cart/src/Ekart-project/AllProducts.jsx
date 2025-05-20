import { useEffect, useState,useContext } from "react";
import { CartContext } from "./Cartpro";
import { Link } from "react-router-dom";
import ReactStars from "react-stars";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function AllProducts() {
  const [products, setProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState("");
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setSortedProducts(data);
      });
  }, []);

  const handleSort = (e) => {
    const order = e.target.value;
    setSortOrder(order);

    let sorted = [...products];
    if (order === "low") sorted.sort((a, b) => a.price - b.price);
    if (order === "high") sorted.sort((a, b) => b.price - a.price);

    setSortedProducts(sorted);
  };
  const handleAddToCart = (item) => {
    addToCart(item);
    toast("Your product added to cart");
    // navigate("/cart");
  };

  return (
    <div className="container mt-5">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="d-flex justify-content-end mb-3">
        <select
          className="form-select w-auto"
          onChange={handleSort}
          value={sortOrder}
        >
          <option value="" disabled>Sort By</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>
      </div>

      <div className="container border border-5 border-dark">
        <div className="row row-cols-1 row-cols-lg-4 mx-auto">
          {sortedProducts.map((product) => (
            <div className="container">
              <div key={product.id} className="col">
                <div className="card card mt-5 mb-5 bg-body rounded shadow-lg cardy border border-5">
                  <img
                    src={product.image}
                    className="card-img-top p-3 img-fluid"
                    alt={product.title}
                    style={{ height: "250px", objectFit: "contain" }} />
                  <div className="card-body">
                    <h5 className="card-title text-truncate titlee">{product.title}</h5>
                    <p className="card-text">
                      <strong>Category:</strong> {product.category}<br />
                      <strong>Price:</strong> ${product.price}<br />
                      <strong>Rating:</strong> {product.rating.rate}
                      <span><ReactStars
                      edit={false}
                      count={5}
                      size={30}
                      isHalf={true}
                      value={product.rating.rate}
                      activeColor="#ffd700"
                    /></span>
                    </p>
                    <div className="d-flex justify-content-between">
                      <Link to={`/page/${product.id}`}>
                        <button className="btn btn-info p-1">Read more</button>
                      </Link>
                      <button className="btn btn-warning p-1" onClick={() => handleAddToCart(product)}>
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AllProducts;
