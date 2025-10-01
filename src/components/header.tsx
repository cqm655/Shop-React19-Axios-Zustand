import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { useCart } from "../store/use-cart";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  const cartCount = useCart((state) => state.count);
  const cartData = useCart((state) => state.cart);
  const toggleCart = useCart((state) => state.toggleCard);
  const isOpen = useCart((state) => state.isOpen);
  console.log(isOpen);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openCart = () => {
    if (toggleCart) {
      toggleCart(!isOpen);
    }
  };

  return (
    <header
      className={`sticky z-10 top-4 w-1/3 mx-auto min-w-fit mt-2 rounded-2xl shadow-lg transition-all duration-300 ${
        scrolled
          ? "bg-black/30 text-white"
          : "bg-white/30 text-black dark:text-white/30"
      }`}
    >
      <nav
        className="flex space-x-4 justify-center items-center text-xl p-4 w-full h-full rounded-2xl"
        style={{ backdropFilter: "blur(20px)" }}
      >
        <NavLink
          to={"/"}
          end
          className="rounded-md px-3 py-2 font-medium text-inherit hover:bg-gray-700 hover:text-white transition duration-300 ease-in-out"
        >
          Main
        </NavLink>

        <NavLink
          to={"/products"}
          end
          className="rounded-md px-3 py-2 font-medium text-inherit hover:bg-gray-700 hover:text-white transition duration-300 ease-in-out"
        >
          Products
        </NavLink>
      </nav>
      {cartData.length >= 1 && (
        <div
          className={`shopping-cart  absolute top-1/3 right-[-80%] p-3 rounded-2xl shadow-xl ring-1 ring-white/10 hover:bg-gray-700/20 hover:cursor-pointer backdrop-blur-lg transition-all duration-400 ${
            scrolled
              ? "bg-black/30 text-white"
              : "bg-white/30 text-black dark:text-white/30"
          }transition-all duration-400`}
          style={{ backdropFilter: "blur(20px)" }}
          onClick={openCart}
        >
          <span className="absolute ml-[-25px] mt-[-10px] bg-yellow-100 text-yellow-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300">
            {cartCount}
          </span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
        </div>
      )}
    </header>
  );
};
