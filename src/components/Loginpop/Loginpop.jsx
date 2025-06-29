import React, { useState } from "react";
import "./Loginpop.css";
import { assets } from "../../assets/assets";

const Loginpop = ({ setLogin }) => {
  const [cur, setcur] = useState("Login");
  return (
    <div className="login-container">
      <form className="login">
        <div className="titles">
          <h2>{cur}</h2>
          <img onClick={() => setLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="inputs">
          {cur === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your Name" required />
          )}

          <input type="email" placeholder="Your Email" required />
          <input type="password" placeholder="Your Password" required />
        </div>
        <button>{cur === "Sign Up" ? "Create account" : "Login"}</button>
        <div className="conditions">
          <input type="checkbox" required />
          <p>By continuing , i agree to the terms of use & privacy police</p>
        </div>
        {cur === "Login" ? (
          <p>
            Create a new account{" "}
            <span onClick={() => setcur("Sign UP")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account{" "}
            <span onClick={() => setcur("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Loginpop;
