import React, { useContext } from "react";
import "./FoodDisplay.css";
import { Storecontext } from "../context/Storecontext";
import Fooditem from "../Fooditem/Fooditem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(Storecontext);
  return (
    <div className="food-display">
      <h2>Top Dishes For You</h2>
      <div className="food-list">
        {food_list.map((item, index) => {
          return (
            <Fooditem
              key={index}
              id={item._id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
