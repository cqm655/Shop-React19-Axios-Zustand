import React from "react";
import { useCart } from "../store/use-cart";

export const Cart = () => {
  const cart = useCart((state) => state.cart);
  const showCart = useCart((state) => state.isOpen);
  const closeModal = useCart((state) => state.toggleCard);

  const handleCloseModal = () => {
    if (closeModal) {
      closeModal(!showCart);
    }
  };
  return (
    <div className=" fixed top-0 left-0 w-full h-full z-50 bg-black/50 flex items-center justify-center ">
      {showCart && (
        <div
          className="shadow-xl  rounded-2xl max-h-[800px] overflow-y-scroll  scrollbar-glass  bg-white/20 backdrop-blur-md p-4"
          style={{ backdropFilter: "blur(20px)" }}
        >
          <div className="cart-btn relative flex justify-end ">
            <button
              className="rounded bg-gray-600 text-white hover:bg-gray-400 transition-all duration-500 hover:text-gray-100 p-2 mr-4 "
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
          {cart.map((item) => {
            return (
              <div
                className="grid grid-cols-3 gap-2 ml-2 mr-2 mt-2 cart-data w-[570px]  border-2 rounded-2xl p-2 bg-gray-100"
                key={item.id}
              >
                <div className="w-[100px] col-span-1">
                  <img src={`${item.thumbnail}`} />
                  <div>
                    <span className="font-bold">Title: {item.title}</span>
                  </div>
                  <div>
                    <span className="text-red-500">Price: {item.price}</span>
                  </div>
                </div>
              </div>
            );
          })}
          {/*<div className={"cart-checkout w-[500px] h-[100px] bg-red-600"}></div>*/}
        </div>
      )}
    </div>
  );
};
