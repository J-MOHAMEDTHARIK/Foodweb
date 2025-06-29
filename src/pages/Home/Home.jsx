import React, { useState } from "react";
import "./Home.css";
import Header from "../../components/Header/Header";
import Exploremenu from "../../Exploremenu/Exploremenu";
import FoodDisplay from "../../FoodDisplay/FoodDisplay";

const Home = () => {
  const [category, setCategory] = useState("all");
  return (
    <div>
      <Header />
      <Exploremenu category={category} setCategory={setCategory} />
      <FoodDisplay />
    </div>
  );
};

export default Home;
