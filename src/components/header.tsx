import { NavLink, useNavigate } from "react-router";

export const Header = () => {
  return (
    <header
      style={{ backdropFilter: "blur(20px)" }}
      className="sticky z-10 top-4 w-1/3 mx-auto min-w-fit  mt-2 rounded-2xl   bg-white/30 shadow-lg  text-black p-4"
    >
      <nav className="flex space-x-4 justify-center items-center text-xl text-gray-500  ">
        <NavLink
          to={"/"}
          end
          className="rounded-md px-3 py-2 font-medium text-gray-500 hover:bg-gray-700 hover:text-white transition duration-300 ease-in-out"
        >
          Main
        </NavLink>

        <NavLink
          to={"/products"}
          end
          className="rounded-md px-3 py-2 font-medium text-gray-500 hover:bg-gray-700 hover:text-white transition duration-300 ease-in-out"
        >
          Products
        </NavLink>
      </nav>
    </header>
  );
};
