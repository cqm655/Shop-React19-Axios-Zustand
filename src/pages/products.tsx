import { Header } from "../components/header";
import { SideBar } from "../components/side-bar";
import { Footer } from "../components/footer";
import { motion } from "framer-motion";
import { useGetProducts } from "../connect/useGetProducts";
import { ProductCard } from "../components/product-card";
import { Outlet } from "react-router";
import { useCart } from "../store/use-cart";
import React from "react";

export const Products = () => {
  const { data, loading, error } = useGetProducts();
  const showCart = useCart((state) => state.isOpen);
  const closeModal = useCart((state) => state.toggleCard);
  const cart = useCart((state) => state.cart);

  const handleCloseModal = () => {
    if (closeModal) {
      closeModal(!showCart);
    }
  };

  return (
    <main className="flex flex-1 overflow-hidden p-4 bg-gray-200 mt-4 relative">
      <SideBar />
      <div className=" h-full  w-full relative  overflow-y-auto rounded-xl bg-white shadow-md grid grid-cols-1 p-4 gap-4 ml-2 mr-2 mx-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.map((item) => {
          return <ProductCard data={item} key={item.id} loading={loading} />;
        })}
      </div>
      {!showCart && (
        <div className=" fixed top-0 left-0 w-full h-full z-50 bg-black/50 flex items-center justify-center">
          <div className=" w-[600px] h-[400px] rounded-lg shadow-xl p-6">
            <div
              style={{ backdropFilter: "blur(10px)" }}
              className="bg-gray-100/80 rounded-2xl w-[590px] h-[390px]"
            >
              <div className="cart-btn relative flex justify-end ">
                <button
                  className="rounded-2xl hover:bg-gray-400 transition-all duration-500 hover:text-white p-2 mr-4 mt-2"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
              </div>
              {cart.map((item) => {
                return (
                  <div className="cart-data w-full" key={item.id}>
                    <span className="font-bold">Title: {item.title}</span>
                  </div>
                );
              })}
              <p>Hello, cart here</p>
              {/* Poți adăuga conținut real din coșul de cumpărături aici */}
            </div>
          </div>
        </div>
      )}
    </main>
  );
};
