import React, { useContext } from "react";
import "./Food.css";
import { assets } from "../assets/assets";
import { Storecontext } from "../context/Storecontext";

const Fooditem = ({ id, name, price, description, image }) => {
  const { cartitem, addtocart, removefromcart } = useContext(Storecontext);

  return (
    <div className="food-item">
      <div className="img_div">
        <img className="images" src={image} alt="" />
        {!cartitem[id] ? (
          <img
            className="add"
            onClick={() => addtocart(id)}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="buttons">
            <img
              onClick={() => removefromcart(id)}
              src={assets.remove_icon_red}
              alt=""
            />

            <p>{cartitem[id]}</p>
            <img
              onClick={() => addtocart(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="food-info">
        <div className="name-rate">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="dis">{description}</p>
        <p className="pri">${price}</p>
      </div>
    </div>
  );
};

export default Fooditem;
