import React, { createContext, useContext, useState, ReactNode } from "react";
import { Plant, CartItem, WishlistItem } from "../types";

interface AppContextType {
  cart: CartItem[];
  wishlist: WishlistItem[];
  login: boolean;
  setLogin: React.Dispatch<React.SetStateAction<boolean>>;
  addToCart: (plant: Plant, quantity: number) => void;
  removeFromCart: (plantId: string) => void;
  updateCartItemQuantity: (plantId: string, quantity: number) => void;
  addToWishlist: (plant: Plant) => void;
  removeFromWishlist: (plantId: string) => void;
  isInWishlist: (plantId: string) => boolean;
  clearCart: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);
  const [login, setLogin] = useState<boolean>(false);

  const addToCart = (plant: Plant, quantity: number) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.plant.id === plant.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.plant.id === plant.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevCart, { plant, quantity }];
      }
    });
  };

  const removeFromCart = (plantId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.plant.id !== plantId));
  };

  const updateCartItemQuantity = (plantId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(plantId);
      return;
    }

    setCart((prevCart) =>
      prevCart.map((item) =>
        item.plant.id === plantId ? { ...item, quantity } : item
      )
    );
  };

  const addToWishlist = (plant: Plant) => {
    if (!isInWishlist(plant.id)) {
      setWishlist((prevWishlist) => [...prevWishlist, { plant }]);
    }
  };

  const removeFromWishlist = (plantId: string) => {
    setWishlist((prevWishlist) =>
      prevWishlist.filter((item) => item.plant.id !== plantId)
    );
  };

  const isInWishlist = (plantId: string) => {
    return wishlist.some((item) => item.plant.id === plantId);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <AppContext.Provider
      value={{
        cart,
        wishlist,
        addToCart,
        removeFromCart,
        updateCartItemQuantity,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        clearCart,
        login,
        setLogin,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
