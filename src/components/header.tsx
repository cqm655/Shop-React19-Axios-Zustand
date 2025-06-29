import { useEffect, useState } from "react";
import { NavLink } from "react-router";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{ backdropFilter: "blur(20px)" }}
      className={`sticky z-10 top-4 w-1/3 mx-auto min-w-fit mt-2 rounded-2xl p-4 shadow-lg transition-all duration-300 ${
        scrolled
          ? "bg-black/30 text-white"
          : "bg-white/30 text-black dark:text-white/30"
      }`}
    >
      <nav className="flex space-x-4 justify-center items-center text-xl">
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
    </header>
  );
};
