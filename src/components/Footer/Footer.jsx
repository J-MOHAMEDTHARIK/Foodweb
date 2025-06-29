import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footcontent">
        <div className="footleft">
          <img className="logo" src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
            ratione! Exercitationem repellat soluta, atque dolorum quis
            voluptatum praesentium deserunt, molestiae magni eaque repellendus a
            alias illo commodi beatae dolore dignissimos!
          </p>
          <div className="icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
          </div>
        </div>

        <div className="footcenter">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Devlivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footright">
          <h2>GEt IN TOUCH</h2>
          <ul>
            <li>6382657029</li>
            <li>contact@goodfood.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="rights">
        Copyright 2024 &copy; Goodfood.com-All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
