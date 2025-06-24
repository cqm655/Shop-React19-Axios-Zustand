import { NavLink, useNavigate } from "react-router";

export const Header = () => {
  return (
    <header
      style={{ backdropFilter: "blur(20px)" }}
      className="sticky z-10 top-4 w-1/3 mx-auto  mt-2 rounded-2xl   bg-white/30 shadow-lg  text-black p-4"
    >
      <nav className="flex gap-4 justify-center items-center">
        <NavLink to={"/"} end className="hover:underline no-underline">
          Main
        </NavLink>
        <NavLink to={"/products"} end className="hover:underline no-underline ">
          Products
        </NavLink>
      </nav>
    </header>
  );
};
