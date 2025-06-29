import React, { useContext } from "react";
import "./Cart.css";
import { Storecontext } from "../../context/Storecontext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartitem, food_list, removefromcart, getTotal } =
    useContext(Storecontext);
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="titles">
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item) => {
          const quantity = cartitem[item._id];
          if (quantity > 0) {
            return (
              <div className="cart-items-item" key={item._id}>
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{quantity}</p>
                <p>${item.price * quantity}</p>
                <button onClick={() => removefromcart(item._id)}>Remove</button>
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>

          <div className="total-details">
            <p>Subtotal</p>
            <p>${getTotal()}</p>
          </div>
          <hr />
          <div className="total-details">
            <p>Delivery Fee</p>
            <p>${10}</p>
          </div>
          <hr />
          <div className="total-details">
            <p>Total</p>
            <p>${getTotal() + 10}</p>
          </div>
        </div>

        <div className="promo-code">
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div className="promo-input">
              <input type="text" placeholder="Promo code" />
              <button className="submit">SUBMIT</button>
            </div>
            <button
              onClick={() => navigate("/order")}
              className="checkout-button"
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
