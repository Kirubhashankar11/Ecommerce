import useFetch from "./useFetch";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./Cartpro";
import ReactStars from "react-stars";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Card = ({ cats }) => {
  const { addToCart } = useContext(CartContext);
  const cba = useFetch("https://fakestoreapi.com/products");
  const vels = cba.filter((val) => val.category === cats);

  const handleAddToCart = (item) => {
    addToCart(item);
    toast("Your product added to cart");
  };

  return (
    <div className="container">
      {/*  Render ToastContainer once here */}
      <ToastContainer position="top-right" autoClose={3000} />
      
      <div className="row row-cols-1 row-cols-lg-4 mx-auto">
        {vels.map((vals) => (
          <div className="container" key={vals.id}>
            <div className="card mt-5 mb-5 bg-body rounded shadow-lg border-5 cardy">
              <img
                src={vals.image}
                alt=""
                className="card-img-top p-3"
                height={300}
              />
              <div className="card-body">
                <h4 className="card-title titlee">{vals.title.substring(0, 11)}</h4>
                <p className="card-text">
                  <strong>Category:</strong> {vals.category}
                  <br />
                  <strong>Price:</strong> ${vals.price}
                  <br />
                  <span>
                    <ReactStars
                      edit={false}
                      count={5}
                      size={30}
                      isHalf={true}
                      value={vals.rating.rate}
                      activeColor="#ffd700"
                    />
                  </span>
                </p>

                <div className="d-flex justify-content-between">
                  <Link to={`/page/${vals.id}`}>
                    <button className="btn btn-info p-1">Read more</button>
                  </Link>
                  <button
                    className="btn btn-warning p-1"
                    onClick={() => handleAddToCart(vals)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
