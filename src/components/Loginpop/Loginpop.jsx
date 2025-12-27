import React, { useState } from "react";
import "./Loginpop.css";
import { assets } from "../../assets/assets";

const Loginpop = ({ setLogin, onLogin }) => {
  const [cur, setcur] = useState("Login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cur === "Sign Up") {
      // Sign up logic
      const userData = {
        name: name,
        email: email,
        firstLetter: name.charAt(0).toUpperCase(),
      };
      onLogin(userData);
    } else {
      // Login logic - for demo, we'll use email as name if name not provided
      const userData = {
        name: name || email.split("@")[0],
        email: email,
        firstLetter: (name || email.split("@")[0]).charAt(0).toUpperCase(),
      };
      onLogin(userData);
    }
  };

  return (
    <div className="login-container">
      <form className="login" onSubmit={handleSubmit}>
        <div className="titles">
          <h2>{cur}</h2>
          <img onClick={() => setLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="inputs">
          {cur === "Login" ? (
            <></>
          ) : (
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          )}

          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">{cur === "Sign Up" ? "Create account" : "Login"}</button>
        <div className="conditions">
          <input type="checkbox" required />
          <p>By continuing , i agree to the terms of use & privacy police</p>
        </div>
        {cur === "Login" ? (
          <p>
            Create a new account{" "}
            <span onClick={() => setcur("Sign Up")}>Click here</span>
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
