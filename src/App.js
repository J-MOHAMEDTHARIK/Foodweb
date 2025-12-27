import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import Placeorder from "./pages/Placeorder/Placeorder";
import Footer from "./components/Footer/Footer";
import Loginpop from "./components/Loginpop/Loginpop";

const App = () => {
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
    setLogin(false);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <>
      {login ? <Loginpop setLogin={setLogin} onLogin={handleLogin} /> : <></>}
      <div className="app">
        <Navbar setLogin={setLogin} user={user} onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Placeorder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
