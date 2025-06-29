import { createContext, useState } from "react";
import { food_list } from "../assets/assets";

export const Storecontext = createContext(null);

const StorecontextProvider = (props) => {
  const [cartitem, setcartitem] = useState({});

  const addtocart = (itemId) => {
    if (!cartitem[itemId]) {
      setcartitem((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setcartitem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removefromcart = (itemId) => {
    setcartitem((prev) => {
      if (prev[itemId] === 1) {
        const newCart = { ...prev };
        delete newCart[itemId];
        return newCart;
      }
      return { ...prev, [itemId]: prev[itemId] - 1 };
    });
  };

  const getTotal = () => {
    let totalamount = 0;
    for (const item in cartitem) {
      if (cartitem[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalamount += itemInfo.price * cartitem[item];
      }
    }
    return totalamount;
  };

  const convalue = {
    food_list,
    cartitem,
    setcartitem,
    addtocart,
    removefromcart,
    getTotal,
  };

  return (
    <Storecontext.Provider value={convalue}>
      {props.children}
    </Storecontext.Provider>
  );
};

export default StorecontextProvider;
