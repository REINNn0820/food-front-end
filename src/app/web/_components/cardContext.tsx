// "use client";
// import { createContext, useContext, useState } from "react";

// interface CartItem {
//   id: string;
//   name: string;
//   price: number;
//   quantity: number;
// }

// interface CartContextType {
//   cart: CartItem[];
//   addToCart: (item: CartItem) => void;
//   removeFromCart: (id: string) => void;
//   clearCart: () => void;
// }

// const CartContext = createContext<CartContextType | undefined>(undefined);

// export const CartProvider = ({ children }: { children: React.ReactNode }) => {
//   const [cart, setCart] = useState<CartItem[]>([]);

//   const addToCart = (item: CartItem) => {
//     setCart((prevCart) => {
//       const itemIndex = prevCart.findIndex(
//         (cartItem) => cartItem.id === item.id
//       );
//       if (itemIndex !== -1) {
//         const newCart = [...prevCart];
//         newCart[itemIndex].quantity += item.quantity;
//         return newCart;
//       }
//       return [...prevCart, item];
//     });
//   };

//   const removeFromCart = (id: string) => {
//     setCart((prevCart) => prevCart.filter((item) => item.id !== id));
//   };

//   const clearCart = () => {
//     setCart([]);
//   };

//   return (
//     <CartContext.Provider
//       value={{ cart, addToCart, removeFromCart, clearCart }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = (): CartContextType => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error("useCart must be used within a CartProvider");
//   }
//   return context;
// };
