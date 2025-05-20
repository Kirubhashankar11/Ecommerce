import { useContext } from "react";
import { CartContext } from "./Cartpro";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cartItems, updateQuantity, setCartItems, removeFromCart } =
    useContext(CartContext);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container mt-5">
      <h2>Your Cart:</h2>

      {cartItems.length === 0 ? (
        <img
          src="https://www.jimeido.com/Images/Cart/emptycart.png"
          alt=""
          className="img-fluid rounded mx-auto d-block "
        />
      ) : (
        <>
          <div className="d-flex justify-content-end mb-5">
            <button
              className="btn btn-outline-danger"
              onClick={() => setCartItems([])}
            >
              Remove All
            </button>
          </div>

          <div className="row g-4 border border-4 border-secondary">
            {cartItems.map((item) => (
              <div key={item.id} className="col-md-6 col-lg-4">
                <div className="card border-5 mt-5 mb-5 bg-body rounded shadow-lg cardy">
                  <img
                    src={item.image}
                    className="card-img-top p-4"
                    alt={item.title}
                    style={{ height: "250px", objectFit: "contain" }}
                  />
                  <div className="card-body d-flex flex-column justify-content-between">
                    <h5 className="card-title text-truncate">{item.title}</h5>
                    <p className="card-text">
                      <strong>Category:</strong> {item.category} <br />
                      <strong>Price:</strong> ${item.price} <br />
                      <strong>Total:</strong> $
                      {(item.price * item.quantity).toFixed(2)}
                    </p>

                    <div className="d-flex align-items-center justify-content-between my-2">
                      <div className="btn-group">
                        <button
                          className="btn btn-sm btn-outline-secondary btn-"
                          onClick={() => updateQuantity(item.id, -1)}
                          style={{
                            borderTopLeftRadius: "0.5rem",
                            borderBottomLeftRadius: "0.5rem",
                            opacity: item.quantity <= 1 ? 0.5 : 1,
                            cursor:
                              item.quantity <= 1 ? "not-allowed" : "pointer",
                            width: "40px",
                          }}
                        >
                          -
                        </button>
                        <button className="btn btn-sm btn-light" disabled>
                          {item.quantity}
                        </button>
                        <button
                          className="btn btn-sm btn-outline-secondary"
                          onClick={() => updateQuantity(item.id, 1)}
                          style={{
                            borderTopRightRadius: "0.5rem",
                            borderBottomRightRadius: "0.5rem",
                            width: "40px",
                          }}
                        >
                          +
                        </button>
                      </div>

                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-start mt-4 border border-4">
            <div className="m-3">
              <h5>Total Items: {totalItems}</h5>
              <h5>Total Price: ${totalPrice.toFixed(2)}</h5>
              <Link to="/checkout">
                <button className="btn btn-success mt-3">Checkout</button>
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
