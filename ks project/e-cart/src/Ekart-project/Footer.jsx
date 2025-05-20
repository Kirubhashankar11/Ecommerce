// import {faFacebookF}from '@fortawesome/fontawesome-svg-core'
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faTwitter,
  faGooglePlusG,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => {
  return (
    <>
      <div className="fluid-container text-black-50 mt-5 mb-5">
        <div className="container">
          <div className="row" style={{cursor:"default"}}>
            <div className="col-lg-3">
              <img
                src="https://mira-minimal-3.myshopify.com/cdn/shop/files/logo_medium.png?v=1613169403"
                alt=""
              />
              <br />
              <br />
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aspernatur officiis ab suscipit ducimus deserunt sapiente!
              </p>
              <div className="d-flex gap-4 mt-4">
              <FontAwesomeIcon
                icon={faFacebookF}
                style={{ color: "#434447" }}
                
              />
              <FontAwesomeIcon
                icon={faTwitter}
                style={{ color: "#434447" }}
                
              />
              <FontAwesomeIcon
                icon={faGooglePlusG}
                style={{ color: "#434447" }}
                
              />
              <FontAwesomeIcon
                icon={faLinkedin}
                style={{ color: "#434447" }}
                
              />
              <FontAwesomeIcon
                icon={faInstagram}
                style={{ color: "#434447" }}
                
              />
              </div>
            </div>
            <div className="col-lg-3">
              <p style={{ fontSize: "20px" }} className="text-dark ft_head">SUPPORT</p>
              <p>Careers</p>
              <p>Sale Products</p>
              <p>Terms & Conditions</p>
              <p>Delivery Information</p>
            </div>
            <div className="col-lg-3">
              <p style={{ fontSize: "20px" }} className="text-dark ft_head">QUICK LINKS</p>
              <p>Login</p>
              <p>Create Account</p>
              <p>Mycart</p>
              <p>Wishlist</p>
            </div>
            <div className="col-lg-3">
              <p style={{ fontSize: "20px" }} className="text-dark ft_head">NEWS LETTER</p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aspernatur officiis ab suscipit ducimus deserunt sapiente!
              </p>
              <div className="btn-group">
                <div class="input-group input-group">
                  <input
                    type="email"
                    placeholder="Your Email Address"
                    className="E-mail p-2 px-3 form-control text-dark-50"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                  <span className="input-group-text bg-dark text-light" id="inputGroup-sizing-lg"><button className="btn text-light" style={{letterSpacing:"1px"}}>SUBSCRIBE</button></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
