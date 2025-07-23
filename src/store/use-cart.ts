import { create } from "zustand";
import { Products } from "../connect/types";

type CartState = {
  count: number;
  cart: Products[];
  addToCart: (item: Products) => void;
  removeFromCart: (id: number) => void;
  toggleCard?: (isOpen: boolean) => void;
  isOpen?: boolean | false;
};
export const useCart = create<CartState>((set) => ({
  count: 0,
  cart: [],
  addToCart: (item) => {
    set((state) => {
      const existingItem = state.cart.find(
        (cartItem) => cartItem.id === item.id,
      );
      if (existingItem) {
        return {
          count: state.count,
          cart: state.cart.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: state.count + 1 }
              : cartItem,
          ),
        };
      }
      return {
        count: state.count + 1,
        cart: [...state.cart, { ...item, quantity: 1 }],
      };
    });
  },

  removeFromCart: (id: number) =>
    set((state) => {
      const existingItem = state.cart.find((cartItem) => cartItem.id === id);
      if (existingItem) {
        return {
          count: state.count - 1,
          cart: state.cart.map((cartItem) =>
            cartItem.id === id
              ? { ...cartItem, quantity: state.count - 1 }
              : cartItem,
          ),
        };
      }
      return {
        count: state.count - 1,
        cart: state.cart.filter((cartItem) => cartItem.id !== id),
      };
    }),

  toggleCard: (isOpen) => set({ isOpen }),
}));
