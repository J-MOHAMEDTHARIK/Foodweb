import React from "react";
import "./Exploremenu.css";
import { menu_list } from "../assets/assets";

const Exploremenu = ({ category, setCategory }) => {
  return (
    <div className="exploremenu" id="exploremenu">
      <h2>Explore Our Menu</h2>
      <p>
        Browse our menu to explore a variety of delicious dishes, crafted with
        fresh ingredients and rich flavors. From appetizers to desserts, find
        the perfect meal to satisfy your cravings.
      </p>
      <div className="menu_list">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
              className="menu_item"
            >
              <img
                className={category === item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt=""
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default Exploremenu;
