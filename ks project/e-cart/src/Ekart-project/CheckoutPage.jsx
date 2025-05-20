import React, { useState } from "react";
import {
  Form,
  Row,
  Col,
  Button,
  Card,
  Container,
  Modal,
  Alert,
} from "react-bootstrap";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [validated, setValidated] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    e.preventDefault();

    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      setIsFormSubmitted(true);
    }

    setValidated(true);
  };

  const handlePayment = (method) => {
    setPaymentMethod(method);
    setShowModal(true);
  };

  const handleCashOnDelivery = () => {
    setShowModal(false);
    setShowSuccess(true);
    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <Container className="py-5">
      <Card className="p-4 shadow shadow-lg border-0 rounded-4 mb-4">
        <h3 className="mb-4 text-center fw-bold">Delivery Information</h3>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="g-4">
            <Col lg={6}>
              <Form.Group controlId="formName">
                <Form.Label className="fw-semibold">Full Name</Form.Label>
                <div className="input-group">
                  <span className="input-group-text bg-light border-0">
                    <FaUser />
                  </span>
                  <Form.Control
                    required
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    isInvalid={validated && !formData.name}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide your name.
                  </Form.Control.Feedback>
                </div>
              </Form.Group>
            </Col>

            <Col lg={6}>
              <Form.Group controlId="formEmail">
                <Form.Label className="fw-semibold">Email</Form.Label>
                <div className="input-group">
                  <span className="input-group-text bg-light border-0">
                    <FaEnvelope />
                  </span>
                  <Form.Control
                    required
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    isInvalid={validated && !formData.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid email.
                  </Form.Control.Feedback>
                </div>
              </Form.Group>
            </Col>

            <Col lg={6}>
              <Form.Group controlId="formPhone">
                <Form.Label className="fw-semibold">Phone</Form.Label>
                <div className="input-group">
                  <span className="input-group-text bg-light border-0">
                    <FaPhone />
                  </span>
                  <Form.Control
                    required
                    type="tel"
                    name="phone"
                    placeholder="e.g. +123456789"
                    value={formData.phone}
                    onChange={handleChange}
                    isInvalid={validated && !formData.phone}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide a phone number.
                  </Form.Control.Feedback>
                </div>
              </Form.Group>
            </Col>

            <Col lg={6}>
              <Form.Group controlId="formAddress">
                <Form.Label className="fw-semibold">Address</Form.Label>
                <div className="input-group">
                  <span className="input-group-text bg-light border-0">
                    <FaMapMarkerAlt />
                  </span>
                  <Form.Control
                    required
                    type="text"
                    name="address"
                    placeholder="Enter delivery address"
                    value={formData.address}
                    onChange={handleChange}
                    isInvalid={validated && !formData.address}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please provide an address.
                  </Form.Control.Feedback>
                </div>
              </Form.Group>
            </Col>
          </Row>

          <div className="text-center mt-5">
            <Button
              type="submit"
              variant="dark"
              className="px-5 py-2 rounded-pill shadow-sm"
            >
              Confirm Delivery Details
            </Button>
          </div>
        </Form>
      </Card>

      {/* The rest of your code for payment and modal... (unchanged) */}

      {isFormSubmitted && (
        <Card className="p-4 shadow-sm border-0 rounded-4">
          <h4 className="mb-4 text-center fw-bold">Choose Payment Method</h4>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            <Button variant="info" onClick={() => handlePayment("qr")}>
              Pay with QR Code
            </Button>
            <Button variant="primary" onClick={() => handlePayment("card")}>
              Pay with Card
            </Button>
            <Button variant="success" onClick={() => handlePayment("cod")}>
              Cash on Delivery
            </Button>
          </div>
        </Card>
      )}

      {showSuccess && (
        <Alert variant="success" className="mt-4 text-center">
          ✅ Order placed successfully with Cash on Delivery!
        </Alert>
      )}

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {paymentMethod === "qr"
              ? "QR Code Payment"
              : paymentMethod === "card"
              ? "Card Payment"
              : "Cash on Delivery"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {paymentMethod === "qr" && (
            <div className="text-center">
              <p>Scan the QR code to complete payment:</p>
              <img
                src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=PaymentLink"
                alt="QR Code"
              />
            </div>
          )}
          {paymentMethod === "card" && (
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Card Number</Form.Label>
                <Form.Control type="text" placeholder="XXXX-XXXX-XXXX-XXXX" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Expiry</Form.Label>
                <Form.Control type="text" placeholder="MM/YY" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>CVV</Form.Label>
                <Form.Control type="password" placeholder="CVV" />
              </Form.Group>
              <Button variant="primary" onClick={() => setShowModal(false)}>
                Pay Now
              </Button>
            </Form>
          )}
          {paymentMethod === "cod" && (
            <div className="text-center">
              <p>You chose Cash on Delivery.</p>
              <Button variant="success" onClick={handleCashOnDelivery}>
                Confirm Order
              </Button>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default CheckoutPage;
