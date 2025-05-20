import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "./Cartpro";


const Navbar = () => {
  const { cartItems, setSearchTerm } = useContext(CartContext);

  return (
    <>
      <header className="container-fluid bg-light">
        <div className="container">
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <a class="navbar-brand" href="/">
              <img
                src="https://mira-minimal-3.myshopify.com/cdn/shop/files/logo_medium.png?v=1613169403"
                alt=""
                width={90}
                height={50}
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-evenly"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mb-2 mb-lg-0 my-auto gap-lg-3">
                <li className="navv_list my-auto">
                  <Link
                    to={"/"}
                    classNameName="nav-link active"
                    aria-current="page"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <h5>Home</h5>
                  </Link>
                </li>
                <li className="navv_list my-auto">
                  <Link
                    to={"/mens"}
                    classNameName="nav-link"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <h5>Mens</h5>
                  </Link>
                </li>
                <li className="navv_list my-auto">
                  <Link
                    to={"/womens"}
                    classNameName="nav-link "
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <h5>Womens</h5>
                  </Link>
                </li>
                <li className="navv_list my-auto">
                  <Link
                    to={"/electronics"}
                    classNameName="nav-link"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <h5>Electronics</h5>
                  </Link>
                </li>
                <li className="navv_list my-auto">
                  <Link
                    to={"/jewelery"}
                    classNameName="nav-link"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <h5>Jewelery</h5>
                  </Link>
                </li>
                <li className="navv_list my-auto">
                  <Link
                    to={"/allproducts"}
                    classNameName="nav-link"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <h5>All Products</h5>
                  </Link>
                </li>
              </ul>
              <div className="d-flex flex-row ms-lg-5 my-auto">
                <div className="col-sm-6 col-lg-12 my-auto">
                  <form className="d-flex" role="search">
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Search products…"
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button className="btn btn-outline-success" type="submit">
                      Search
                    </button>
                  </form>
                </div>
                <div className="my-auto">
                  <Link
                    to={"/cart"}
                    className="nav-link"
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    <button type="button" class="btn position-relative">
                      <FontAwesomeIcon
                        icon={faCartShopping}
                        size="2xl"
                        style={{ color: "#74C0FC" }}
                        classNameName="py-2"
                      />
                      {cartItems.length > 0 &&(
                      <span class="position-absolute top-0 start-90 translate-middle badge rounded-pill bg-danger">
                        {cartItems.length}
                        <span class="visually-hidden">unread messages</span>
                      </span>
                      )}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
