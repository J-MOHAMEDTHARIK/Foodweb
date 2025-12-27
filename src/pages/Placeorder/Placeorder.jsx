import React, { useContext, useState } from "react";
import "./Placeorder.css";
import { Storecontext } from "../../context/Storecontext";

const Placeorder = () => {
  const { getTotal } = useContext(Storecontext);
  const [showPayment, setShowPayment] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState("");
  const [paymentSubmitted, setPaymentSubmitted] = useState(false);

  const handleProceed = (e) => {
    e.preventDefault();
    setShowPayment(true);
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    if (!selectedMethod) {
      alert("Please select a payment method");
      return;
    }
    // simulate form submission
    setPaymentSubmitted(true);
    alert("Payment successful! Order placed.");
  };

  if (paymentSubmitted) {
    return (
      <div className="place-order">
        <div className="payment-success">
          <h2>Payment Successful!</h2>
          <p>Your order has been placed successfully.</p>
          <p>Thank you for your purchase!</p>
        </div>
      </div>
    );
  }

  return (
    <form className="place-order" onSubmit={handlePaymentSubmit}>
      <div className="left">
        <p className="title">Delivery Information</p>
        <div className="fields">
          <input type="text" placeholder="First name" required />
          <input type="text" placeholder="Second name" required />
        </div>
        <input type="email" placeholder="Email" required />
        <input type="text" placeholder="Street" required />
        <div className="fields">
          <input type="text" placeholder="City" required />
          <input type="text" placeholder="State" required />
        </div>
        <div className="fields">
          <input type="text" placeholder="Zip code" required />
          <input type="text" placeholder="Country" required />
        </div>
        <input type="tel" placeholder="Phone " required />
      </div>

      <div className="right">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div className="total-details">
            <p>Subtotal</p>
            <p>${getTotal()}</p>
          </div>
          <hr />
          <div className="total-details">
            <p>Delivery Fee</p>
            <p>$10</p>
          </div>
          <hr />
          <div className="total-details">
            <p>Total</p>
            <p>${getTotal() + 10}</p>
          </div>
        </div>

        {!showPayment ? (
          <button type="button" onClick={handleProceed}>
            PROCEED TO PAYMENT
          </button>
        ) : (
          <>
            <div className="payment-methods">
              <h3>Select Payment Method</h3>
              <div>
                <input
                  type="radio"
                  name="payment"
                  id="card"
                  value="card"
                  onChange={(e) => setSelectedMethod(e.target.value)}
                />
                <label htmlFor="card">Credit/Debit Card</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="payment"
                  id="paypal"
                  value="paypal"
                  onChange={(e) => setSelectedMethod(e.target.value)}
                />
                <label htmlFor="paypal">PayPal</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="payment"
                  id="cod"
                  value="cod"
                  onChange={(e) => setSelectedMethod(e.target.value)}
                />
                <label htmlFor="cod">Cash on Delivery</label>
              </div>
            </div>

            {selectedMethod === "card" && (
              <div className="card-form">
                <h4>Enter Card Details</h4>
                <input type="text" placeholder="Card Number" required />
                <input type="text" placeholder="Card Holder Name" required />
                <div className="fields">
                  <input
                    type="text"
                    placeholder="Expiry Date (MM/YY)"
                    required
                  />
                  <input type="text" placeholder="CVV" required />
                </div>
              </div>
            )}

            {selectedMethod === "paypal" && (
              <div className="paypal-note">
                <p>You will be redirected to PayPal after clicking Pay Now.</p>
              </div>
            )}

            {selectedMethod === "cod" && (
              <div className="cod-note">
                <p>Pay with cash when your order is delivered.</p>
              </div>
            )}

            <button type="submit" className="pay-now-btn">
              PAY NOW
            </button>
          </>
        )}
      </div>
    </form>
  );
};

export default Placeorder;
