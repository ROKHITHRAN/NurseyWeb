import React, { createContext, useContext, useState, ReactNode } from "react";
import { Plant, CartItem, WishlistItem } from "../types";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../service/firebase-config.js";

interface AppContextType {
  cart: CartItem[];
  wishlist: WishlistItem[];
  login: boolean;
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
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
  const [user, setUser] = useState<User>({
    email: "",
    displayName: "",
    photoURL: "",
    lastLogin: "",
    status: "inactive",
  });

  const addToCart = async (plant: Plant, quantity: number) => {
    const userEmail = user?.email;

    if (!userEmail) {
      console.error("User is not authenticated");
      return;
    }

    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.plant.id === plant.id);
      let updatedCart;

      if (existingItem) {
        updatedCart = prevCart.map((item) =>
          item.plant.id === plant.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        updatedCart = [...prevCart, { plant, quantity }];
      }

      const cartRef = doc(db, userEmail, "cart");
      setDoc(cartRef, { cart: updatedCart })
        .then(() => {
          console.log("Cart updated in Firebase");
        })
        .catch((error) => {
          console.error("Error updating cart in Firebase:", error);
        });

      return updatedCart;
    });
  };

  const removeFromCart = async (plantId: string) => {
    const userEmail = user?.email;

    if (!userEmail) {
      console.error("User is not authenticated");
      return;
    }

    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.plant.id !== plantId);

      // Update Firebase
      const cartRef = doc(db, userEmail, "cart");
      setDoc(cartRef, { cart: updatedCart })
        .then(() => {
          console.log("Item removed from cart in Firebase");
        })
        .catch((error) => {
          console.error("Error removing item from Firebase cart:", error);
        });

      return updatedCart;
    });
  };

  const updateCartItemQuantity = async (plantId: string, quantity: number) => {
    const userEmail = user?.email;

    if (!userEmail) {
      console.error("User is not authenticated");
      return;
    }

    if (quantity <= 0) {
      removeFromCart(plantId);
      return;
    }

    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) =>
        item.plant.id === plantId ? { ...item, quantity } : item
      );

      // Update Firebase
      const cartRef = doc(db, userEmail, "cart");
      setDoc(cartRef, { cart: updatedCart })
        .then(() => {
          console.log("Cart item quantity updated in Firebase");
        })
        .catch((error) => {
          console.error(
            "Error updating cart item quantity in Firebase:",
            error
          );
        });

      return updatedCart;
    });
  };

  const addToWishlist = (plant: Plant) => {
    const wisListRef = doc(db, user?.email, "wishlist");

    if (!isInWishlist(plant.id)) {
      setDoc(wisListRef, { wishlist: [...wishlist, { plant }] })
        .then(() => {
          console.log("Wishlist updated in Firebase");
        })
        .catch((error) => {
          console.error("Error updating wishlist in Firebase:", error);
        });

      setWishlist((prevWishlist) => [...prevWishlist, { plant }]);
    }
  };

  const removeFromWishlist = (plantId: string) => {
    const newWishlist = wishlist.filter((item) => item.plant.id !== plantId);
    const wishlistRef = doc(db, user?.email, "wishlist");

    setDoc(wishlistRef, { wishlist: newWishlist })
      .then(() => {
        console.log("Wishlist updated in Firebase");
      })
      .catch((error) => {
        console.error("Error updating wishlist in Firebase:", error);
      });

    setWishlist(newWishlist);
  };

  const isInWishlist = (plantId: string) => {
    return wishlist.some((item) => item.plant.id === plantId);
  };

  const clearCart = () => {
    const userEmail = user?.email;
    const cartRef = doc(db, userEmail, "cart");
    setDoc(cartRef, { cart: [] });
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
        user,
        setUser,
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

export interface User {
  email: string;
  displayName: string;
  photoURL: string;
  lastLogin: string;
  status: string;
}
