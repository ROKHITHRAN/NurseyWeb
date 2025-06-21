import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { Plant, CartItem, WishlistItem } from "../types";
import { auth, db } from "../service/firebase-config";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

export interface User {
  email: string;
  displayName: string;
  photoURL: string;
  lastLogin: string;
  status: string;
  role?: string;
}

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
    role: "user",
  });

  // ✅ Persist login on refresh
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        const userRef = doc(db, "users", firebaseUser.email!);
        const userSnap = await getDoc(userRef);
        const userData = userSnap.exists() ? userSnap.data() : {};
        setUser({
          email: firebaseUser.email ?? "",
          displayName: firebaseUser.displayName ?? "",
          photoURL: firebaseUser.photoURL ?? "",
          lastLogin: new Date().toISOString(),
          status: "active",
          role: userData.role || "user",
        });
      }
    });
    return () => unsubscribe();
  }, []);

  const addToCart = async (plant: Plant, quantity: number) => {
    const userEmail = user?.email;
    if (!userEmail) return;

    setCart((prev) => {
      const existingItem = prev.find((item) => item.plant.id === plant.id);
      const updatedCart = existingItem
        ? prev.map((item) =>
            item.plant.id === plant.id
              ? { ...item, quantity: item.quantity + quantity }
              : item
          )
        : [...prev, { plant, quantity }];

      const cartRef = doc(db, userEmail, "cart");
      setDoc(cartRef, { cart: updatedCart });

      return updatedCart;
    });
  };

  const removeFromCart = async (plantId: string) => {
    const userEmail = user?.email;
    if (!userEmail) return;

    setCart((prev) => {
      const updatedCart = prev.filter((item) => item.plant.id !== plantId);
      const cartRef = doc(db, userEmail, "cart");
      setDoc(cartRef, { cart: updatedCart });
      return updatedCart;
    });
  };

  const updateCartItemQuantity = async (plantId: string, quantity: number) => {
    if (quantity <= 0) return removeFromCart(plantId);
    const userEmail = user?.email;
    if (!userEmail) return;

    setCart((prev) => {
      const updatedCart = prev.map((item) =>
        item.plant.id === plantId ? { ...item, quantity } : item
      );
      const cartRef = doc(db, userEmail, "cart");
      setDoc(cartRef, { cart: updatedCart });
      return updatedCart;
    });
  };

  const addToWishlist = (plant: Plant) => {
    const wisListRef = doc(db, user?.email, "wishlist");
    if (!isInWishlist(plant.id)) {
      setDoc(wisListRef, { wishlist: [...wishlist, { plant }] });
      setWishlist((prev) => [...prev, { plant }]);
    }
  };

  const removeFromWishlist = (plantId: string) => {
    const newWishlist = wishlist.filter((item) => item.plant.id !== plantId);
    const wishlistRef = doc(db, user?.email, "wishlist");
    setDoc(wishlistRef, { wishlist: newWishlist });
    setWishlist(newWishlist);
  };

  const isInWishlist = (plantId: string) =>
    wishlist.some((item) => item.plant.id === plantId);

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
