import { create } from "zustand";
import { Products } from "../connect/types";

type CounterStore = {
  count: number;
  cart: Products[];
  addToCart: (item: Products) => void;
  removeFromCart: (id: number) => void;
};
export const useAddToCart = create<CounterStore>((set) => ({
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

  removeFromCart: () => {},
}));
