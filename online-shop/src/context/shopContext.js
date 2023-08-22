import { createContext } from "react";
import { useCart } from "../hook/useCart";

export const ShopContext = createContext({
  cartItems: null,
  addToCart: () => {},
  removeFromCart: () => {},
  resetCart :() =>{}
});

export const ShopContextProvider = (props) => {
  return (
    <ShopContext.Provider value={useCart()}>
      {props.children}
    </ShopContext.Provider>
  );
};
