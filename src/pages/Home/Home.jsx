import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import Exploremenu from "../../Exploremenu/Exploremenu";
import FoodDisplay from "../../FoodDisplay/FoodDisplay";

const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header />
      <Exploremenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
    </div>
  );
};

export default Home;
